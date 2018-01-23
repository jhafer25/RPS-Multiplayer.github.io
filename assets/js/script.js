$(document).ready(function() {

	// Initialize Firebase
  	let config = {
    	apiKey: "AIzaSyBCTuFtknv-4eClKKP4s6OaGeGO6UGRBjE",
    	authDomain: "rpsdatabase-4a1c1.firebaseapp.com",
    	databaseURL: "https://rpsdatabase-4a1c1.firebaseio.com",
    	projectId: "rpsdatabase-4a1c1",
    	storageBucket: "",
    	messagingSenderId: "877514484467"
  	};
  	firebase.initializeApp(config);

 	let database = firebase.database();

  	let player1 = {
  		name: '',
  		wins: 0,
  		losses: 0,
  		ties: 0,
  		currentChoice: ''
  	};
  	let player2 = {
  		name: '',
  		wins: 0,
  		losses: 0,
  		ties: 0,
  		currentChoice: ''
  	};
  	let gameChat = '';
  	let choices = ['rock','paper','scissors'];
  	let ref = database.ref();

  	// let game = function(){

  	// }
    // var playerConnection = database.ref("/playerConnection");
    // var isConnected = database.ref(".info/connected");
    // var playerList = database.ref("/players");
    // var playerListOne = database.ref("/players/1");

    ref.on("value", function(snapshot) {
		if (snapshot.child("player1").exists()) {
		    player1 = snapshot.child("player1").val();
		    console.log(player1);


		    // Change the HTML to reflect the stored values
		    $('#player1Name').html(player1.Name);
  		}

		else {

			$('#player1Name').html(player1.Name);

		    console.log($('#player1Name').val());

		}

		if (snapshot.child("player2").exists()) {
		    player1 = snapshot.child("player2").val();
		    console.log(player2);


		    // Change the HTML to reflect the stored values
		    $('#player2Name').html(player2.Name);
  		}

		else {

			$('#player2Name').html(player2.Name);

		    console.log($('#player2Name').val());

		}


		// If any errors are experienced, log them to console.
		}, function(errorObject) {
		  	console.log("The read failed: " + errorObject.code);
		});


		// Whenever a user clicks the submit-bid button
		$("#submitName").on("click", function(event) {
		  	// Prevent form from submitting
		  	event.preventDefault();

		  	if(!player1.Name){
		  		player1.Name = $('input#playerName').val();
		  		$('div#player1Name').html(player1.Name);

		  		ref.push({player1}), () => {
			    	console.log('Set Name');
			    };
		  	}
		  	else if(!player2.Name){
		  		player2.Name = $('input#playerName').val();
		  		$('div#player2Name').html(player2.Name);

		  		ref.push({player2}), () => {
			    	console.log('Set Name');

			  	};
			}
		  	else{
		  		alert('Game is Full.');
		  	}
  	});

});