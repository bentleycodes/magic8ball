// Event listener for the ask button. Includes an edge case for invalid questions & will show question + ball image.
askbtn.addEventListener('click',function(e) {
    if(!question.value || question.value.length < 4) {
      alert("Please provide a question.");
      e.preventDefault();
      return;
    }
    e.preventDefault();  
     askbtn.value = "ask again";
     showquestion.innerHTML = `YOUR QUESTION: ${question.value}`;
     showquestion.style.visibility = 'visible';
     displayImage();
     ball.animate(
      [
        {transform: 'translateY(-10%)'},
        {transition: '1s ease'}
   ], {
     duration: 500,
     iterations: 1
   }  
   );
  });


// Event listener for ball; Will clear the inputs & revert ball image. Hides ball after 9 seconds.
ball.addEventListener("click", clearInput);


// Function to get a random image then display. 
  function displayImage() {

    var imgArray = [];
    imgArray[0] = new Image();
    imgArray[0].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/asiseeitball.png?raw=true',
    imgArray[1] = new Image();
    imgArray[1].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/askagainball.png?raw=true',
    imgArray[2] = new Image();
    imgArray[2].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/cannotpredictball.png?raw=true',
    imgArray[3] = new Image();
    imgArray[3].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/concentrateball.png?raw=true',
    imgArray[4] = new Image();
    imgArray[4].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/dontcountball.png?raw=true',
    imgArray[5] = new Image();
    imgArray[5].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/itiscertainball.png?raw=true',
    imgArray[6] = new Image();
    imgArray[6].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/noball.png?raw=true',
    imgArray[7] = new Image();
    imgArray[7].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/verydoubtfulball.png?raw=true',
    imgArray[8] = new Image();
    imgArray[8].src = 'https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/yesball.png?raw=true';
    
        const randomNum = Math.floor(Math.random() * (imgArray.length));
        const img = imgArray[randomNum].src;
        ball.src = img;
        ball.style.visibility = 'visible';
    }

  // Function to clear input on ball image click, revert image, then hide after 9 seconds.
    function clearInput () {
      showquestion.style.visibility = 'hidden';
      question.value = "";
      askbtn.value = "ask...";
      ball.src = "https://github.com/bentleycodes/magic8ball/blob/main/8ball-images/masterball.png?raw=true";

      setTimeout(() => {
        ball.style.visibility = 'hidden';
      }, "7000");
    
    }
