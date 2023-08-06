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
    // Grab cats and wait for clicks
    const allCats = document.querySelectorAll(".cats");
    let randomCatAttack = getRandomNumber(0, 1, 2);
    const hangryCat = allCats[randomCatAttack];

// Function to update the timer display
function updateTimerDisplay(minutes, seconds) {
    timerDisplay.textContent = `Time until morning: ${minutes}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
    
    // Function to start the game on play button click
    function startGame() {
        let timeLeft = 5 * 60;
        let timerInterval;
        let strikes = 0;
        handleCatClick()
        
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
            
            function handleCatClick() {
                
                // Check if the cat is in the lunge animation state
                if (hangryCat.style.transform === "scale(30)") {
            // Cat was clicked during lunge animation
            addStrikeAndDisplay();
            
            // Show meow bubble over random cat
            resetCatImages(); 
            showRandomMeowBubble(); 
            // Start the event listener for the cats 
            allCats.forEach((cat) => cat.addEventListener("click", handleCatClick));
            
        
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
      }
    }
  
    function addStrikeAndDisplay() {
      strikes++;
      const strikesObject = document.getElementById("strikes");
      strikesObject.textContent = `Strikes: ${strikes}`;
    }
  
    function resetCatAnimation() {
      // Reset the cat to normal reset the image
      hangryCat.style.transform = "scale(1)";
      const originalCatImage = hangryCat.dataset.originalImage; 
      hangryCat.src = originalCatImage;
      hangryCat.style.filter = "none";
    }
  
    function showMeowBubble() {
      // Wait for cat to be clicked
      setTimeout(() => {
        // If not clicked, animate the cat
        if (hangryCat.style.transform === "scale(2)") {
          hangryCat.style.transform = "scale(2)";
  
          // Wait again before lunge if not clicked
          setTimeout(() => {
            const newCatImage = hangryCat.dataset.newImage; // Get the data-new-image attribute value
            hangryCat.src = newCatImage;
            hangryCat.style.transition = "transform 0.3s ease";
  
            // Lunge
            setTimeout(() => {
            hangryCat.style.transform = "scale(1)";
              addStrikeAndDisplay();
              resetCatAnimation();
              // Show meow bubble over random cat based on randomCatAttack
              resetCatImages(); // Reset other cat images to their original state
              showRandomMeowBubble(); // Show meow bubble over a different random cat
  
              // Start the event listener for the meow bubble
              allCats.forEach((cat) => cat.addEventListener("click", handleCatClick));
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
        //   allCats.forEach((cat) => cat.addEventListener("click", handleCatClick));
          console.log("Cat selected for lunge:", hangryCat);
        }
      }, 5000);
    }
  
    // Helper function to reset other cat images to their original state
    function resetCatImages() {
      allCats.forEach((cat, index) => {
        if (index !== randomCatAttack) {
          const originalCatImage = cat.dataset.originalImage;
          cat.src = originalCatImage;
          cat.style.filter = "none";
        }
      });
    }
  
    // Helper function to show meow bubble over a different random cat
    function showRandomMeowBubble() {
  
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
    }
  
    // // Start the game timer
    // startGameTimer();
  
    // Show meow bubble over random cat
    showMeowBubble();
  
  // Event listener for the "Play" button to start the game
  const playButton = document.getElementById("Play");
  playButton.addEventListener("click", startGame);
  
  // Function to get a random number within a range (used for random cat selection)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
