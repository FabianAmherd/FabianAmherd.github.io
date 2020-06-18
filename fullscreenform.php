<!-- PHP Form submit -->
<?php

if(filter_has_var(INPUT_POST, 'submit')) {
	$name = htmlspecialchars($_POST['q1']);
	$employer = htmlspecialchars($_POST['q2']);
	$email = htmlspecialchars($_POST['q3']);
	$package = htmlspecialchars($_POST['q4']);
	$additionalinfo = htmlspecialchars($_POST['q5']);

	$toEmail = 'hello@latify.ch';
	$subject = 'Contact Form submission on latify.ch by '.$name;
	$body = '<h2> Contact request </h2><hr><br>
		<h4>Name: </h4><p>'.$name.'</p>
		<h4>Employer: </h4><p>'.$employer.'</p>
		<h4>Email: </h4><p>'.$email.'</p>
		<h4>Package: </h4><p>'.$package.'</p>
		<h4>Additional info: </h4><p>'.$additionalinfo.'</p>
	';
	$headers = "MIME-Version: 1.0" ."\r\n";
	$headers .= "Content-Type:text/html;charset=UTF-8" ."\r\n";

	$headers .= "From: ".$name. "<".$email.">" ."\r\n";

	if(mail($toEmail, $subject, $body, $headers)){
		// Redirect to thankyou.html
		echo "<script type='text/javascript'>window.location.replace('http://latify.ch/thankyou.html');</script>";
	} else {
		$msg = '';
	}
}
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Kontaktformular | Latify</title>
		<link rel="stylesheet" href="assets/css/form.css" />
		<link rel="stylesheet" type="text/css" href="css/normalize.css" />
		<script src="assets/js/modernizr.custom.js"></script>
		<!-- Favicons -->
		<link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicons/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicons/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicons/favicon-16x16.png">
		<link rel="manifest" href="assets/img/favicons/site.webmanifest">
		<link rel="mask-icon" href="assets/img/favicons/safari-pinned-tab.svg" color="#305289">
		<meta name="apple-mobile-web-app-title" content="Professionelle Webseiten | Latify">
		<meta name="application-name" content="Professionelle Webseiten | Latify">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="theme-color" content="#ffffff">
	</head>
	<body>
		<div class="container">
			<div class="fs-form-wrap" id="fs-form-wrap">


				
				<form id="myform" class="fs-form fs-form-full" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" target="_blank" autocomplete="off">
					<ol class="fs-fields">
						<li>
							<label class="fs-field-label fs-anim-upper" for="q1">Wie lautet Ihr Name?</label>
							<input class="fs-anim-lower" id="q1" name="q1" type="text" placeholder="Ihr Name" spellcheck="false" value="<?php echo isset($_POST['q1']) ? $name : ''; ?>" required/>
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="q2">Für wen arbeiten Sie?</label>
							<input class="fs-anim-lower" id="q2" name="q2" type="text" placeholder="Ihre Firma / Selbstständig" spellcheck="false" value="<?php echo isset($_POST['q2']) ? $employer : ''; ?>" required/>
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="q3">Wo dürfen wir Ihnen antworten?</label>
							<input class="fs-anim-lower" id="q3" name="q3" type="email" placeholder="hello@latify.ch" spellcheck="false" value="<?php echo isset($_POST['q3']) ? $email : ''; ?>" required/>
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="q4">Welches Paket sagt Ihnen am meisten zu?</label>
							<input class="fs-anim-lower" id="q4" name="q4" type="text" placeholder="Onepager / Basic / Premium / Allrounder" spellcheck="false" value="<?php echo isset($_POST['q4']) ? $package : ''; ?>" required/>
						</li>
						<li>
							<label class="fs-field-label fs-anim-upper" for="q5">Gibt es noch etwas, das wir wissen sollten?</label>
							<textarea class="fs-anim-lower" id="q5" name="q5" placeholder="Was ist Ihr Ziel für Ihre Webseite?" spellcheck="false" autocorrect="off" autocapitalize="off" ><?php echo isset($_POST['q5']) ? $additionalinfo : ''; ?></textarea>
						</li>


					</ol><!-- /fs-fields -->
					<button class="fs-submit" type="submit" name="submit">Absenden</button>
				</form><!-- /fs-form -->
			</div><!-- /fs-form-wrap -->
		</div><!-- /container -->
		<script src="assets/js/classie.js"></script>
		<script src="assets/js/selectFx.js"></script>
		<script src="assets/js/fullscreenForm.js"></script>
		<script>
			(function() {
				var formWrap = document.getElementById( 'fs-form-wrap' );

				new FForm( formWrap, {
					onReview : function() {
						classie.add( document.body, 'overview' );
					}
				} );
			})();
		</script>
	</body>
</html>