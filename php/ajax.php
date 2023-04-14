<?php
header('Content-Type: application/json');


echo json_encode(array(
    'status' => true,
    'post'=>$_POST,
    'files'=>$_FILES
));
exit();

