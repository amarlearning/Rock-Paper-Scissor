var player1 = 0; //user
var player2 = 0; //computer

var userInput;

//function to generate option from computer
function getOptionComputer() {
	var options = ["rock","paper","scissor"];
	return options[Math.floor(Math.random()*3)];
}

//function to change the counter after every round
function changeCounter(winner) {
	if (winner === "computer") {
		if (player2 === 1) {
			$('#a').fadeIn('slow');
		}
		else if (player2 === 2) {
			$('#b').fadeIn('slow');
		}
		else {
			$('#c').fadeIn('slow');
		}
	}
	else {
		if (player1 === 1) {
			$('#d').fadeIn('slow');
		}
		else if (player1 === 2) {
			$('#e').fadeIn('slow');
		}
		else {
			$('#f').fadeIn('slow');
		}
	}
}

//function to compare the options and return who won in each round
function compare(user, computer) {
	$user="user";
	$computer="computer";
	switch (user) {
		case "rock":
			if(computer === "paper") {
				changeCounter($computer);
				return $computer;
			} else if (computer === "scissor") {
				changeCounter($user);
				return $user;
			} else {
				return "tie";
			}
		break;

		case "paper":
			if (computer === "rock") {
				changeCounter($user);
				return $user;
			} else if (computer === "scissor") {
				changeCounter($computer);
				return $computer;
			} else {
				return "tie";
			}
		break;

		case "scissor":
			if (computer === "rock") {
				changeCounter($computer);
				return $computer;
			} else if (computer === "paper") {
				changeCounter($user);
				return $user;
			} else {
				return "tie";
			}
		break;
	}
}

//function to disply overall winner
function display($winner) {
	switch($winner) {
		case "computer":
			$("#winner").text("Haha I beat you so easily! :P");
			break;
		case "user":
			$("#winner").text("Oh no, you won! :O Congratulations though.");
			break;
	}
}

$(document).ready(function() {
	$('#a, #b, #c, #d, #e, #f').hide();

	//function to get option from user
	$('.selectedClass').click(function() {

		userInput = $(this).attr('id');

		while (player2 < 3 && player1 < 3 && userInput !== null) {

			var computer = getOptionComputer();

			var user = userInput;

			if (computer === "rock") {
				$('.choice').text("I chose the mighty " + computer + ".");
			}
			else if (computer === "paper") {
				$('.choice').text("I chose the friendly" + computer + ".");
			}
			else {
				$('.choice').text("I chose the sly " + computer + ".");
			}

			var winner = compare(user,computer);

			if (winner === "user") {

				player1 = player1 + 1;

			} else if (winner === "computer") {

				player2 = player2 + 1;

			}

			userInput = null;
		}

		//final winner
		if (player1 === 3) {

			display("user");

		} else if (player2 === 3) {

			display("computer" );

		}

	});
});