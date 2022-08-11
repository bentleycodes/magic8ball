// 8 Ball images array.
const imgArray = [];
imgArray[0] = '8ball-images/asiseeitball.png',
imgArray[1] = '8ball-images/askagainball.png',
imgArray[2] = '8ball-images/cannotpredictball.png',
imgArray[3] = '8ball-images/concentrateball.png',
imgArray[4] = '8ball-images/dontcountball.png',
imgArray[5] = '8ball-images/itiscertainball.png',
imgArray[6] = '8ball-images/noball.png',
imgArray[7] = '8ball-images/verydoubtfulball.png',
imgArray[8] = '8ball-images/yesball.png';

// Event listener for the ask button. Includes an edge case for invalid questions & will show question + ball image.
askbtn.addEventListener('click',function(e) {
  e.preventDefault();
    if(!question.value || question.value.length < 5) {
      alert("Please provide a question.");
      return;
    } 
     askbtn.value = "ask again";
     showquestion.innerHTML = `YOUR QUESTION: ${question.value}`;
     showquestion.style.visibility = 'visible';
     displayImage();
     ball.animate(
      [
        {opacity: '0'},
        {transform: 'translateY(-10%)'},
        {transition: '1s ease'},
        {opacity: '1'}
   ], {
     duration: 1000,
     iterations: 1
   }  
   );
  });


// Event listener for ball; Will clear the inputs & revert ball image. Reload.
ball.addEventListener("click", clearInput);

// Function to get a random image then display.  
    function displayImage() {
        const randomNum = Math.floor(Math.random() * (imgArray.length));
        ball.src = imgArray[randomNum];
        ball.style.visibility = 'visible';
    }

  // Function to clear input on ball image click, revert image, then reload.
    function clearInput () {
      showquestion.style.visibility = 'hidden';
      question.value = "";
      askbtn.value = "ask...";
      ball.src = '8ball-images/masterball.png';

      setTimeout(() => {
        location.reload();
      }, "1200");
    
    }