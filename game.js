const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);

let player = {
    x: 300,
    y: 100, 
    width: 80,
    height: 80
};

function drawPlayer(){ 
    ctx.fillStyle = "red";
    ctx.fillRect( 
        player.x,
        player.y,
        player.width,
        player.height
    );
}

drawPlayer();