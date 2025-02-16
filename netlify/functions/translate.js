exports.handler = async function (event) {
    console.log("📩 Получен запрос:", event.body);

    const API_KEY = process.env.DEEPL_API;

    if (!event.body) {
        console.error("🚨 Нет данных в запросе!");
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Нет данных в запросе" })
        };
    }

    let parsedBody;
    try {
        parsedBody = JSON.parse(event.body);
    } catch (error) {
        console.error("🚨 Ошибка парсинга JSON:", error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Некорректный JSON" })
        };
    }

    const { text, targetLang } = parsedBody;

    if (!text || !targetLang) {
        console.error("🚨 Отсутствуют параметры text или targetLang");
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Отсутствуют параметры text или targetLang" })
        };
    }

    const url = "https://api-free.deepl.com/v2/translate";
    const params = new URLSearchParams();
    params.append("auth_key", API_KEY);
    params.append("text", text);
    params.append("target_lang", targetLang.toUpperCase());

    try {
        console.log("📡 Отправка запроса в DeepL:", { text, targetLang });
        const response = await fetch(url, {
            method: "POST",
            body: params
        });

        const data = await response.json();
        console.log("✅ Ответ от DeepL:", data);

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("❌ Ошибка запроса к DeepL:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Ошибка запроса к DeepL" })
        };
    }
};
