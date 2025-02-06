export async function handler(event) {
  const TELEGRAM_BOT_TOKEN = process.env.VITE_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.VITE_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "❌ Нет API-ключа или chat_id!" }),
    };
  }

  const { message } = JSON.parse(event.body);

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });

  return {
    statusCode: response.ok ? 200 : 500,
    body: JSON.stringify({ success: response.ok }),
  };
}
