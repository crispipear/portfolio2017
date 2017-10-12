<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Empty name and email, please try again.";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Invalid email, submission failed.";
    exit;
}
//--------
$to = 'rice74@uw.edu';
$headers .= "From: $visitor_email \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
$email_subject = "$subject \r\n";
$email_body = "You have received a new message from: $name\n
		Reply-To: $visitor_email \r\n
    Here is the message:\n $message \n";

mail($to,$email_subject,$email_body,$headers);
header('Location: thank-you.html');
//------
// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
