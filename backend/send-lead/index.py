import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта на почту sibpion@ya.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    raw_body = event.get('body') or '{}'
    body = json.loads(raw_body)
    name = body.get('name', '').strip()
    company = body.get('company', '').strip()
    phone = body.get('phone', '').strip()
    service = body.get('service', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'name and phone required'}
        }

    smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
    smtp_user = os.environ['SMTP_USER']
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'sibpion@ya.ru'

    html = f"""
    <h2 style="color:#1a2035;font-family:sans-serif">Новая заявка с сайта APEX SEO</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
      <tr><td style="padding:6px 16px 6px 0;color:#888">Имя</td><td style="padding:6px 0"><b>{name}</b></td></tr>
      {"<tr><td style='padding:6px 16px 6px 0;color:#888'>Компания</td><td style='padding:6px 0'>" + company + "</td></tr>" if company else ""}
      <tr><td style="padding:6px 16px 6px 0;color:#888">Телефон</td><td style="padding:6px 0"><b>{phone}</b></td></tr>
      {"<tr><td style='padding:6px 16px 6px 0;color:#888'>Услуга</td><td style='padding:6px 0'>" + service + "</td></tr>" if service else ""}
      {"<tr><td style='padding:6px 16px 6px 0;color:#888'>Сообщение</td><td style='padding:6px 0'>" + message + "</td></tr>" if message else ""}
    </table>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка: {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'ok': True}
    }