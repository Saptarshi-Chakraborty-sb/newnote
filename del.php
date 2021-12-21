<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if((isset($_REQUEST['auth'])) && ($_REQUEST['auth'] == "ajdshuihdaskbjhiasd")){
            $raWdata = $_REQUEST['data'];
            $data = (int)$raWdata;
            $datafile = fopen("data.txt","r");
            $new = fread($datafile,filesize("data.txt"));
            $arr = json_decode($new);
            fclose($datafile);
            unset($arr[$data]);
            $newArr = [];
            foreach ($arr as $obj) {
                array_push($newArr,$obj);
            }
            // echo var_dump($newArr);
            $tempStr = json_encode($newArr);
            // echo $arr;
            $datafile = fopen("data.txt" , "w");
            fwrite($datafile, $tempStr);
            fclose($datafile);
            // echo "<pre>". var_dump($newArr) . "</pre>";
        }else
            header("HTTP/1.1 401 Unauthorized");
    }else{
        header("HTTP/1.1 404 Not Found");
    }
?>