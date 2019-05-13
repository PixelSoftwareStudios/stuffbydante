<?php
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$message = $_POST['message'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$to = "dante@stuffbydante.net";
	$text = "First name: " . $firstname . "\n" . "Last name: " . $lastname . "\n\n" . $message;
	$headers = "From: " . $email;
	
	mail($to, $subject, $text, $headers);
	
?>
