<?php

class JWT{

    static $secret = "";
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
        //...
        return $valid;
    }

}