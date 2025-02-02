<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Accept: application/json');

// echo "coucou de l'index.php";

include_once $_SERVER['DOCUMENT_ROOT'] . '/rest/Db.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/rest/JWT.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/rest/config.php';


switch ($_SERVER["REQUEST_METHOD"]) {
    case 'GET':
        $_get = validate_request($_GET);
        //  //token
        //  $token = isset($_get['token']) ? $_get['token'] : null;
        //  if($token == null){
        //      echo json_encode("Pas de token sur index.php");
        //      break;
        //  }
        //  else{
        //     //  echo json_encode(JWT::validate($token));
        //      if (JWT::validate($token)===true){

        //      } else {
        //         echo json_encode(JWT::validate($token));
        //          break;
        //      }
        //     //  break;
        //  }
        //  //

        $table = isset($_get['table']) ? $_get['table'] : null;
        //obligatoire
        if($table == null){
            echo json_encode("false de l'index.php : table = null");
            break;
        }
        $id = isset($_get['id']) ? $_get['id'] : null;
        $where = isset($_get['where']) ? $_get['where'] : null;
        $orderby = isset($_get['orderby']) ? $_get['orderby'] : null;
        //echo json_encode($_get);
        echo json_encode(Db::select($table, $id, $where, $orderby));
        break;
    case 'POST':
        //$_post = validate_request($_POST);
        $_post = json_decode(file_get_contents('php://input'), true);
        $_post = validate_request($_post);
        $token = isset($_post['token']) ? $_post['token'] : null;
        // if($token == null){
        //     echo json_encode("index php token null");
        //     break;
        // }
        // else{
        //     echo json_encode(JWT::validate($token));
        //     break;
        // }
        $table = isset($_post['table']) ? $_post['table'] : null;
        //obligatoire
        if($table == null){
            echo json_encode(false);
            break;
        }
        $fields = isset($_post['fields']) ? $_post['fields'] : null;

        if ($table == "user") {
            $fields["password"] = password_hash(
                $fields["password"],
                PASSWORD_ARGON2ID,
                [
                    'memory_cost' => 1024,
                    'time_cost' => 2,
                    'threads' => 2
                ]);;
                $prefix = '$argon2id$v=19$m=1024,t=2,p=2$';
                $fields["password"] = str_replace($prefix,"",$fields["password"]);
            // echo json_encode($fields["password"]);
            // break;
        }
        // echo json_encode($_post);
        // echo json_encode($fields);
        echo json_encode(Db::insert($table, $fields));
        break;
    case 'PUT':
        $_put = json_decode(file_get_contents('php://input'), true);
        $_put = validate_request($_put);
        $table = isset($_put['table']) ? $_put['table'] : null;
        $id = isset($_put['id']) ? $_put['id'] : null;
        //obligatoires
        if($table == null || $id == null){
            echo json_encode(false);
            break;
        }
        $fields = isset($_put['fields']) ? $_put['fields'] : null;
        //echo json_encode($_put);
        echo json_encode(Db::update($table, $id, $fields));
        break;
    case 'DELETE':
        $_del = json_decode(file_get_contents('php://input'), true);
        $_del = validate_request($_del);
        $table = isset($_del['table']) ? $_del['table'] : null;
        $id = isset($_del['id']) ? $_del['id'] : null;
        //obligatoires
        if($table == null || $id == null){
            echo json_encode(false);
            break;
        }
        //echo json_encode($_del);
        echo json_encode(Db::delete($table, $id));
        break;
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


