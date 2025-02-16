exports.handler = async function (event) {
    const API_KEY = process.env.DEEPL_API_KEY;

    console.log("Received event body:", event.body); // Проверяем, что приходит в body

    let text, targetLang;
    try {
        ({ text, targetLang } = JSON.parse(event.body));
    } catch (error) {
        console.error("JSON parsing error:", error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid JSON input" })
        };
    }

    const url = "https://api-free.deepl.com/v2/translate";

    const params = new URLSearchParams();
    params.append("auth_key", API_KEY);
    params.append("text", text);
    params.append("target_lang", targetLang.toUpperCase());

    try {
        console.log("Sending request to DeepL API...");
        const response = await fetch(url, {
            method: "POST",
            body: params
        });

        const responseText = await response.text();
        console.log("DeepL API response:", responseText); // Логируем ответ API

        const data = JSON.parse(responseText);
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("Translation error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Ошибка перевода" })
        };
    }
};

console.log("DEEPL_API_KEY:", process.env.DEEPL_API_KEY);
