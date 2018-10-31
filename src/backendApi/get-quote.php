<?php 
    require("app.php");
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	    App::getQoutePost($_POST);
	}
	else if($_SERVER['REQUEST_METHOD'] === 'GET'){
		echo json_encode("from get");
	}
?>