// add cats
  function addImg(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

function place(image) {
    image.style.position = 'fixed'

    function placeImg(left, bottom) {
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    return {
        where: placeImg
    }
}

// position cats
place(addImg('https://placekitten.com/150/240')).where(200, 100)
place(addImg('https://placekitten.com/150/240')).where(765, 100)
place(addImg('https://placekitten.com/150/240')).where(1320, 100)


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

// meow bubble code
function placeMeowBubble(image) {
    const meow = document.createElement("div");
    
    // Set the word bubble content based on the game logic
    // For example, you can use textContent to set the words inside the bubble
    wordBubble.textContent = "Hello!";
    // Position the word bubble over the image
    // For example, you can use image.getBoundingClientRect() to get the image position
    // and set the word bubble's left and top position accordingly
    // Example: wordBubble.style.left = `${imagePosition.left}px`;
    //          wordBubble.style.top = `${imagePosition.top}px`;
    document.body.append(wordBubble);

    // Wait for 3 seconds before turning the image red and growing it
    setTimeout(() => {
        image.style.filter = "hue-rotate(90deg)";
        image.style.transform = "scale(4)";
    }, 3000);

    // Wait for 7 seconds before animating the image to fill the screen
    setTimeout(() => {
        // Start the animation to grow the image to fill the screen
        // For example, you can use CSS transitions to smoothly animate the image size
        // Example: image.style.transition = "all 5s ease";
        //          image.style.transform = "scale(5)";
        // After the animation, remove the word bubble from the DOM
        wordBubble.remove();
    }, 7000);
}

// start game function
function startGame() {

    // grab images and get them to listen for clicks
    const allCats = document.querySelectorAll(".game-image");
    allCats.forEach((image) => {
        image.style.opacity = 1;
        image.addEventListener("click", handleImageClick);
    });

    const meow = document.getElementById('meow-bubble');
    // meow.style.left = ;
    // meow.style.top = ;
    object.style.display = 'block';

    // Show the word bubble over a random image to start the game
    const meowBubblePosition = getRandomNumber(0, allCats.length - 1);
    showWordBubble(allCats[meowBubblePosition]);
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
// Function to get a random cat from the three cats (ie what cat will bubble be positioned over)
function startGame (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to pop up the meow bubble randomly on one of the three cats
function showMeow() {
    const play = startGame(0, 3);
    const start = items[randomIndex];
    const meow = document.getElementById('meow-bubble');
    // meow.style.left = ;
    // meow.style.top = ;
    object.style.display = 'block'; 
}

// repeat of random number function 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// this is what will start when play is clicked

// const timerInterval = "hello"
const timeLeft = 5 * 60;

// Function to update the timer display
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timer = document.getElementById("timer");
    timer.textContent = `Time until morning: ${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// function for winning condition
function youWin() {
    clearInterval(timerInterval);
    alert("You survived the night!\nThe cats thank you for the treats!\nCome back anytime you like! :3");
}

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

animateImage();

// function for cat to lunge
function lunge() {

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
