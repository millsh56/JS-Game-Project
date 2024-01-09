// // alert function
// function instructionsAlert() {
//     alert(
//         "Dear Player,\nI was once trapped in here like you. If you follow my advice you should make it out just fine.\nBe cautious, these cats mean business. When each cat meows click it to give it a treat. This will calm it down... Until it gets hungry again. Lookout for Hangry cats. Once they turn red and start to grow you don't have a lot of time before they lunge.\nIf the cats get you three times before sunrise you might not live to see another day outside this place. I wish you better luck than me, it looks like this will be my last time at the cat cafe, at least for a long time.\nGood Luck! Signed Janitor Jimothy"
//         );
//     }
    
//     // instructions button event listener
//     const instructionsButton = document.getElementById("Instructions");
//     instructionsButton.addEventListener("click", instructionsAlert);
//     // timer display add to page
//     const timerDisplay = document.createElement("div");
//     timerDisplay.id = "timerDisplay";
//     document.getElementById("timerBox").appendChild(timerDisplay);
//     // grab cats and wait for clicks
//     const allCats = document.querySelectorAll(".cats");
//     let randomCatAttack = getRandomNumber(3);
//     const hangryCat = allCats[randomCatAttack];

// //update timer
// function updateTimerDisplay(minutes, seconds) {
//     timerDisplay.textContent = `Time until morning: ${minutes}:${seconds
//         .toString()
//         .padStart(2, "0")}`;
//     }
    
//     // start the game on play button click
//     function startGame() {
//         let timeLeft = 5 * 60;
//         let timerInterval;
//         let strikes = 0;
//         handleCatClick()
        
//         function startGameTimer() {
//             timerInterval = setInterval(() => {
//                 timeLeft--;
//                 if (timeLeft <= 0) {
//                     timeLeft = 0;
//                     clearInterval(timerInterval);
//                     youWin();
//                 }
//                 const minutes = Math.floor(timeLeft / 60);
//                 const seconds = timeLeft % 60;
//                 updateTimerDisplay(minutes, seconds);
//             }, 1000);
//         }
//         startGameTimer()
        
//         function youWin() {
//             clearInterval(timerInterval);
//             alert(
//                 "You survived the night!\nThe cats thank you for the treats!\nCome back anytime you like! :3"
//                 );
//             }
            
//             function handleCatClick() {
                
//                 // check for lunge animation
//                 if (hangryCat.style.transform === "scale(30)") {
//                 // add strike for lunge
//             addStrikeAndDisplay();
            
//             // show meow bubble over random cat
//             resetCatImages(); 
//             showRandomMeowBubble(); 
//             // event listener for cats
//             allCats.forEach((cat) => cat.addEventListener("click", handleCatClick));
            
        
//     }
  
//         // check for strikes
//         if (strikes === 3) {
//           // lose condition
//           clearInterval(timerInterval);
//           alert(
//             "GAME OVER!\nThe cats got you three times so you are dinner!\nHit play to try again"
//           );
//         } else {
//           resetCatAnimation();
//         }
//       }
//     }
  
//     function addStrikeAndDisplay() {
//       strikes++;
//       const strikesObject = document.getElementById("strikes");
//       strikesObject.textContent = `Strikes: ${strikes}`;
//     }
  
//     function resetCatAnimation() {
//       // reset cats
//       hangryCat.style.transform = "scale(1)";
//       const originalCatImage = hangryCat.dataset.originalImage; 
//       hangryCat.src = originalCatImage;
//       hangryCat.style.filter = "none";
//     }
  
//     function showMeowBubble() {
//       // wait for cat click
//       setTimeout(() => {
//         // if not animate the cat
//         if (hangryCat.style.transform === "scale(2)") {
//           hangryCat.style.transform = "scale(2)";
  
//           // wait for lunge if still not clicked
//           setTimeout(() => {
//             const newCatImage = hangryCat.dataset.newImage; // Get the data-new-image attribute value
//             hangryCat.src = newCatImage;
//             hangryCat.style.transition = "transform 0.3s ease";
  
//             // Lunge
//             setTimeout(() => {
//             hangryCat.style.transform = "scale(1)";
//               addStrikeAndDisplay();
//               resetCatAnimation();
//               resetCatImages(); // reset
//               showRandomMeowBubble(); // show meow bubble over a different random cat
  
//               // event listener for the meow bubble
//               allCats.forEach((cat) => cat.addEventListener("click", handleCatClick));
//               console.log("Cat selected for lunge:", hangryCat);
//             }, 3000);
//           }, 4000);
//         } else {
//           // clear existing meow bubble
//           let clearMeow = document.querySelector(".currentMeow");
//           if (clearMeow) {
//             clearMeow.style.opacity = 0;
//           }
  
//           resetCatImages();
//           showRandomMeowBubble(); 
  
//           // start the event listener for the meow bubble do i need to do this again here??
//         //   allCats.forEach((cat) => cat.addEventListener("click", handleCatClick));
//           console.log("Cat selected for lunge:", hangryCat);
//         }
//       }, 5000);
//     }
  
//     // reset cat images function
//     function resetCatImages() {
//       allCats.forEach((cat, index) => {
//         if (index !== randomCatAttack) {
//           const originalCatImage = cat.dataset.originalImage;
//           cat.src = originalCatImage;
//           cat.style.filter = "none";
//         }
//       });
//     }
  
//     // meow bubble functionality 
//     function showRandomMeowBubble() {
  
//       if (randomCatAttack === 0) {
//         const freddieMeow = document.getElementById("freddieMeow");
//         freddieMeow.style.opacity = 1;
//       }
//       if (randomCatAttack === 1) {
//         const babyMeow = document.getElementById("babyMeow");
//         babyMeow.style.opacity = 1;
//       }
//       if (randomCatAttack === 2) {
//         const yamMeow = document.getElementById("yamMeow");
//         yamMeow.style.opacity = 1;
//       }
//     }
  
//     // // Start the game timer
//     // startGameTimer();
  
//     // Show meow bubble over random cat
//     showMeowBubble();
  
//   // play button to start game
//   const playButton = document.getElementById("Play");
//   playButton.addEventListener("click", startGame);
  
//   // random number
//   function getRandomNumber(max) {
//     return Math.floor(Math.random() * (max));
//   }