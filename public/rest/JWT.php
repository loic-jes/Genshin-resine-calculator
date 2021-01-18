<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/Db.php';


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

        $valid = false;
        $splitted = explode("$",$token);


        if(count($splitted)>1){
            $payload = $splitted[0];

            $signature = self::$prefix . str_replace($payload."$","",$token);

            $valid = password_verify($payload,$signature);

            
            if($valid){
                $valid = json_decode(base64_decode($payload));

                $letest = $valid;
                $username = $valid->email;     //$valid est un objet STD donc on doit faire ça pour regarder dedans
                $user = Db::select("user",null, "login = '" . $username . "'",null); //fait un select sur la table User voir si le login dans le token correspond bien a qqun

                if ($user[0]["role"] === $valid->role) {      // puis vérifie si le rôle du token correspond bien au rôle de la base de donnée pour l'user en question

                    $actualTime = round(microtime(true));  // reprend le temps actuel
                    $verifTime = $actualTime - ($valid->time);  // et le compare au time qui est issu du token

                    
                    if ($verifTime > 2628000  ) {      // Si le temps dépasse le nombre donné arbitrairement, ici 2628000s pour 1 mois (604800 s 1 semaine, 86400s 1 jour)
                        $valid = false;     // false pour bloquer tout
                    } else {
                        $valid = true;   // Le role est bon, l'user existe bien, le temps du token est également valide
                    }
                    

                    
                }
                else {
                    $valid = false; // False if le user n'existe pas
                } 
               

            }
            $bp = 0;
        }
        //... .

        return $valid;
    }

}