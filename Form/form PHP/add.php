<?php
	session_start();
	if(isset($_POST['add'])){
		$data = file_get_contents('members.json');
		$data_array = json_decode($data);
		//data in our POST
		$input = array(
			'id' => $_POST['id'],
			'firstname' => $_POST['firstname'],
			'lastname' => $_POST['lastname'],
			'address' => $_POST['address'],
			'gender' => $_POST['gender']
		);
		//append the POST data
		$data_array[] = $input;
		//return to json and put contents to our file
		$data_array = json_encode($data_array, JSON_PRETTY_PRINT);
		file_put_contents('members.json', $data_array);
		$_SESSION['message'] = 'Data successfully appended';
	}
	else{
		$_SESSION['message'] = 'Fill up add form first';
	}
	header('location:index.php');
?>