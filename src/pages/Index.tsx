import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Блог", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Search",
    title: "SEO-аудит",
    desc: "Полная диагностика сайта: технические ошибки, контент, ссылочный профиль. Получите детальный план действий.",
    price: "от 25 000 ₽",
  },
  {
    icon: "TrendingUp",
    title: "Комплексное продвижение",
    desc: "Системная работа по всем факторам ранжирования. Рост трафика и позиций на горизонте 3–6 месяцев.",
    price: "от 60 000 ₽/мес",
  },
  {
    icon: "FileText",
    title: "Контент-стратегия",
    desc: "Семантическое ядро, структура сайта, экспертные статьи и посадочные страницы под коммерческие запросы.",
    price: "от 40 000 ₽/мес",
  },
  {
    icon: "Link",
    title: "Ссылочный профиль",
    desc: "Безопасный набор ссылочной массы: трастовые доноры, крауд-маркетинг, PR-публикации.",
    price: "от 30 000 ₽/мес",
  },
  {
    icon: "Globe",
    title: "Локальное SEO",
    desc: "Продвижение в Яндекс Картах, Google Maps и геозависимых запросах. Трафик из вашего города.",
    price: "от 20 000 ₽/мес",
  },
  {
    icon: "BarChart2",
    title: "SEO-консалтинг",
    desc: "Стратегические сессии и менторинг вашего SEO-отдела. Разбор кейсов и планирование роста.",
    price: "от 15 000 ₽/сессия",
  },
];

const CASES = [
  {
    client: "Интернет-магазин электроники",
    metric: "+340%",
    label: "органического трафика",
    period: "за 8 месяцев",
    tags: ["E-commerce", "Яндекс", "Google"],
  },
  {
    client: "Юридическая компания",
    metric: "ТОП-3",
    label: "по 120 ключевым запросам",
    period: "за 5 месяцев",
    tags: ["B2B", "Услуги"],
  },
  {
    client: "Медицинский центр",
    metric: "+180%",
    label: "записей через сайт",
    period: "за 6 месяцев",
    tags: ["Медицина", "Локальное SEO"],
  },
  {
    client: "SaaS-платформа",
    metric: "×4.2",
    label: "рост лидов из поиска",
    period: "за 12 месяцев",
    tags: ["SaaS", "Google"],
  },
];

const PORTFOLIO = [
  { name: "Techno Market", niche: "Электроника", positions: 847, traffic: "125K" },
  { name: "LegalPro", niche: "Юриспруденция", positions: 312, traffic: "42K" },
  { name: "MedLine", niche: "Медицина", positions: 509, traffic: "68K" },
  { name: "CloudBase", niche: "SaaS / B2B", positions: 234, traffic: "31K" },
  { name: "FoodExpress", niche: "Доставка еды", positions: 671, traffic: "94K" },
  { name: "HomeReno", niche: "Ремонт и строительство", positions: 428, traffic: "57K" },
];

const TEAM = [
  { name: "Елена Жукова", role: "Основатель, Head of SEO", exp: "12 лет" },
  { name: "Екатерина Волкова", role: "Технический SEO-специалист", exp: "8 лет" },
  { name: "Дмитрий Карпов", role: "Контент-стратег", exp: "6 лет" },
  { name: "Анна Белова", role: "Link Building Lead", exp: "7 лет" },
];

const BLOG_POSTS = [
  {
    date: "28 марта 2025",
    tag: "Аналитика",
    title: "Алгоритм Яндекса 2025: что изменилось и как адаптировать стратегию",
    read: "8 мин",
  },
  {
    date: "15 марта 2025",
    tag: "Контент",
    title: "E-E-A-T в Google: как экспертность сайта влияет на позиции в 2025 году",
    read: "6 мин",
  },
  {
    date: "3 марта 2025",
    tag: "Техника",
    title: "Core Web Vitals: полный чеклист оптимизации для роста в поиске",
    read: "11 мин",
  },
];

