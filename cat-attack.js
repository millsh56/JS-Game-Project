// Alert function - display instructions when the "Instructions" button is clicked
function instructionsAlert() {
  // Your alert message here
  alert(
      "Dear Player,\nI was once trapped in here like you. If you follow my advice you should make it out just fine.\nBe cautious, these cats mean business. When each cat meows click it to give it a treat. This will calm it down... Until it gets hungry again. Lookout for Hangry cats. Once they turn red and start to grow you don't have a lot of time before they lunge.\nIf the cats get you three times before sunrise you might not live to see another day outside this place. I wish you better luck than me, it looks like this will be my last time at the cat cafe, at least for a long time.\nGood Luck! Signed Janitor Jimothy"
      );
  }
  
  // Event listener for the "Instructions" button to trigger the instructionsAlert function
  const instructionsButton = document.getElementById("Instructions");
  instructionsButton.addEventListener("click", instructionsAlert);
  
  // Global timer display element
  const timerDisplay = document.createElement("div");
  timerDisplay.id = "timerDisplay";
  document.getElementById("timerBox").appendChild(timerDisplay);
  
  // Function to update the timer display
  function updateTimerDisplay(minutes, seconds) {
    timerDisplay.textContent = `Time until morning: ${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
    }

      // grab cats and wait for clicks
const allCats = document.querySelectorAll(".cats");

    
    // Function to start the game on play button click
    function startGame() {
      let timeLeft = 5 * 60;
      let timerInterval;
      let strikes = 0;
      
  // Get a random cat index for the initial meow bubble
  let randomCatAttack = getRandomNumber(0, allCats.length - 1);

  // Call handleCatClick with the random cat index
  handleCatClick(randomCatAttack);
      
  allCats.forEach((cat, index) => {
    cat.addEventListener("click", () => handleCatClick(index));
  });

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

      startGameTimer()
      
      function youWin() {
          clearInterval(timerInterval);
          alert(
              "You survived the night!\nThe cats thank you for the treats!\nCome back anytime you like! :3"
              );
          }
          
          function handleCatClick(randomCatIndex) {
              const hangryCat = allCats[randomCatIndex]
              // Check if the cat is in the lunge animation state
              if (hangryCat.style.transform === "scale(2)") {
          // Cat was clicked during lunge animation
          addStrikeAndDisplay();
          
          // Show meow bubble over random cat
          resetCatImages(); 
          catAnimation(randomCatIndex); 
              } else {
                let clearMeow = document.querySelector(".currentMeow");
                if (clearMeow) {
                  clearMeow.style.opacity = 0;
              }
              resetCatImages(); 
              catAnimation
              
              (randomCatIndex); 
              }
  }

      // Check if there are three strikes
      if (strikes === 3) {
        // lose condition
        clearInterval(timerInterval);
        alert(
          "GAME OVER!\nThe cats got you three times so you are dinner!\nHit play to try again"
        );
      } else {
        resetCatAnimation();
      }
  

  function addStrikeAndDisplay() {
    strikes++;
    const strikesObject = document.getElementById("strikes");
    strikesObject.textContent = `Strikes: ${strikes}`;
  }


  function resetCatAnimation() {
    hangryCat.style.transform = "scale(1)";
    const originalCatImage = hangryCat.dataset.originalImage;
    hangryCat.src = originalCatImage;
    hangryCat.style.filter = "none";
  }

  
  function catAnimation() {
    // Wait for cat to be clicked
    setTimeout(() => {
      // If not clicked, animate the cat
      if (hangryCat.style.transform === "scale(.50)") {
        hangryCat.style.transform = "scale(.75)";

        // Wait again before lunge if not clicked
        setTimeout(() => {
          const newCatImage = hangryCat.dataset.newImage; // Get the data-new-image attribute value
          hangryCat.src = newCatImage;
          hangryCat.style.transition = "transform 0.3s ease";

          // Lunge
          setTimeout(() => {
          hangryCat.style.transform = "scale(2)";
            addStrikeAndDisplay();
            resetCatAnimation();
            resetCatImages(); // Reset 
            showRandomMeowBubble(); // Show meow bubble over a different random cat

            // Start the event listener for the meow bubble
            allCats.forEach((hangryCat) => hangryCat.addEventListener("click", handleCatClick));
            console.log("Cat selected for lunge:", hangryCat);
          }, 3000);
        }, 4000);
      } else {
        // Remove existing meow bubble, if any
        let clearMeow = document.querySelector(".currentMeow");
        if (clearMeow) {
          clearMeow.style.opacity = 0;
        }

        // Show meow bubble over random cat based on randomCatAttack
        resetCatImages(); // Reset other cat images to their original state
        showRandomMeowBubble(); // Show meow bubble over a different random cat

        // Start the event listener for the meow bubble
        hangryCat.addEventListener("click", handleCatClick);
        console.log("Cat selected for lunge:", hangryCat);
      }
    }, 5000);
  }

   // Helper function to reset other cat images to their original state
   function resetCatImages() {
    allCats.forEach((hangryCat, index) => {
      if (index !== randomCatAttack) {
        const originalCatImage = hangryCat.dataset.originalImage;
        hangryCat.src = originalCatImage;
        hangryCat.style.filter = "none";
      }
    });
  }

  // meow bubble functionality
  function showRandomMeowBubble() {
const randomCatAttack = getRandomNumber(allCats.length)
    if (randomCatAttack === 0) {
      const freddieMeow = document.getElementById("freddieMeow");
      freddieMeow.style.opacity = 1;
    }
    if (randomCatAttack === 1) {
      const babyMeow = document.getElementById("babyMeow");
      babyMeow.style.opacity = 1;
    }
    if (randomCatAttack === 2) {
      const yamMeow = document.getElementById("yamMeow");
      yamMeow.style.opacity = 1;
    }
    allCats.forEach((hangryCat, index) => {
      hangryCat.addEventListener("click", () => handleCatClick(index));
    });
  }

  catAnimation();
}
// Event listener for the "Play" button to start the game
const playButton = document.getElementById("Play");
playButton.addEventListener("click", startGame);

// Function to get a random number within a range (used for random cat selection)
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max));
}
