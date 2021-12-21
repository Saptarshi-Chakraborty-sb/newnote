<?php
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $title = $_GET['title'];
        $desc = $_GET['desc'];
        $datafile = fopen("data.txt" , "r");
        $acon =  fread($datafile,filesize("data.txt"));
        fclose($datafile);
        $dcon = json_decode($acon);
        $newArr = ['t' => $title, 'd' => $desc];
        $newobj = (object)$newArr;
        array_push($dcon,$newobj);
        $ane = json_encode($dcon);
        $datafile = fopen("data.txt" , "w");
        fwrite($datafile, $ane);
        fclose($datafile);
        $arr = [ "status" => 0 ,
                 "data" => 'success'];
        header("Content-Type:application/json");
        header("HTTP/1.1 200 Ok");
        echo json_encode($arr);
    }else{
        header("HTTP/1.1 404 Not Found");
    }
?>