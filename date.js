let clickCount = 0;


function buttonClick(){

  // THE GIF CHANGING and TEXT CHANGING

  clickCount++;

  if(clickCount === 5){
    const gifImage = document.getElementById('gif-img');

    gifImage.src = 'pleasing-cat.gif'

    document.getElementById('heading').innerHTML = 'ICE CREAM LANG :3';
  }


  // MOVE BUTTON RANDOMLY

  var buttonElement = document.querySelector('.button-no');

  var x = Math.floor(Math.random() * (window.innerWidth - buttonElement.clientWidth));
  var y = Math.floor(Math.random() * (window.innerHeight - buttonElement.clientHeight));

  buttonElement.style.left = x + 'px';
  buttonElement.style.top = y + 'px';
}

function buttonYes(){
  const gifImage = document.getElementById('gif-img');

  gifImage.src = 'happy-cat.gif'

  document.getElementById('heading').innerHTML = 'YAAAAAAAY!';
}