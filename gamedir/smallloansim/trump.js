var smallLoanSound;
var myMoney;
var loanSize = 1000000;

function initialize() {
  canvas = document.getElementById('trump');
  ctx = canvas.getContext('2d');
  smallLoanSound = new Audio("smallloanofamilliondollars.mp3");
  myMoney = new component("30px", "Consolas", "black", 700, 40, "text");
  // ctx.drawImage(trumpface, 0, 0);
  myMoney.text="Money: $" + 0;
  myMoney.update();
  console.log(document.getElementsByClassName('hair')[0]); 
  document.getElementsByClassName('hair')[0].addEventListener("click", function (event) {
    event.preventDefault();     
    smallLoanSound.play();
    ctx.clearRect(700, 10, 500, 30);
    // ctx.drawImage(trumpface, 0, 0);
    myMoney.text="Money: $" + loanSize;
    myMoney.update();
    loanSize += 1000000;    
	});
}

function component(width, height, color, x, y, type) {
	this.type = type;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.update = function() {
    canvas = document.getElementById('trump');
    ctx = canvas.getContext('2d');
    if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } 
  } 	
}

window.onload = initialize;