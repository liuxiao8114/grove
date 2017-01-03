var space = document.getElementById('space');
var star, shootingstar;
var $;

var amountofstars = 350;
for (var i = 0; i < amountofstars; i++) {

  star = document.createElement("div");
  star.className = "stars";
  star.style.width = (getRandomInt(1, 3) + "px");
  star.style.height = (getRandomInt(1, 3) + "px");
  star.style.left = (getRandomInt(1, 100) + "%");
  star.style.top = (getRandomInt(1, 100) + "%");
  star.style.backgroundColor = 'rgba(1,1,0.' + getRandomInt(0, 9) + ',0.' + getRandomInt(0, 9) + ')';
  star.style.animation = "starglow" + getRandomInt(1, 4) + " 8s ease-in-out infinite";
  $(star).css('background-color', 'rgba(255,255,' + getRandomInt(140, 255) + ',0.' + getRandomInt(7, 9) + ')');
  star.style.animationDelay = (getRandomInt(0, 20) + "s");
  space.appendChild(star);

}

var amountofshooters = 8;
for (i = 0; i < amountofshooters; i++) {

  shootingstar = document.createElement("div");
  shootingstar.className = "shootingstar";
  var widthheight = (getRandomInt(1, 5) + "px");
  shootingstar.style.width = (widthheight + "px");
  shootingstar.style.height = (widthheight + "px");

  shootingstar.style.left = (getRandomInt(10, 100) + "%");
  shootingstar.style.top = (getRandomInt(1, 80) + "%");
  shootingstar.style.animationDelay = (getRandomInt(0, 60) + "s");
  space.appendChild(shootingstar);

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
