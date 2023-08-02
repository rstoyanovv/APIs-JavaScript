let timer;
let marginTop = 360;
let bottomToTop = true;
let animationSpeed = 100;

function jumpBall() {
    const ball = document.getElementById("ball");
    if (bottomToTop) {
        marginTop -= 10;
    } else {
        marginTop += 10;
    }
    ball.style.marginTop = marginTop + "px";
    if (marginTop === 60) {
        bottomToTop = false;
    }
    if (marginTop === 360) {
        bottomToTop = true;
    }
}

function start() {
    const btn = document.getElementById("start");
    if (btn.innerHTML.trim() === 'Start') {
        timer = setInterval(jumpBall, animationSpeed);
        btn.innerHTML = 'Stop';
    } else {
        clearInterval(timer);
        btn.innerHTML = 'Start';
    }
}

function speedUp() {
    animationSpeed -= 10;
    if (animationSpeed < 10) {
        animationSpeed = 10;
    }
    updateSpeedLabel();
    if (timer) {
        clearInterval(timer);
        timer = setInterval(jumpBall, animationSpeed);
    }
}

function speedDown() {
    animationSpeed += 10;
    if (animationSpeed > 500) {
        animationSpeed = 500;
    }
    updateSpeedLabel();
    if (timer) {
        clearInterval(timer);
        timer = setInterval(jumpBall, animationSpeed);
    }
}

function updateSpeedLabel() {
    document.getElementById("speed").innerText = `Speed: ${animationSpeed} ms`;
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("speed-up").addEventListener("click", speedUp);
document.getElementById("speed-down").addEventListener("click", speedDown);
updateSpeedLabel();
