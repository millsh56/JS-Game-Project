
// Alert function - display instructions when the "Instructions" button is clicked
function instructionsAlert() {
    // Your alert message here
    alert("Dear Player,\nI was once trapped in here like you. If you follow my advice you should make it out just fine.\nBe cautious, these cats mean business. When each cat meows click it to give it a treat. This will calm it down... Until it gets hungry again. Lookout for Hangry cats. Once they turn red and start to grow you don't have a lot of time before they lunge.\nIf the cats get you three times before sunrise you might not live to see another day outside this place. I wish you better luck than me, it looks like this will be my last time at the cat cafe, at least for a long time.\nGood Luck! Signed Janitor Jimothy");
}

// Event listener for the "Instructions" button to trigger the instructionsAlert function
const instructionsButton = document.getElementById("Instructions")
instructionsButton.addEventListener('click', e => {
    instructionsAlert()
})

// Function to create and append the meow bubble image to the page
function createMeowBubble() {
    const meowBubble = document.createElement("img");
    meowBubble.id = "meow-bubble";
    meowBubble.src = "assets/meow.png"; // Replace with the path of your meow bubble image
    meowBubble.style.display = "none";
    document.getElementById("gameBoard").appendChild(meowBubble);
    return meowBubble;
}

// Function to start the game when the "Play" button is clicked
function startGame() {
    const timeLeft = 5 * 60;
    let timerInterval;
    let strikes = 0;

    // Function to update the timer display
    function updateTimerDisplay(minutes, seconds) {
        const timerDisplay = document.createElement("p");
        timerDisplay.id = "timerDisplay";
        timerDisplay.textContent = `Time until morning: ${minutes}:${seconds.toString().padStart(2, "0")}`;

        // Append the timer display after the "Time Until Morning" paragraph
        const timeUntilMorningParagraph = document.getElementById("timer");
        timeUntilMorningParagraph.insertAdjacentElement('afterend', timerDisplay);
    }

    // Function to start the game timer
    function startGameTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                timeLeft = 0;
                clearInterval(timerInterval);
                youWin();
            }
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            updateTimerDisplay(minutes, seconds);
        }, 1000);
    }

    // Function to display the "You Win" alert when the game ends
    function youWin() {
        clearInterval(timerInterval);
        alert("You survived the night!\nThe cats thank you for the treats!\nCome back anytime you like! :3");
    }

    // Function to handle when a cat is clicked
    function handleCatClick() {
        // Check if the cat is in the lunge animation state
        if (this.style.transform === "scale(100)") {
            // Lunge animation complete, show meow bubble over a different random cat
            showMeowBubble();
        } else {
            // Cat was not clicked during lunge animation, increase strikes and update display
            strikes++;
            const strikesObject = document.getElementById("strikes");
            strikesObject.textContent = `Strikes: ${strikes}`;

            // Check if there are three strikes
            if (strikes === 3) {
                // Perform actions when the player loses
                clearInterval(timerInterval);
                alert("GAME OVER!\nThe cats got you three times so you are dinner!\nHit play to try again");
            }
        }
    }

    // Start the game timer
    startGameTimer();

    // Grab cats and wait for clicks
    const allCats = document.querySelectorAll(".cats");
    allCats.forEach((cat) => {
        cat.style.opacity = 1; // Show the cat
        cat.addEventListener("click", handleCatClick);
    });

    // Show meow bubble over random cat
    function showMeowBubble() {
        const randomCatAttack = getRandomNumber(0, allCats.length - 1);
        const hangryCat = allCats[randomCatAttack];

        const meowBubble = createMeowBubble();
        meowBubble.style.display = "block";

        // Positioning for meow bubble
        const catPosition = hangryCat.getBoundingClientRect();
        meowBubble.style.left = `${catPosition.left}px`;
        meowBubble.style.top = `${catPosition.top}px`;

        // Wait for cat to be clicked
        setTimeout(() => {
            // If not clicked, animate the cat
            if (hangryCat.style.transform !== "scale(4)") {
                hangryCat.style.filter = "hue-rotate(90deg)";
                hangryCat.style.transform = "scale(4)";

                // Wait again before lunge if not clicked
                setTimeout(() => {
                    const newCatImage = hangryCat.dataset.newImage; // Get the data-new-image attribute value
                    hangryCat.src = newCatImage;
                    hangryCat.style.transition = "transform 0.3s ease";

                    // Lunge
                    setTimeout(() => {
                        hangryCat.style.transform = "scale(100)";
                    }, 10);
                }, 2000);
            }
        }, 5000);
    }

    // Initial call to show meow bubble
    showMeowBubble();
}

// Event listener for the "Play" button to start the game
const playButton = document.getElementById("Play");
playButton.addEventListener("click", startGame);

// Function to get a random number within a range (used for random cat selection)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}