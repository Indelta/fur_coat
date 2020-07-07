<?php

  $phone = isset($_POST['phone']) ? preg_replace("/[^0-9]/", "", $_POST['phone']) : 0;
  $shuby = isset($_POST['shuby']) ? $_POST['shuby'] : '';
  $dublenki = isset($_POST['dublenki']) ? $_POST['dublenki'] : '';
  $mekhovyeZhelety = isset($_POST['mekhovye-zhelety']) ? $_POST['mekhovye-zhelety'] : '';
  $paltoSMekhom = isset($_POST['palto-s-mekhom']) ? $_POST['palto-s-mekhom'] : '';
  $weight = isset($_POST['weight']) ? $_POST['weight'] : '';
  $adress = isset($_POST['adress']) ? $_POST['adress'] : '';
  $messager = isset($_POST['messager']) ? $_POST['messager'] : '';

  $mes = '';
  if (!$phone) exit("Error! Phone is a required field");
  else {
    $mes .= "<p>Телефон: $phone</p>";
    $mes .= "<p>Шубы: $shuby</p>";
    $mes .= "<p>Дубленки: $dublenki</p>";
    $mes .= "<p>Меховые желеты: $mekhovyeZhelety</p>";
    $mes .= "<p>Пальто с мехом: $paltoSMekhom</p>";
    $mes .= "<p>Вес: $weight</p>";
    $mes .= "<p>Адрес: $adress</p>";
    $mes .= "<p>Мессаджер: $messager</p>";
 
    $to = "deltaplanirovanie@gmail.com, deltastream.dev@gmail.com, manager.deltaplan@gmail.com";
    $sub = "=?utf-8?B?" . base64_encode("Заявка с bel-cargo.ru") . '?=';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: bel-cargo.ru/\r\n";
    
    mail("$to", "$sub", "$mes", "$headers");
    // sms($_POST['phone'], '375296486172');
    include 'leads.php';
    echo '1';
  }


  function sms($phone, $number) {
    $url = "http://cp.websms.by";
    $timeout = 5;
    $func = 'msg_send_bulk';

    $package = array(
        array(
            'recipient' => $number,
            'message'   => "Заявка getprice.by/shkaf-kupe/\nТелефон: $phone",
            'sender'    => 'DeltaPlanBY'
        ),
    );
    $rawData = json_encode($package);
    $ch = curl_init();

    //задаем параметры CURL

    curl_setopt_array($ch, array(
        CURLOPT_URL            => $url,
        CURLOPT_FAILONERROR    => 1,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_TIMEOUT        => $timeout,
        CURLOPT_CONNECTTIMEOUT => 0,
        CURLOPT_POST           => 1,
        CURLOPT_POSTFIELDS     => array(
            'r'        => 'api/' . $func,
            'user'     => 'deltaplanirovanie@gmail.com',
            'apikey'   => '0UmzxrSo9x',
            'messages' => $rawData)
    ));

    $result = curl_exec($ch);

    if ($result) {
        $__BOM = pack('CCC', 239, 187, 191);
        while (0 === strpos($result, $__BOM)) $result = substr($result, 3);
        $result = json_decode($result);
    } else {
        echo 'Ошибка доступа к сервису !';
    }
    curl_close($ch);
}

?>