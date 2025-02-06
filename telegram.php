<?php
var_dump(getenv('TELEGRAM_BOT_TOKEN'));
var_dump(getenv('CHAT_ID'));
?>

$botToken = (getenv('TELEGRAM_BOT_TOKEN');
$chatId = (getenv('CHAT_ID');

$name = $_POST['name'];
$contact_method = $_POST['contact-method'];
$contact_value = $_POST[$contact_method];
$service = $_POST['service'];

$message = "📌 *Новая заявка!*\n\n";
$message .= "👤 *Имя:* $name\n";
$message .= "📞 *Контакт:* $contact_value ($contact_method)\n";
$message .= "🛠 *Услуга:* $service\n";

if ($service == "moving") {
    $message .= "\n🚚 *Доп. услуги для переезда:*\n";
    if (!empty($_POST['packing'])) $message .= "✅ Упаковка\n";
    if (!empty($_POST['packing-materials'])) $message .= "✅ Упаковочные материалы\n";
    if (!empty($_POST['assembly'])) $message .= "✅ Разборка и сборка мебели\n";
    if (!empty($_POST['labeling'])) $message .= "✅ Маркировка коробок\n";
    if (!empty($_POST['movers'])) $message .= "✅ Грузчики\n";
    if (!empty($_POST['truck'])) $message .= "✅ Грузовое авто\n";
    if (!empty($_POST['garbage'])) $message .= "✅ Вывоз мусора\n";
    if (!empty($_POST['stairs'])) $message .= "✅ Подъем/спуск без лифта\n";
}

if ($service == "storage") {
    $message .= "\n📦 *Доп. услуги для хранения:*\n";
    if (!empty($_POST['storage-packing'])) $message .= "✅ Упаковка\n";
    if (!empty($_POST['storage-materials'])) $message .= "✅ Упаковочные материалы\n";
    if (!empty($_POST['storage-assembly'])) $message .= "✅ Разборка и сборка мебели\n";
    if (!empty($_POST['storage-labeling'])) $message .= "✅ Маркировка коробок\n";
    if (!empty($_POST['storage-delivery'])) $message .= "✅ Доставка\n";
    
    // Добавляем тариф, если выбран
    if (!empty($_POST['storage-tariff'])) {
        $message .= "\n💰 *Выбранный тариф:* " . $_POST['storage-tariff'] . "\n";
    }
}

$message = urlencode($message);

$url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=$message&parse_mode=Markdown";
$response = file_get_contents($url);

if ($response) {
    echo "Заявка успешно отправлена!";
} else {
    echo "Ошибка при отправке!";
}
?>
