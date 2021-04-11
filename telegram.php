<?php

/* https://api.telegram.org/bot1776480271:AAGG8eobNWJ1B_8lGEsHnmY9iNMMcXFgyWw/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$age = $_POST['age'];
$review = $_POST['review'];
$token = "1776480271:AAGG8eobNWJ1B_8lGEsHnmY9iNMMcXFgyWw";
$chat_id = "-549894974";
$arr = array(
  'Имя пользователя: ' => $name,
  'Возраст: ' => $age,
  'Отзыв:' => $review
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: http://bodia-project/#review-input');
} else {
  echo "Error";
}
?>