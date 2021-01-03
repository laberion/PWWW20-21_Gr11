var player;
function startGame() {
    gamePad.start();
    player = new component(200,200);
  }
  
  var gamePad = {
    canvas : document.getElementById("gamePad"),
    start : function() {
      this.context = this.canvas.getContext("2d");
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.interval = setInterval(updateGame, 30);
      window.addEventListener('keydown', function (e) {
        gamePad.key = e.keyCode;
    })
      window.addEventListener('keyup', function (e) {
        gamePad.key = false;
    })
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var linearGradient = this.context.createLinearGradient(0, 0, this.width, this.height);   
      linearGradient.addColorStop(0,'white');
      linearGradient.addColorStop(1,'#81B300');
      this.context.fillText('Get mario to the cave',10,20);
      this.context.fillStyle = linearGradient;
      this.context.fillRect(0,0,this.width,this.height);
      var radialGradient = this.context.createRadialGradient(this.width/2 - 35, 0, Math.cos(0)*43, Math.sin(Math.PI/2)*this.width/2 + 35, 25, 40);
      radialGradient.addColorStop(0,'black');
      radialGradient.addColorStop(1,'white');
      this.context.fillStyle = radialGradient;
  
      this.context.beginPath();
      this.context.moveTo(this.width/2 - 25,0);
      this.context.lineTo(this.width/2 - 25, 50);
      this.context.lineTo(this.width/2 + 25 , 50);
      this.context.lineTo(this.width/2 + 25 , 0);
      this.context.closePath();
      this.context.stroke();
      this.context.fillRect(this.width/2 - 25,0 , 50,50);
  
      this.context.fillStyle = 'black';
      this.context.font = '300 20px Arial';
      this.context.fillText('Get Mario to the cave', 10, 30);
    }
  }

  function component(x, y) {
    this.x = x;
    this.y = y;
    this.changeX = Math.PI;
    this.changeY = Math.E;
    this.update = function(){
        ctx = gamePad.context;
        var playerImg = document.getElementById("mario");
        ctx.drawImage(playerImg,this.x,this.y);
    } 
    this.newPos = function() {
            this.x += this.changeX;
            this.y += this.changeY;
      }
  }

  function updateGame() {
    gamePad.clear();
    player.changeX = 0;
    player.changeY = 0;    
    if(gamePad.key){
        switch (gamePad.key) {
            case 65:
                player.changeX = -Math.PI;
                break;
            case 68:
                player.changeX = Math.PI;
                break;
            case 87:
                player.changeY = -Math.E;
                break;
            case 83:
                player.changeY = Math.E;
                break;
            default:
                break;
        }
    }
    if(Math.abs(player.x-gamePad.width/2  ) < 25 && player.y < 50){
        alert("You won the game");
        clearInterval(gamePad.interval);
    }
    player.newPos();
    player.update();
  }

  document.getElementById('playButton').addEventListener('click',startGame);