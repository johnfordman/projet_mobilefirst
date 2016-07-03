<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Mibile first</title>
	<link rel="stylesheet" type="text/css" href="dist/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="dist/css/main.css">
	<link href='https://fonts.googleapis.com/css?family=Signika:400,300' rel='stylesheet' type='text/css'>

</head>
<body>
    <div class="wrap-container">
        <div class="header-player">
            <div class="section-player">
        		<div class="section-player-bg">
        			<div class="overlay"></div>
        		</div>
        		<div class="section-player-info">
        			<div class="player-picture img-circle"><img src="assets/images/torres-profile.jpg" width="110" height="110" alt="fernando torres"></div>
        			<div class="player-name"><span>Fernando Torres</span></div>
        			<div class="container-team">
        			<?php echo file_get_contents("assets/images/icons/pin.svg"); ?>
        				<span class="player-team">Athlecitco Madrid,Spain</span>
        			</div>
        		</div>
        	</div>

        	<section class="section-palmares">
				<div class="container-palmares">
					<div class="selection-item">
						<span class="icon"><?php echo file_get_contents("assets/images/icons/icn-cupworld.svg"); ?></span>
						<span class="chiffre">9</span>
					</div>
					<div class="selection-item">
						<span class="icon"><?php echo file_get_contents("assets/images/icons/icn-cupworld.svg"); ?></span>

						<span class="chiffre">92</span>
					</div>
					<div class="selection-item">
						<span class="icon"><?php echo file_get_contents("assets/images/icons/icn-cupworld.svg"); ?></span>
						<span class="chiffre">203</span>
					</div>
				</div>
        	</section>
        </div>

    	<section class="section-news">
    		<div class="container-news">
    			<?php $i= 0; ?>
    			<?php while($i <= 4): ?>
    			<div class="single-news">
    				<span class="news-circle"></span>
    				<div class="news-date">
    					<span class="news-date-day">Vendredi</span>
    					<span class="news-date-hours">11:30</span>
    				</div>
    				<div class="news-text">
    					<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete</p>
    				</div>
    			</div>
    			<?php $i++; ?>
    			<?php endwhile; ?>
    		</div>
    	</section>
    </div>

</body>
</html>