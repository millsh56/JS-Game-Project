document.getElementById("Instructions").onclick

function instructionsAlert() {
    alert("Dear Player, I was once trapped in here like you. If you follow my advice you should make it out just fine. Be cautious, these cats mean business. When each cat meows click it to give it a treat. This will calm it down... Until it get's hungry again. Lookout for Hangry cats. Once they turn red and start to grow you don't have a lot of time before they lunge. If the cats get you three times before sunrise you might not live to see another day outside this place. I wish you better luck than me, it looks like this will be my last time at the cat cafe, at least for a long time. Good Luck! Signed Janitor Jimothy");
  }

  document.getElementById("Play").onclick

// defines cats??? do i need???
const cats = ['freddie', 'baby', 'aminita'];

// Function to get a random cat from the three cats
function startGame (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to pop up the meow bubble randomly on one of the three cats
function showMeow() {
    const randomIndex = getRandomNumber(0, 3);
    const meow = items[randomIndex];
    const meow = document.getElementById('meow-bubble');
    meow.style.left = ;
    meow.style.top = ;
    object.style.display = 'block'; 
}
// function to 

  // Get the object element from the DOM
const freddie = document.getElementById('freddie');

// Function to get a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to randomly position the object on the screen
function freddiePosition() {
    freddie.style.left = ;
    freddie.style.top = ;
    freddie.style.display = 'block';
}

// function to make cat turn red and grow
function hangry() {
    object.style.display = 'SOMETHING';
}

// Call the functions to make the object appear and disappear at random intervals
setInterval(() => {
    freddie();
    setTimeout(() => {
        meow();
    }, 1000); // Change the duration (in milliseconds) to control how long the object stays visible
    hangry();
}, 2000); // Change the interval (in milliseconds) to control how frequently the object appears



