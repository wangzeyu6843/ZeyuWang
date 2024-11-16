function setProgress(id, percentage) {
    const progressFill = document.getElementById(id);
    progressFill.style.width = percentage + '%';
    const progressText = progressFill.querySelector('.progress-text');
    progressText.textContent = percentage + '%';
}

setProgress('progress1', 100);
setProgress('progress2', 80);
setProgress('progress3', 70);
setProgress('progress4', 80);

function animateProgress(fill, text, targetPercentage) {
    let currentPercentage = 0;
    function step() {
        if (currentPercentage < targetPercentage) {
            currentPercentage++;
            fill.style.width = currentPercentage + '%';
            text.textContent = currentPercentage + '%';
            requestAnimationFrame(step);
        }
    }
    step();
}

document.querySelectorAll('.progress-fill').forEach(fill => {
    const text = fill.querySelector('.progress-text');
    const targetPercentage = parseInt(fill.style.width);

    fill.addEventListener('mouseover', () => {
        text.style.opacity = 1; 
        fill.style.width = '0%'; 
        animateProgress(fill, text, targetPercentage); 
    });

   
});

/* adapted from the progress bar of the tutorial
https://www.ChatGPT.com */