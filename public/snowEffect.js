var canvas = document.getElementById("snow");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var flakes = [];

function Snowflake() {
  this.x = Math.floor(Math.random() * canvas.width);
  this.y = Math.floor(Math.random() * canvas.height);
  this.size = Math.random() * 3;
  this.speed = Math.random() * 1;
}

for (var i = 0; i < 100; i++) {
  flakes.push(new Snowflake());
}

function drawFlakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (var i = 0; i < flakes.length; i++) {
    var flake = flakes[i];
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
  }
  ctx.fill();
}

function updateFlakes() {
  for (var i = 0; i < flakes.length; i++) {
    var flake = flakes[i];
    flake.y += flake.speed;
    if (flake.y > canvas.height) {
      flakes[i] = new Snowflake();
    }
  }
}

function animate() {
  drawFlakes();
  updateFlakes();
  requestAnimationFrame(animate);
}
animate();
