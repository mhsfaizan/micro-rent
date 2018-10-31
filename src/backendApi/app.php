<?php
require_once("db-connect.php");
class App extends Connect{
	private static $conn;
	public static function connect(){
		self::$conn = parent::dataBaseConnect();
	}
	public static function getQoutePost($post){
		$sql = "INSERT INTO quotes(name,email,phone,company,subject,message,date_time,is_to_qoute)
		   VALUES('$post[name]','$post[email]','$post[phone]','$post[company]','$post[subject]',
		   '$post[message]','$post[date_time]','$post[isToQoute]')";
		if(self::$conn->query($sql)){
			echo json_encode("Succesfully inserted");
		}
		else{
			echo json_encode(self::$conn->error);
		}
	}
}
App::connect();
?>