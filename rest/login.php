<?php



header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');

include_once $_SERVER['DOCUMENT_ROOT'] . '/rest/Db.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/rest/JWT.php';

if($_SERVER["REQUEST_METHOD"] == 'POST'){
    $_post = json_decode(file_get_contents('php://input'), true);
    $_post = validate_request($_post);
    $user = Db::select("user",null, "login = '" . $_post["login"] . "'",null);

    if(count($user) == 1){
        $user = $user[0];
        $dbpass = $user["password"];
        $test = password_verify($_post['password'], JWT::$prefix . $dbpass);
        if($test == true){
            $email = $user['login'];
            $role = $user['role'];
            $time = round(microtime(true));
            $tokenObj = ["email" => $email, "time" => $time, "role" => $role];
            $token = JWT::create($tokenObj);
            $name = $user['name'];
            $resp = ["name"=>$name, "email"=>$email, "role"=>$role,"token"=>$token ];
            echo json_encode($resp);
        }
        else{
            echo json_encode(false);
        }
    }
    else{
        echo json_encode(false);
    }
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

