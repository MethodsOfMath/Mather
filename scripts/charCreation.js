var player = {
    "name": "Ness",
    "face": 0,
    "skin": [217, 183, 31],
    "hair": 0,
    "hairColor": [0, 0, 0],
    "tshirt": 'e',
    "tColor": [255, 0, 0]
 };

 
 var text = document.getElementById('textArea');
 var playArea = document.getElementById('playArea'); 
 var sumbit = document.getElementById('submitButtonArea');
var textInput = document.getElementById('textInput');

function pickFace() {
  text.innerHTML = 'Pick a face shape:';
  var thingie = '<button onclick="setFaceShape(0)">0</button> <button onclick="setFaceShape(1)">O</button>';
  playArea.innerHTML = thingie;
}

function enterName() {
  text.innerHTML = 'Enter name:';
  var thingie = '<button onclick="submitName">submit</button>';
  playArea.innerHTML = '';
 sumbit.innerHTML = thingie;
}

function submitName() {
     player.name = textInput.value;
     document.getElementById('name').innnerHTML = player.name;
     sumbit.innerHTML = '';
     pickFace();
}

function pickSkin() {
     text.innerHTML = 'Pick skin tone:';
     var thingie = '<button class="skin0" onclick="setSkinTone(0)">_</button> ';
     thingie += '<button class="skin1" onclick="setSkinTone(1)">_</button> ';
     thingie += '<button class="skin2" onclick="setSkinTone(2)">_</button> ';
     thingie += '<button class="skin3" onclick="setSkinTone(3)">_</button> ';
     thingie += '<button class="skin4" onclick="setSkinTone(4)">_</button> ';
     playArea.innerHTML = thingie;
}


function pickShirtColor() {
     text.innerHTML = 'Pick shirt color:';
     var thingie = '<button class="shirt0" onclick="setShirtColor(0)">_</button> ';
     thingie += '<button class="shirt1" onclick="setShirtColor(1)">_</button> ';
     thingie += '<button class="shirt2" onclick="setShirtColor(2)">_</button> ';
     playArea.innerHTML = thingie;
}

function setShirtColor(o) {
  switch(o) {
  case 0:
    player.tColor = [255,0,0];
    break;
  case 1:
    player.tColor = [0,255,0];
    break;
  case 2:
    player.tColor = [0,0,255];
    break;
  }
}


function pickShirt() {
     text.innerHTML = 'Pick tshirt logo:';
     var thingie = '<button onclick="setTshirt(2.7)">e</button> ';
     thingie += '<button onclick="setTshirt(3.14)">π</button> ';
     thingie += '<button onclick="setTshirt(6.2)">τ</button> ';
     thingie += '<button onclick="setTshirt(0)">ϕ</button> ';
     thingie += '<button onclick="setTshirt(1)">μ</button> ';
     thingie += '<button onclick="setTshirt(2)">λ</button> ';    
     playArea.innerHTML = thingie;
}

function setTshirt(o) {
  switch(o) {
   case 3.14:
     player.tshirt = 'π';
     break;
   case 2.7:
     player.tshirt = 'e';
     break;
   case 6.2:
     player.tshirt = 'τ';
     break;
   case 0:
     player.tshirt = 'ϕ';
     break;
   case 1:
     player.tshirt = 'μ';
     break;
   case 1:
     player.tshirt = 'λ';
     break;
  }
  pickShirtColor();
}

function setFaceShape(o) {
  player.face = o;
  pickSkin();
}

function setSkinTone(o) {
  switch(o) {
  case 0:
    player.skin = [255,220,177];
    break;
  case 1:
    player.skin = [229,194,152];
    break;
  case 2:
    player.skin = [228,185,142];
    break;
  case 3:
    player.skin = [226,185,143];
    break;
  case 4:
    player.skin = [227,161,115];
    break;
  }
  pickShirt();
}



enterName();
