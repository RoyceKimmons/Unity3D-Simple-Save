<?php
$key = 'secret'; // Update to match the secret key in your Unity inspector
if ($_POST && $_POST['hash'] && $_POST['time'] && md5($key.$_POST['time']) == $_POST['hash']) {
	$data = $_POST;
	unset($data['hash']);
	unset($data['time']);
	$handle = fopen("data.csv", "a") or die('Cannot access or create the file.  Be sure that the web user has the proper permissions in this folder.');
	fputcsv($handle, $data);
	fclose($handle);
	echo ('Saved successfully.');
} else {
	echo ('Save failed.  Be sure that your secret keys match.');
}