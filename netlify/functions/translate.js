async function translateText(text, targetLang) {
    console.log("📤 Отправка запроса на перевод:", { text, targetLang });

    const response = await fetch("/.netlify/functions/translate", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ text, targetLang })
    });

    console.log("🔄 Получен ответ от сервера:", response);

    if (!response.ok) {
        console.error("⚠ Ошибка ответа от сервера:", response.status, response.statusText);
        return text;
    }

    const data = await response.json();
    console.log("✅ Декодированный JSON:", data);

    return data.translations ? data.translations[0].text : text;
}
