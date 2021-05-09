this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "Wishing the most glorious birthday ever to You Happy birthday, Deep! There’s no better friend than you, and there's no one I would rather share my thoughts and secrets with. I hope you have the most fabulous day today as you truly deserve it. You are a true companion and a great woman. I wish you only the best, lots of love, health and that every one of your dreams may come true. I know that I can trust you with absolutely anything, and that I’ll always receive the best advice from you. I am so lucky to have a best friend like you! Wishing you a day filled with loveliness, Thank you for consistently being the amazing person and friend that you are!";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
