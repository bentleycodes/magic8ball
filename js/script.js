// Event listener for the ask button. Includes an edge case for invalid questions & will show question + ball image.
askbtn.addEventListener('click',function(e) {
    if(!question.value || question.value.length < 5) {
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


// Event listener for ball; Will clear the inputs & revert ball image. Reload.
ball.addEventListener("click", clearInput);


// Function to get a random image then display. 
  function displayImage() {

    var imgArray = [];
    imgArray[0] = new Image();
    imgArray[0].src = '8ball-images/asiseeitball.png',
    imgArray[1] = new Image();
    imgArray[1].src = '8ball-images/askagainball.png',
    imgArray[2] = new Image();
    imgArray[2].src = '8ball-images/cannotpredictball.png',
    imgArray[3] = new Image();
    imgArray[3].src = '8ball-images/concentrateball.png',
    imgArray[4] = new Image();
    imgArray[4].src = '8ball-images/dontcountball.png',
    imgArray[5] = new Image();
    imgArray[5].src = '8ball-images/itiscertainball.png',
    imgArray[6] = new Image();
    imgArray[6].src = '8ball-images/noball.png',
    imgArray[7] = new Image();
    imgArray[7].src = '8ball-images/verydoubtfulball.png',
    imgArray[8] = new Image();
    imgArray[8].src = '8ball-images/yesball.png';
    
        const randomNum = Math.floor(Math.random() * (imgArray.length));
        const img = imgArray[randomNum].src;
        ball.src = img;
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
      }, "1100");
    
    }