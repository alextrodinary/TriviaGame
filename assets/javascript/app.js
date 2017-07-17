$('#start').on('click', function() {

game.start();

})

var questions= [{
	question: "The _____ Bulls",
	answers:["Memphis", "Chicago", "San Antonio", "Toronto"],
	correctAnswer: "Chicago"

}, {
	question: "The _____ Kings",
	answers: ["Portland", "Orlando", "Sacramento", "Philadelphia"],
	correctAnswer: "Sacramento"
},	{
	question: "The _____ Cavaliers",
	answers: ["Denver", "Detroit", "Clevland", "Boston"],
	correctAnswer: "Clevland"
}, {
	question: "The _____ Clippers",
	answers: ["New York", "LA","New Orleans", "Miami"],
	correctAnswer: "LA"
},	{
	question: "The _____ Rockets",
	answers: ["Houston", "Golen State", "Brooklyn", "Utah"],
	correctAnswer: "Houston"
}, {
	question: "The _____ Warriors",
	answers: ["Golden State", "Toronto","Oklahoma City","Indiana"],
	correctAnswer: "Golden State"
},	{
	question: "The _____ Timberwolves",
	answers: ["Denver", "Minnesota","Charlotte", "Atlanta"],
	correctAnswer: "Minnesota"
}, {
	question: "The _____ Knicks",
	answers: ["New York", "Philadelphia", "Chicago","Memphis"],
	correctAnswer: "New Yord"
},	{
	question: "The _____ Heat",
	answers: ["Orlando", "Miami", "LA", "Sacramento"],
	correctAnswer: "Miami"
	}, {
	question: "The _____ Lakers",
	answers: ["Los Angeles", "Chicago", "Golden State", "San Antonio"],
	correctAnswer: "Los Angeles"

}];

	var game = {
		correct: 0,
		incorrect: 0,
		counter: 60,
		countdown: function (){
			game.counter--;
			$("#counter").html(game.counter); //be sure code is correct. Missed a "#" and counter was not going down.
			if(game.counter === 0){
				console.log("time is up!");
				game.done();
			}
		},
		start: function(){
			timer = setInterval(game.countdown,100);
			$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter"> 60 </span> Seconds</h2>')
			$('#start').remove();
				for(var i = 0; i < questions.length; i++) {
			$("#subwrapper").append('<h2>'+questions[i].question+'</h2>');
				for(var j=0;j<questions[i].answers.length;j++){
			$("#subwrapper").append("<input type='radio' name = 'question- "+i+" 'value=' "+questions[i].answers[j]+"'>"+questions[i].answers[j])
			}		
		}
	},
	done: function(){
		$.each($('input[name = "question-0]": checked'), function(){
			if($(this).val()==questions[0].correctAnswer) {
				game.correct++;				
			} else {
				game.incorrect--;
			}

		});

		this.result();
		},

		result: function(){
			clearInterval(timer);
			$('#subwrapper h2').remove();

			$('#subwrapper').html("<h2>DONE </h2>");
			$('#subwrapper').append("<h3> Correct: "+this.correct+"</h3>");
			$('#subwrapper').append("<h3> Incorrect: "+this.incorrect+"</h3>");
			$('#subwrapper').append("<h3> Unanswered: " +(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}




