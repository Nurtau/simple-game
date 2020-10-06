let moves = {
    up: "KeyW",
    down: "KeyS",
    left: "KeyA",
    right: "KeyD"
};
const box = document.querySelector('.box');
let position = [10, 10];
let boxSize = 50;

document.addEventListener("keypress", (e) => {
    if (e.code === moves.up) {
        if (position[0] > 0) {
            position[0] -= 10;
            box.style.top = `${position[0]}px`;
        }

    } else if (e.code === moves.down) {
        if (position[0] < (600 - boxSize)) {
            position[0] += 10;
            box.style.top = `${position[0]}px`;
        }

    } else if (e.code === moves.left) {
        if (position[1] > 0) {
            position[1] -= 10;
            box.style.left = `${position[1]}px`;
        }

    } else if (e.code === moves.right) {
        if (position[1] < (1200 - boxSize)) {
            position[1] += 10;
            box.style.left = `${position[1]}px`;
        }

    }
});


//initialisation of food and score label
const food = document.querySelector(".food");
const score = document.querySelector(".score");

const calculateFoodPosition = () => {
    let topFood = Math.floor(Math.random() * 550);
    let leftFood = Math.floor(Math.random() * 1150);
    let result = [topFood, leftFood];
    food.style.left = `${result[1]}px`;
    food.style.top = `${result[0]}px`;
    let scoreValue = parseInt(score.innerText) + 1;
    score.innerText = `${scoreValue}`;
    boxSize += 10;
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;
    return result;
};

let foodPosition = calculateFoodPosition();




document.addEventListener("keypress", () => {
    if ((foodPosition[0] > position[0] && foodPosition[0] < position[0] + boxSize && foodPosition[1] > position[1] && foodPosition[1] < position[1] + boxSize) ||
        (foodPosition[0] > position[0] && foodPosition[0] < position[0] + boxSize && foodPosition[1] + 20 > position[1] && foodPosition[1] + 20 < position[1] + boxSize) ||
        (foodPosition[0] + 20 > position[0] && foodPosition[0] + 20 < position[0] + boxSize && foodPosition[1] > position[1] && foodPosition[1] < position[1] + boxSize) ||
        (foodPosition[0] + 20 > position[0] && foodPosition[0] + 20 < position[0] + boxSize && foodPosition[1] + 20 > position[1] && foodPosition[1] + 20 < position[1] + boxSize)) {
        foodPosition = calculateFoodPosition();
    }
});