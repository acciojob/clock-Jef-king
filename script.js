function updateTimer() {
            const timerElement = document.getElementById("timer");
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1; // Months are zero-based
            const day = now.getDate();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
            timerElement.textContent = now;
        }

        // Update the timer every second
        setInterval(updateTimer, 1000);

        // Initial call to set the timer immediately
        updateTimer();