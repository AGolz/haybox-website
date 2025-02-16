async function translateText(text, targetLang) {
    console.log("Отправка запроса на перевод:", { text, targetLang });

    const response = await fetch("/.netlify/functions/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLang })
    });

    const data = await response.json();
    console.log("Ответ от Netlify translate:", data);

    return data.translations ? data.translations[0].text : text;
}
