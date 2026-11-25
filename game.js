const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


let player = {
    x: 300,
    y: 100, 
    width: 80,
    height: 80,
    speed: 5
};


let keys = {};

let obstacles = [];

let score = 0;

let gameOver = false;

document.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});

document.addEventListener("keyup", function(event) {
    keys[event.key] = false;
});

function movePlayer() {
    
    if(keys["ArrowUp"]) {
        player.y -= player.speed;
    }

    if(keys["ArrowDown"]) {
        player.y += player.speed;
    }

    if(keys["ArrowLeft"]) {
        player.x -= player.speed;
    }

    if(keys["ArrowRight"]) {
        player.x += player.speed;
    }
}
function drawPlayer(){ 
    ctx.fillStyle = "red";
    ctx.fillRect( 
        player.x,
        player.y,
        player.width,
        player.height
    );
}
function drawObstacles() {
    ctx.fillStyle = "gold";

    console.log("Obstacles:", obstacles.length);

    for(let i = 0; i < obstacles.length; i++) {
        ctx.fillRect(
            obstacles[i].x,
            obstacles[i].y,
            obstacles[i].width,
            obstacles[i].height
        );
    }
}

function drawGame() {

    // draw player 

    ctx.fillStyle = "red";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 20, 40);
}

function spawnObstacles() {
    
    console.log("Spawning obstacle");
    
    obstacles.push({
        x: 700,
        y: Math.random() * (canvas.height - 50),
        width: 50,
        height: 50,
        speed: 4
    });
}
function moveObstacles() {

    for(let i = 0; i < obstacles.length; i++) {

        obstacles[i].x -= obstacles[i].speed;

                if(obstacles[i].x +
            obstacles[i].width < 0) {
                        obstacles.splice(i,1);
            }

        
    }
}
function checkCollisions() {

    for(let i = 0; i < obstacles.length; i++) {
        
        if(
            player.x < obstacles[i].x +
    obstacles[i].width&&
                player.x + player.width > obstacles[i].x&&

                player.y < obstacles[i].y +
    obstacles[i].height&&
                player.y + player.height > obstacles[i].y
    
        ) {
           gameOver = true;
            console.log("GAME OVER");
        }
    }
}
function gameLoop() {


    if(gameOver) {
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    updateGame();

    movePlayer();

    moveObstacles();

    checkCollisions();

    drawPlayer();

    drawObstacles();

    drawGame();

    requestAnimationFrame(gameLoop);

}

function updateGame() {

    score++;
}


setInterval(spawnObstacles, 2000);

gameLoop();

