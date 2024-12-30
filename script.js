const circles = document.querySelectorAll('.circle');
const progressBars = document.querySelectorAll('.progress-bar .progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentActive = 1;

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    progressBars.forEach((progress, idx) => {
        if (idx < currentActive - 1) {
            progress.style.width = '100%';
        } else {
            progress.style.width = '0';
        }
    });

    prevButton.disabled = currentActive === 1;
    nextButton.disabled = currentActive === circles.length;
}

nextButton.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});
