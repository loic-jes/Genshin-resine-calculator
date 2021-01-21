<?php


if($_SERVER['SERVER_NAME'] == 'merenfrtest') {
    // Environnement DEV
    define("DB", ["dsn" => "mysql:host=localhost;port=3306;dbname=meren.fr", "user"=>"root", "pass"=>'']);
}
if ($_SERVER['SERVER_NAME'] == 'merenween.fr') { 
    // Environnement production
    define("DB", ["dsn" => "mysql:host=merenwh779.mysql.db; dbname=merenwh779", "user"=>"merenwh779", "pass"=>"T9b8dM0bg1dS5R5sDg5"]);
}
