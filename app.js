let moves = {
    up: "KeyW",
    down: "KeyS",
    left: "KeyA",
    right: "KeyD"
};
const box = document.querySelector('.box');
let position = [20, 20];
let boxSize = 50;
let isGameOver = false;

//function for transition
const clickAnim = (object) => {
    object.addEventListener("transitioncancel", () => {
        object.style.background = "wheat";
    });
    object.style.background = "hotpink";
    object.ontransitionend = () => {
        object.style.background = "wheat";
    }
}

//function of moves

const goUp = () => {
    clickAnim(document.querySelector(".w"));
    if (!isGameOver) {
        if (position[0] > 0) {
            position[0] -= 20;
            box.style.top = `${position[0]}px`;
        }
    }



};

const goDown = () => {
    clickAnim(document.querySelector(".s"));
    if (!isGameOver) {
        if (position[0] < (600 - boxSize)) {
            position[0] += 20;
            box.style.top = `${position[0]}px`;
        }
    }

};

const goLeft = () => {
    clickAnim(document.querySelector(".a"));
    if (!isGameOver) {
        if (position[1] > 0) {
            position[1] -= 20;
            box.style.left = `${position[1]}px`;
        }
    }

};

const goRight = () => {
    clickAnim(document.querySelector(".d"));
    if (!isGameOver) {
        if (position[1] < (1200 - boxSize)) {
            position[1] += 20;
            box.style.left = `${position[1]}px`;
        }
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



//enemy

let isStarted = false;
let isStopped = false;
let enemyPosition = [100, 1250];

const movementOfEnemy = () => {
    if (Math.abs(enemyPosition[0] - (position[0] + 10)) >= Math.abs(enemyPosition[1] - (position[1] + 10))) {
        if (enemyPosition[0] - (position[0] + 10) > 0) {
            enemyPosition[0] -= 10;
        } else {
            enemyPosition[0] += 10;
        }
        document.querySelector(".enemy").style.top = `${enemyPosition[0]}px`;
    } else {
        if (enemyPosition[1] - (position[1] + 10) > 0) {
            enemyPosition[1] -= 10;
        } else {
            enemyPosition[1] += 10;
        }
        document.querySelector(".enemy").style.left = `${enemyPosition[1]}px`;
    }

    if (enemyPosition[0] === position[0] + 10 && enemyPosition[1] === position[1] + 10) {
        box.style.display = "none";
        food.style.display = "none";
        isGameOver = true;
        const finalScore = parseInt(score.innerText);
        document.querySelector("h1").innerText = `Game is over. You final score is ${finalScore}`;
    }
}

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {
        clickAnim(document.querySelector(".space"));
        isStopped = false;
        if (!isStarted) {
            isStarted = true;
            setInterval(() => {
                if (!isStopped) {
                    movementOfEnemy();
                }
            }, 100);
        }
    }
});

document.addEventListener("keydown", (event) => {
    if (event.code === "KeyB") {
        clickAnim(document.querySelector(".b"));
        isStopped = true;
    };
});