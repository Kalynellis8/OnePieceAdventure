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

let obstacles = {};

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
function spawnObstacles() {
    obstacles.push({
        x: canvas.width,
        y: Math.random() * (canvas.height - 50),
        width: 50,
        height: 50,
        speed: 4
    });
}
function gameLoop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movePlayer();

    drawPlayer();

    requestAnimationFrame(gameLoop);

}

gameLoop();

