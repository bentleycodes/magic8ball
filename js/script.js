
const [form] = document.forms;
const ask = form.askbtn;
const question = form.questionbox;
const answer = document.getElementById("answers");
const ball = document.getElementById("ball");



ask.addEventListener('click',function(e) {
    if(!question.value) {
      alert("Please provide a question.");
      e.preventDefault();
      return;
    }
    e.preventDefault();  
     ask.value = "ask again";
     document.getElementById('showquestion').innerHTML = `YOUR QUESTION: ${question.value}`;
     document.getElementById('showquestion').style.visibility = 'visible';
     displayImage();
    
  });

  ball.addEventListener("click", clearInput);

  function displayImage() {

    var imgArray = [];
    index = 0;
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

  
    function clearInput () {
      document.getElementById('showquestion').style.visibility = 'hidden';
      question.value = "";
      ask.value = "ask...";
      ball.src = "https://github.com/bentleycodes/magic8ball/blob/edits4/masterball.png?raw=true";
    
    }