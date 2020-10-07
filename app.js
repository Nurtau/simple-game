let moves = {
    up: "KeyW",
    down: "KeyS",
    left: "KeyA",
    right: "KeyD"
};
const box = document.querySelector('.box');
let position = [10, 10];
let boxSize = 50;


//function of moves

const goUp = () => {
    document.querySelector(".w").addEventListener("transitioncancel", () => {
        document.querySelector(".w").style.background = "wheat";
    });
    document.querySelector(".w").style.background = "hotpink";
    document.querySelector(".w").ontransitionend = () => {
        document.querySelector(".w").style.background = "wheat";
    }
    if (position[0] > 0) {
        position[0] -= 10;
        box.style.top = `${position[0]}px`;
    }


};

const goDown = () => {
    document.querySelector(".s").addEventListener("transitioncancel", () => {
        document.querySelector(".s").style.background = "wheat";
    });
    document.querySelector(".s").style.background = "hotpink";
    document.querySelector(".s").ontransitionend = () => {
        document.querySelector(".s").style.background = "wheat";
    }
    if (position[0] < (600 - boxSize)) {
        position[0] += 10;
        box.style.top = `${position[0]}px`;
    }
};

const goLeft = () => {
    document.querySelector(".a").addEventListener("transitioncancel", () => {
        document.querySelector(".a").style.background = "wheat";
    });
    document.querySelector(".a").style.background = "hotpink";
    document.querySelector(".a").ontransitionend = () => {
        document.querySelector(".a").style.background = "wheat";
    };
    if (position[1] > 0) {
        position[1] -= 10;
        box.style.left = `${position[1]}px`;
    }
};

const goRight = () => {
    document.querySelector(".d").addEventListener("transitioncancel", () => {
        document.querySelector(".d").style.background = "wheat";
    });
    document.querySelector(".d").style.background = "hotpink";
    document.querySelector(".d").ontransitionend = () => {
        document.querySelector(".d").style.background = "wheat";
    }
    if (position[1] < (1200 - boxSize)) {
        position[1] += 10;
        box.style.left = `${position[1]}px`;
    }
};

document.addEventListener("keypress", (e) => {
    if (e.code === moves.up) {
        goUp();

    } else if (e.code === moves.down) {
        goDown();

    } else if (e.code === moves.left) {
        goLeft();

    } else if (e.code === moves.right) {
        goRight();
    }
});

document.querySelector(".w").addEventListener("click", goUp);
document.querySelector(".s").addEventListener("click", goDown);
document.querySelector(".d").addEventListener("click", goRight);
document.querySelector(".a").addEventListener("click", goLeft);


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