const FAQ_ITEMS = [
  {
    q: "Сколько времени занимает вывод сайта в топ?",
    a: "В среднем первые значимые результаты видны через 2–3 месяца. Стабильный топ — 5–8 месяцев. Сроки зависят от конкурентности ниши, состояния сайта и выбранной стратегии.",
  },
  {
    q: "Гарантируете ли вы результат?",
    a: "Мы гарантируем выполнение всех работ в полном объёме и прозрачную отчётность. Гарантия конкретных позиций противоречит политике поисковых систем — честно об этом говорим.",
  },
  {
    q: "Как происходит управление моей заявкой?",
    a: "После отправки заявки вы получаете доступ к личному кабинету, где видите статус работ, отчёты и можете общаться с командой. Все задачи фиксируются и трекаются в системе.",
  },
  {
    q: "Можно ли продвигать молодой сайт?",
    a: "Да. Для молодых сайтов разрабатываем отдельную стратегию: фокус на НЧ-запросах, контентное наполнение, техническая оптимизация. Это закладывает правильный фундамент.",
  },
  {
    q: "Что входит в ежемесячный отчёт?",
    a: "Динамика позиций по всему семантическому ядру, органический трафик, конверсии, выполненные работы и план на следующий месяц. Отчёт приходит в первых числах каждого месяца.",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", company: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight">
            APEX<span className="text-copper">.</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contacts"
              className="font-body text-sm px-5 py-2.5 bg-foreground text-background hover:bg-foreground/85 transition-colors duration-200"
            >
              Получить аудит
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4 animate-fade-in">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-base py-1 text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="mt-2 font-body text-sm px-5 py-3 bg-foreground text-background text-center"
              onClick={() => setMenuOpen(false)}
            >
              Получить аудит
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://cdn.poehali.dev/projects/15b43cac-ac8a-44c1-a7f7-849d90c63898/files/8881fd96-8614-4463-aff1-0758ce0eb48f.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(hsl(30 60% 52%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 60% 52%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <div className="h-px w-12 bg-copper" />
              <span className="font-body text-sm tracking-widest uppercase text-copper">
                SEO-агентство полного цикла
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8 animate-fade-up-delay-1">
              Выводим бизнес<br />
              <em className="font-light italic">в топ поиска</em>
            </h1>

            <p className="font-body text-lg text-white/60 max-w-xl mb-12 leading-relaxed animate-fade-up-delay-2">
              Системное SEO-продвижение, которое даёт измеримый результат.
              Работаем с Яндексом и Google. Без воды — только рост.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <a
                href="#contacts"
                className="font-body text-sm px-8 py-4 bg-copper text-white hover:bg-copper/90 transition-colors duration-200 text-center"
              >
                Получить бесплатный аудит
              </a>
              <a
                href="#cases"
                className="font-body text-sm px-8 py-4 border border-white/30 text-white hover:border-white/60 transition-colors duration-200 text-center"
              >
                Смотреть кейсы
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 animate-fade-up-delay-4">
              {[
                { val: "9 лет", label: "на рынке" },
                { val: "200+", label: "проектов в работе" },
                { val: "×3.8", label: "средний рост трафика" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl md:text-4xl text-white font-light">{s.val}</div>
                  <div className="font-body text-sm text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-line" />
            <h2 className="font-display text-4xl md:text-5xl mb-4">Услуги</h2>
            <p className="font-body text-muted-foreground max-w-lg">
              Комплексные решения для роста в поисковых системах —
              от разового аудита до полного аутсорсинга SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-background p-8 hover-lift group cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border mb-6 group-hover:border-copper group-hover:text-copper transition-colors duration-300">
                  <Icon name={s.icon} size={18} />
                </div>
                <h3 className="font-display text-xl mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <div className="font-body text-sm font-medium text-copper">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-line" />
            <h2 className="font-display text-4xl md:text-5xl mb-4">Кейсы</h2>
            <p className="font-body text-muted-foreground max-w-lg">
              Реальные результаты наших клиентов с измеримыми метриками.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASES.map((c) => (
              <div
                key={c.client}
                className="bg-white p-10 border border-border hover-lift cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <div className="font-body text-sm text-muted-foreground mb-2">{c.client}</div>
                    <div className="flex gap-2 flex-wrap">
                      {c.tags.map((t) => (
                        <span key={t} className="font-body text-xs px-2 py-0.5 border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Icon name="ArrowUpRight" size={18} className="text-muted-foreground group-hover:text-copper transition-colors" />
                </div>
                <div className="font-display text-6xl text-copper font-light">{c.metric}</div>
                <div className="font-body text-base text-foreground mt-1">{c.label}</div>
                <div className="font-body text-sm text-muted-foreground mt-1">{c.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-line" />
            <h2 className="font-display text-4xl md:text-5xl mb-4">Портфолио</h2>
            <p className="font-body text-muted-foreground max-w-lg">
              Проекты в работе — разные ниши, стабильный результат.
            </p>
          </div>

          <div className="border border-border">
            <div className="grid grid-cols-4 px-6 py-3 border-b border-border bg-muted">
              {["Клиент", "Ниша", "Позиций в топ-10", "Трафик/мес"].map((h) => (
                <div key={h} className="font-body text-xs text-muted-foreground uppercase tracking-wider">{h}</div>
              ))}
            </div>
            {PORTFOLIO.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-4 px-6 py-5 hover:bg-muted/50 transition-colors ${i < PORTFOLIO.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="font-body font-medium text-sm">{p.name}</div>
                <div className="font-body text-sm text-muted-foreground">{p.niche}</div>
                <div className="font-body text-sm font-semibold text-copper">{p.positions}</div>
                <div className="font-body text-sm">{p.traffic}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-line" />
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">О нас</h2>
              <p className="font-body text-white/60 leading-relaxed mb-6">
                APEX — агентство поискового продвижения с 2016 года. Мы не занимаемся
                контекстом или таргетом — только SEO. Это позволяет нам быть лучшими в своей области.
              </p>
              <p className="font-body text-white/60 leading-relaxed mb-10">
                В команде 18 специалистов: SEO-стратеги, технические аналитики, контент-маркетологи
                и линкбилдеры. Каждый проект ведёт выделенная команда с персональным менеджером.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "200+", label: "успешных проектов" },
                  { val: "18", label: "экспертов в команде" },
                  { val: "9 лет", label: "опыта в SEO" },
                  { val: "94%", label: "клиентов продлевают контракт" },
                ].map((s) => (
                  <div key={s.label} className="border border-white/10 p-5">
                    <div className="font-display text-3xl text-white font-light">{s.val}</div>
                    <div className="font-body text-sm text-white/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {TEAM.map((m) => (
                <div key={m.name} className="border border-white/10 p-6 flex items-center justify-between">
                  <div>
                    <div className="font-body font-medium text-white">{m.name}</div>
                    <div className="font-body text-sm text-white/50 mt-0.5">{m.role}</div>
                  </div>
                  <div className="font-display text-lg text-copper italic">{m.exp}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="section-line" />
              <h2 className="font-display text-4xl md:text-5xl">Блог</h2>
            </div>
            <a href="#blog" className="hidden md:flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Все статьи <Icon name="ArrowRight" size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {BLOG_POSTS.map((post) => (
              <div key={post.title} className="bg-background p-8 hover-lift cursor-pointer group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-body text-xs px-2 py-0.5 bg-muted text-muted-foreground">{post.tag}</span>
                  <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-display text-xl mb-4 group-hover:text-copper transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Icon name="Clock" size={13} />
                  <span className="font-body text-xs ml-1">{post.read} чтения</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <span className="section-line" />
            <h2 className="font-display text-4xl md:text-5xl mb-4">Вопросы и ответы</h2>
            <p className="font-body text-muted-foreground">
              Отвечаем честно — без маркетинговых обещаний.
            </p>
          </div>

          <div className="border border-border">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={i < FAQ_ITEMS.length - 1 ? "border-b border-border" : ""}>
                <button
                  className="w-full text-left px-8 py-6 flex items-start justify-between gap-4 hover:bg-white/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-body font-medium text-base">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={16}
                    className="mt-1 flex-shrink-0 text-copper"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="section-line" />
              <h2 className="font-display text-4xl md:text-5xl mb-6">Оставить заявку</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-10">
                Расскажите о вашем проекте. Мы свяжемся в течение одного рабочего дня,
                проведём бесплатный экспресс-аудит и предложим стратегию.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: "Mail", text: "sibpion@ya.ru" },
                  { icon: "Phone", text: "+7 913 202-19-14" },
                  { icon: "MapPin", text: "Москва, Пресненская наб., 12" },
                  { icon: "Clock", text: "Пн–Пт, 9:00–19:00 МСК" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-4">
                    <div className="w-9 h-9 border border-border flex items-center justify-center text-copper flex-shrink-0">
                      <Icon name={c.icon} size={16} />
                    </div>
                    <span className="font-body text-sm">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="h-full flex items-center justify-center border border-border p-12 text-center">
                  <div>
                    <div className="w-14 h-14 border border-copper flex items-center justify-center mx-auto mb-6">
                      <Icon name="Check" size={24} className="text-copper" />
                    </div>
                    <h3 className="font-display text-2xl mb-3">Заявка принята</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Мы свяжемся с вами в течение одного рабочего дня.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs text-muted-foreground mb-1.5 block uppercase tracking-wide">Имя *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Александр"
                        className="w-full border border-border px-4 py-3 font-body text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-muted-foreground mb-1.5 block uppercase tracking-wide">Компания</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="ООО «Ромашка»"
                        className="w-full border border-border px-4 py-3 font-body text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1.5 block uppercase tracking-wide">Телефон *</label>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-border px-4 py-3 font-body text-sm bg-background focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1.5 block uppercase tracking-wide">Услуга</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full border border-border px-4 py-3 font-body text-sm bg-background focus:outline-none focus:border-foreground transition-colors appearance-none"
                    >
                      <option value="">Выберите услугу</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1.5 block uppercase tracking-wide">Сообщение</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Расскажите о вашем сайте и задачах..."
                      rows={4}
                      className="w-full border border-border px-4 py-3 font-body text-sm bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-foreground text-background font-body text-sm hover:bg-foreground/85 transition-colors duration-200"
                  >
                    Отправить заявку →
                  </button>

                  <p className="font-body text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-display text-2xl text-white">
              APEX<span className="text-copper">.</span>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-body text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <div className="font-body text-xs text-white/30">© 2025 APEX SEO</div>
          </div>
        </div>
      </footer>
    </div>
  );
}