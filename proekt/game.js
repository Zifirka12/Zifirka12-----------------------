const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const greenGround = new Image();
greenGround.src = "spek.jpg";

const foodImg = new Image();
foodImg.src = "Ic.png";

let box = 32;
let score = 0;

let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != "right") {
        dir = "left";
    } else if (event.keyCode == 38 && dir != "down") {
        dir = "up";
    } else if (event.keyCode == 39 && dir != "left") {
        dir = "right";
    } else if (event.keyCode == 40 && dir != "up") {
        dir = "down";
    }
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистить холст перед перерисовкой
    ctx.drawImage(greenGround, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);
    
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0? "green" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    
    ctx.fillStyle = "red";
    ctx.font = "48px Arial";
    ctx.fillText(score, box * 2, 41);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (dir == "left") snakeX -= box;
    if (dir == "right") snakeX += box;
    if (dir == "up") snakeY -= box;
    if (dir == "down") snakeY += box;

    // Проверка столкновений со стенами
    if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height - box) {
        alert("Столкновение со стеной!");
        clearInterval(game);
        return;
    }

    // Проверка столкновения самой змеи с собой
    if (collision({ x: snakeX, y: snakeY }, snake.slice(1))) {
        alert("Самостолкновение!");
        clearInterval(game);
        return;
    }

    // Проверка съедения еды
    if (snakeX === food.x && snakeY === food.y) {
        score++;
        do {
            food.x = Math.floor((Math.random() * 17 + 1)) * box;
            food.y = Math.floor((Math.random() * 15 + 3)) * box;
        } while (collision({ x: food.x, y: food.y }, snake)); // Убедиться, что еда не появилась на змее
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);
}

let game = setInterval(drawGame, 100);

