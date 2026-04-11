const WHATSAPP_NUMBER = "79132021914";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="white"
      >
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.72.7 5.28 1.94 7.5L.5 31.5l8.22-1.9A15.43 15.43 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a13.2 13.2 0 0 1-6.73-1.84l-.48-.29-4.88 1.13 1.16-4.74-.32-.49A13.23 13.23 0 1 1 16 28.8zm7.26-9.9c-.4-.2-2.35-1.16-2.72-1.29-.36-.13-.63-.2-.89.2s-1.02 1.29-1.25 1.56c-.23.26-.46.3-.86.1a10.84 10.84 0 0 1-3.19-1.97 11.96 11.96 0 0 1-2.21-2.75c-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.69.2-.23.26-.4.4-.66.13-.26.06-.5-.03-.69-.1-.2-.89-2.15-1.22-2.94-.32-.77-.65-.67-.89-.68h-.76c-.26 0-.69.1-1.05.5s-1.38 1.35-1.38 3.3 1.41 3.83 1.61 4.09c.2.26 2.78 4.25 6.74 5.96.94.41 1.68.65 2.25.83.95.3 1.81.26 2.49.16.76-.11 2.35-.96 2.68-1.89.33-.92.33-1.71.23-1.88-.1-.16-.36-.26-.76-.46z" />
      </svg>
    </a>
  );
}
