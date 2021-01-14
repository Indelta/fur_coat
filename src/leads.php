<?php

date_default_timezone_set('Europe/Moscow');

// ниже идет отправка данных в нашу CRM.

$url_crm = 'http://crm.deltaplan.by/getlead/';
    $params = array(
        'password' => '123fSAF#!)(Fas)', // пароль для отработки пост запросов, не меняется
        'id_user' => '96', // id клиента из CRM у аккаунт-менеджера (Нина Олиферович)
        'utm_medium' => $_POST["utm_medium"],
        'utm_source' => $_POST["utm_source"],
        'utm_compaign' => $_POST["utm_campaign"],
        'utm_term' => $_POST["utm_term"],
        'utm_content' => $_POST["utm_content"],
        'message' => $crm_mes,
        'form_name' => $_POST["type"], // не должна содержать сочетание символов "phone"
        'phone' => preg_replace("/[^0-9]/", '', $_POST['phone']), //+375299465533
    );

    $ch = curl_init();    
    curl_setopt($ch, CURLOPT_URL, $url_crm);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // указываем, что у нас POST запрос
    curl_setopt($ch, CURLOPT_POST, 1);
    // добавляем переменные
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    //заполняем таблицу google
    $output = curl_exec($ch);
    curl_close($ch);

    ?>