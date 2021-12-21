<?php

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if((isset($_GET['auth'])) && ($_GET['auth'] == "ajdshuihdaskbjhiasd")){
            $datafile = fopen("data.txt","r");
            $fcon = fread($datafile,filesize("data.txt"));
            fclose($datafile);
            header("Content-Type:application/json");
            echo $fcon;
        }else
            header("HTTP/1.1 401 Unauthorized");
    }else{
        header("HTTP/1.1 404 Not Found");
    }

?>