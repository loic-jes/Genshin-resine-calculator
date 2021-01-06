<?php

class JWT{

    public static $prefix = '$argon2id$v=19$m=1024,t=2,p=2$';
    public static function create($payload){ 
        $payload = base64_encode(json_encode($payload));
        $signature = password_hash(
            $payload,
            PASSWORD_ARGON2ID,
            [
                'memory_cost' => 1024,
                'time_cost' => 2,
                'threads' => 2
            ]);
        $token = $payload . "$" . str_replace(self::$prefix,"",$signature);
        return $token;
    }

    public static function validate($token, $options = null){
        //$options = array of options
        //vérification email et role dans la db ?
        //date d'expiration ?
        $valid = false;
        $splitted = explode("$",$token);

        echo json_encode("token");
        echo json_encode($token);

        if(count($splitted)>1){
            $payload = $splitted[0];
            echo json_encode("payload");
            echo json_encode($payload);

            $signature = self::$prefix . str_replace($payload."$","",$token);

            echo json_encode("signature");
            echo json_encode($signature);

            $valid = password_verify($payload,$signature);

            echo json_encode("valid");
            echo json_encode($valid);
            
            if($valid){
                $valid = json_decode(base64_decode($payload));

            }
            $bp = 0;
        }
        //...
        return $valid;
    }

}