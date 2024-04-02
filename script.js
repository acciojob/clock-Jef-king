function updateTimer() {
            const timerElement = document.getElementById("timer");
            const now = new Date();
            timerElement.textContent = now;
        }
        setInterval(updateTimer, 1000);
        updateTimer();