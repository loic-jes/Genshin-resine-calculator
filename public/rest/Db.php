<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/rest/config.php'; 



class Db
{

    private static $db = null;
    private static function connect()
    {
        if (self::$db === null) {
            // Paramètres de configuration DB


            // dev
            // $dsn = "mysql:host=localhost;port=3306;dbname=meren.fr";
            // $user = "root";
            // $pass = "";

            // prod
            // $dsn = "mysql:host=merenwh779.mysql.db; dbname=merenwh779";
            // $user = "merenwh779";
            // $pass = "T9b8dM0bg1dS5R5sDg5";

            // adaptatif
            $infoDB = DB;
            $dsn = $infoDB["dsn"];
            $user = $infoDB["user"];
            $pass = $infoDB["pass"];

            

            try {
                self::$db = new PDO(
                    $dsn,
                    $user,
                    $pass,
                    array(
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
                        PDO::ATTR_PERSISTENT => true
                    )
                );
            } catch (PDOException $e) {
                var_dump($e);
                exit();
            }
        }
        return self::$db;
    }

    private static $stmt = null;
    public static function query($sql, $params = null)
    {
        $result = false;
        try {
            $stmt = self::connect()->prepare($sql);
            Db::$stmt = $stmt;
            $result = $stmt->execute($params);
        } catch (PDOException $e) {
            var_dump($e);
            exit();
        }
        return $result;
    }

    public static function select($table, $id, $where, $orderby)
    {
        $params = array();
        if(!isset($where)){
            $where = "active = ?";
            $params[] = true;
        }
        if (isset($id)) {
            $where .= " AND id=?";
            $params[] = $id;
        }
        if (!isset($orderby)) {
            $orderby = "id ASC";
        }
        $sql = "SELECT * FROM $table WHERE $where ORDER BY $orderby";
        $resp = self::query($sql, $params);
        $rows = Db::$stmt->fetchAll(PDO::FETCH_ASSOC);
        return $rows;
    }

    public static function insert($table, $fields)
    {
        $columns = "";
        $values = "";
        if(!isset($fields)){
            $fields = array();
        }
        $fields['id'] = null;
        $valuesArray = array();
        foreach ($fields as $k => $v) {
            $columns .= $k . ",";
            $values .= "?,";
            array_push($valuesArray, $v);
        }
        $columns = trim($columns, ',');
        $values = trim($values, ',');
        $sql = "INSERT INTO $table ($columns) VALUES ($values)";
        $resp = self::query($sql, $valuesArray);
        $resp = $resp && Db::$stmt->rowCount() == 1;
        if ($resp) {
            $resp = self::$db->lastInsertId();
        }
        return $resp;
    }

    public static function update($table, $id, $fields)
    {
        $set = "";
        $valuesArray = array();
        if(isset($fields) && isset($fields['id'])){
            unset($fields['id']);
        }
        foreach ($fields as $k => $v) {
            $set .= $k . "=?,";
            array_push($valuesArray, $v);
        }
        $set = trim($set, ",");
        $where = "id = ?";
        array_push($valuesArray, $id);
        $sql = "UPDATE $table SET $set WHERE $where";
        $resp = self::query($sql, $valuesArray);
        $resp = $resp && Db::$stmt->rowCount() == 1;
        return $resp;
    }

    public static function delete($table, $id)
    {
        $valuesArray = array();
        $where = "id = ?";
        array_push($valuesArray, $id);
        $sql = "DELETE FROM $table WHERE $where";
        $resp = self::query($sql, $valuesArray);
        $resp = $resp && Db::$stmt->rowCount() == 1;
        return $resp;
    }
}
