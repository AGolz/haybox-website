exports.handler = async function (event) {
    const API_KEY = process.env.DEEPL_API_KEY;

    const { text, targetLang } = JSON.parse(event.body);
    const url = "https://api-free.deepl.com/v2/translate";
    
    const params = new URLSearchParams();
    params.append("auth_key", API_KEY);
    params.append("text", text);
    params.append("target_lang", targetLang.toUpperCase());

    try {
        const response = await fetch(url, {
            method: "POST",
            body: params
        });

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error("Ошибка перевода:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Ошибка перевода" })
        };
    }
};
