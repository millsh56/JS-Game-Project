// alert function ideally on click instruction alert will pop up
function instructionsAlert() {
    alert("Dear Player,\nI was once trapped in here like you. If you follow my advice you should make it out just fine.\nBe cautious, these cats mean business. When each cat meows click it to give it a treat. This will calm it down... Until it get's hungry again. Lookout for Hangry cats. Once they turn red and start to grow you don't have a lot of time before they lunge.\nIf the cats get you three times before sunrise you might not live to see another day outside this place. I wish you better luck than me, it looks like this will be my last time at the cat cafe, at least for a long time.\nGood Luck! Signed Janitor Jimothy");
}

// grab instructions button from dom 

const instructionsButton = document.getElementById("Instructions")

// const instructionsButton = document.getElementById("Instructions")
instructionsButton.addEventListener('click', e => {
    instructionsAlert()
})


// start game function
function meowBubbleMovement() {

    // grab images and get them to listen for clicks
    const allCats = document.querySelectorAll(".cats");
    allCats.forEach((image) => {
        image.style.opacity = 1;
        image.addEventListener("click", handleImageClick);
    });

    const meowBubble = document.getElementById('meow-bubble');
    object.style.display = 'block';
    image.getBoundingClientRect()
    meowBubble.style.left = `${imagePosition.left}px`;
    meowBubble.style.top = `${imagePosition.top}px`;
    document.body.append(meowBubble);

    // Show the meow bubble over a random image to start the game
    const meowBubblePosition = Math.floor(Math.random() * (max - min + 1) + min);
    meowBubble(allCats[meowBubblePosition]);
}


// Add a click event listener to the play button
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", startGame);
// Start the timer
function startGameTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            youWin();
        }
    }, 1000);
}

const timeLeft = 5 * 60;

// Function to update the timer display
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timer = document.getElementById("timer");
    timer.textContent = `Time until morning: ${minutes}:${seconds.toString().padStart(2, "0")}`;
    document.append("timer")
}

// function for winning condition
function youWin() {
    clearInterval(timerInterval);
    alert("You survived the night!\nThe cats thank you for the treats!\nCome back anytime you like! :3");
}

animateImage();

// function to check for conditions for cat to lunge
function lungePath(event) {
    const image = event.target;

    if (image.style.transform === "scale(4)") {
        // Image has reached full size, show word bubble over a different random image
        const allImages = document.querySelectorAll(".game-image");
        const randomCat = getRandomNumber(0, allImages.length - 1);
        meowBubbleMovement(allImages[randomCat]);
    }
    else {
        // Image is still growing, change its color to red and grow it further
        image.style.filter = "hue-rotate(90deg)";
        image.style.transform = "scale(4)";
    }
}

// function for adding strikes
const strikes = 0;

function whenCatLunges() {
    strikes++;
    const strikesObject = document.getElementById("strikes");
    strikesObject.textContent = `Strikes: ${strikes}`;

    // see if there are three strikes
    if (strikes === 3) {
        // Perform actions when the player loses
        alert("GAME OVER!\nThe cats got you three times so you are dinner!\nHit play to try again");
    }
}



// // Function to get a random cat from the three cats (ie what cat will bubble be positioned over)
// function startGame (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// this is what will start when play is clicked


// // functions call started info
// setInterval(() => {
//     meowBubble();
//     setTimeout(() => {
//         meow();
//     }, 1000); // time in milliseconds meow would stay on screen...???
//     hangry();
// }, 2000); // time in milliseconds for how often meow pops up


// function to make cat turn red and grow....

// async function hangryCat() {
//     await
//     image.style.opacity = 1;
//     setTimeout(() => {
//         image.style.filter = "hue-rotate(90deg)";
//         image.style.transform = "scale(1.5)";
//     }, 5000);
// }


