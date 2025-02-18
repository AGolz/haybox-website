const fetch = require("node-fetch");

exports.handler = async function (event) {
	try {
		const TELEGRAM_BOT_TOKEN = process.env.VITE_TELEGRAM_BOT_TOKEN;
		const CHAT_ID = process.env.VITE_CHAT_ID;
		const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

		if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
			return {
				statusCode: 500,
				body: JSON.stringify({ error: "Missing Telegram Bot Token or Chat ID" })
			};
		}

		const requestBody = JSON.parse(event.body);
		const messageText = requestBody.text || "Ошибка: пустое сообщение";

		const response = await fetch(TELEGRAM_API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: messageText,
				parse_mode: "Markdown"
			})
		});

		if (!response.ok) {
			throw new Error(`Telegram API Error: ${response.statusText}`);
		}

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true })
		};
	} catch (error) {
		console.error("Ошибка при отправке в Telegram:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({ error: error.message })
		};
	}
}
