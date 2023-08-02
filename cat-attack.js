//   add cats
  function addCat(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

function place(image) {
    image.style.position = 'fixed'

    function placeCat(left, bottom) {
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    return {
        where: placeCat
    }
}

// position cats
place(addCat('https://placekitten.com/150/240')).where(200, 450)
place(addCat('https://placekitten.com/150/240')).where(350, 250)
place(addCat('https://placekitten.com/150/240')).where(450, 350)

// alert function ideally on click instruction alert will pop up
function instructionsAlert() {
    alert("Dear Player, I was once trapped in here like you. If you follow my advice you should make it out just fine. Be cautious, these cats mean business. When each cat meows click it to give it a treat. This will calm it down... Until it get's hungry again. Lookout for Hangry cats. Once they turn red and start to grow you don't have a lot of time before they lunge. If the cats get you three times before sunrise you might not live to see another day outside this place. I wish you better luck than me, it looks like this will be my last time at the cat cafe, at least for a long time. Good Luck! Signed Janitor Jimothy");
  }

  // grab instructions button from dom 
const instructionsButton = document.getElementById("Instructions")

// Wait for the button click event and show the instructions alert
instructionsButton.onclick = instructionsAlert;

// grab play button from dom and wait for click
document.getElementById("Play").onclick


// Function to get a random cat from the three cats (ie what cat will bubble be positioned over)
function startGame (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to pop up the meow bubble randomly on one of the three cats
function showMeow() {
    const play = startGame(0, 3);
    const start = items[randomIndex];
    const meow = document.getElementById('meow-bubble');
    meow.style.left = ;
    meow.style.top = ;
    object.style.display = 'block'; 
}

// repeat of random number function 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// functions call started info
setInterval(() => {
    meowBubble();
    setTimeout(() => {
        meow();
    }, 1000); // time in milliseconds meow would stay on screen...???
    hangry();
}, 2000); // time in milliseconds for how often meow pops up


// function to make cat turn red and grow....
function hangry() {
    object.style.display = 'SOMETHING';
}

// function for cat to lunge
function lunge() {
    
}

// function for adding strikes??
const strikes = 0; 

function whenCatLunges() {
    strikes++;
    const strikesObject = document.getElementById("strikes");
    strikesObject.textContent = `Strikes: ${strikes}`;

    // see if there are three strikes
    if (strikes === 3) {
        // Perform actions when the player loses
        alert("GAME OVER! The cats got you three times you are dead! Hit play to try again");
    }
}
