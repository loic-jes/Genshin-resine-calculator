<?php

header('Access-Control-Allow-Origin: *');

// header('Content-Type: application/json');

include_once $_SERVER['DOCUMENT_ROOT'] . '/rest/Db.php';
require '../vendor/autoload.php';
use ReallySimpleJWT\Token;



if($_SERVER["REQUEST_METHOD"] == 'POST'){
    $_post = json_decode(file_get_contents('php://input'), true);
    $_post = validate_request($_post);

    $user = Db::select("user", null, "login = '" . $_post["login"] . "'",null);

    if(count($user) ==1) {

        $dbpass = $user[0]["password"];
        $test = password_verify($_post['password'], $dbpass);

        if ($test == true) {
            // echo json_encode($user[0]);


            $userId = 12;
            $secret = 'sec!ReT423*&';
            $expiration = time() + 3600;
            $issuer = 'localhost';

            $token = Token::create($userId, $secret, $expiration, $issuer);


            $result = Token::validate($token, $secret);

            $return = array("login" =>$user[0]['login'],"token" => $token, "role" => $user[0]['role']);

            echo json_encode($return);



            // // Créer manuellement son token

            // // Create token header as a JSON string
            // $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
            // // Encode Header to Base64Url String
            // $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));



            // // Create token payload as a JSON string
            // $payload = json_encode(['user_id' => 123]);
            // // Encode Payload to Base64Url String
            // $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

            // // Create Signature Hash
            // $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'sec!ReT423*&!', true);
            // // Encode Signature to Base64Url String
            // $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

            // // Create JWT
            // $jwt = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;


            // echo json_encode($jwt);







        } else {
            echo json_encode("php sénul méAlex ilétrofor");
        }

        

    }
    // $_post = password_hash("aaaa",PASSWORD_ARGON2ID);
    //TODO select sur la table user pour verifier email puis mot de passe
    //JWT
    //Vor reactAuth ...
    // echo json_encode($_post);
}
else{
    echo json_encode(false);
}

function validate_request($request)
{
    foreach ($request as $k => $v) {
        if(is_array($v)){
            validate_request($v);
        }
        else{
            $request[$k] = htmlspecialchars(strip_tags(stripslashes(trim($v))));
        }
    }
    return $request;
}