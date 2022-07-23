const images = ["asiseeitball.png", "askagainball.png", "cannotpredictball.png", "concentrateball.png", "dontcountball.png", "itiscertainball.png", "noball.png", "verydoubtfull.png", "yesball.png"];

const imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/asiseeitball.png';

imgArray[1] = new Image();
imgArray[1].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/askagainball.png';

imgArray[2] = new Image();
imgArray[3].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/cannotpredictball.png';

imgArray[4] = new Image();
imgArray[4].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/concentrateball.png';

imgArray[5] = new Image();
imgArray[5].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/dontcountball.png';

imgArray[6] = new Image();
imgArray[6].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/itiscertainball.png';

imgArray[7] = new Image();
imgArray[7].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/noball.png';

imgArray[8] = new Image();
imgArray[8].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/verydoubtfulball.png';

imgArray[9] = new Image();
imgArray[9].src = 'https://github.com/bentleycodes/magic8ball/blob/undefined/8ball-images/yesball.png';


const [form] = document.forms;
const ask = form.askbtn;
const question = form.questionbox;
const showquestion = form.showquestion;
const answer = document.getElementById("answers");

ask.addEventListener('click', function(e) {
  if(!question.value) {
    form.askbtn.disabled = true;
    return;
  }
   displayImage()
   document.getElementById('showquestion').innerHTML = `YOUR QUESTION: ${question.value}`;
   document.getElementById('showquestion').style.visibility = 'visible';
   e.preventDefault();
   
  
});
          
ask.addEventListener('click', displayImage);


function clearInput() {
  question.value = "";
}

function displayImage() {
    const randomNum = Math.floor(Math.random() * (imgArray.length));
    const img = imgArray[randomNum]
    answer.style.backgroundImage = img;
    answer.style.visibility = 'visible';
}

