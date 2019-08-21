var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');

function up() {
   if (map[(player.mapY-1).toString()][player.mapX].canPass){
     player.facing = 'North';
     
     text.innerHTML = 'facing '+player.facing;
     if (map[(player.mapY-1).toString()][player.mapX] == grs){
      text.innerHTML = 'Stay off the grass';
      }
     player.mapY--;
     drawMap();
   } else {
     text.innerHTML = 'Find another route.';
   }

}

function down() {
   if (map[(player.mapY+1).toString()][player.mapX].canPass){

     player.facing = 'South';
     text.innerHTML = 'facing '+player.facing;
     if (map[(player.mapY+1).toString()][player.mapX] == grs){
        text.innerHTML =  'Stay off the grass';
      }
     player.mapY++;
     drawMap();

   } else {
     text.innerHTML = 'Find another route.';
   }

}

function left() {
   if (map[player.mapY.toString()][player.mapX-1].canPass){
     player.facing = 'West';    
     text.innerHTML = 'facing '+player.facing;
     if (map[player.mapY.toString()][player.mapX-1] == grs){
        text.innerHTML =  'Stay off the grass';
     }
     player.mapX--;
     drawMap();
      
   } else {
     text.innerHTML = 'Find another route.';
   }

}

function right() {
   if (map[player.mapY.toString()][player.mapX+1].canPass){
     player.facing = 'East';
     text.innerHTML = 'facing '+player.facing;
     if (map[player.mapY.toString()][player.mapX+1] == grs){
       text.innerHTML =  'Stay off the grass';
     }
     player.mapX++;
     drawMap();
   } else {     
     text.innerHTML = 'Find another route.';
   }

}

function arrows() {
   thingie = '<table><tr><td>';
   // row 1
   thingie += '<table><tr><td></td><td> <button onclick="up()"> ⇑ </button></td><td></td>';
   thingie += '<td><button onclick="talk()">talk</button></td>';
   thingie += '<td><button onclick="items()">items</button></td></tr>';
   // row 2
   thingie += '<tr><td><button onclick="left()">⇐</button></td>';
   thingie += '<td><button onclick="down()"> ⇓ </button></td>';
   thingie += '<td><button onclick="right()">⇒</button></td>';
   thingie += '<td><button onclick="check()">check</button></td>';
   thingie += '<td><button onclick="stats()">status</button></td>';
   thingie += '</tr></table>';  

   sumbit.innerHTML = thingie;
      drawMap();
}

function start() {
  text.innerHTML = 'In the year 202X ...';
  arrows();
      drawMap();
}

function check() {
  var thingie = '';
  if (map[player.mapY.toString()][player.mapX].canCheck) {
    map[player.mapY.toString()][player.mapX].check();
    return 0;
  } else {
      switch(player.facing) {
        case 'North':
            if (map[(player.mapY-1).toString()][player.mapX].canCheck) {
               map[(player.mapY-1).toString()][player.mapX].check();
               return 0;
            } 
        
        case 'South':
            if (map[(player.mapY+1).toString()][player.mapX].canCheck) {
               map[(player.mapY+1).toString()][player.mapX].check();
               return 0;
            } 

        case 'West':
            if (map[(player.mapY).toString()][player.mapX-1].canCheck) {
               map[(player.mapY).toString()][player.mapX-1].check();
               return 0;
            } 
        case 'East':
            if (map[player.mapY.toString()][player.mapX+1].canCheck) {
               map[player.mapY.toString()][player.mapX+1].check();
               return 0;
            } 
        default:
          thingie = 'You explore the area under your feet and to the ' + player.facing;
          thingie += ', but do not find anything of interest. You note these findings in your journal ';
          thingie += ' and press on.';
          text.innerHTML = thingie;
       }
    }
  }

function talk() {
  var thingie = '';
  if (map[player.mapY.toString()][player.mapX].canTalk) {
    map[player.mapY.toString()][player.mapX].talk();
    return 0;
  } else {
      switch(player.facing) {
        case 'North':
            if (map[(player.mapY-1).toString()][player.mapX].canTalk) {
               map[(player.mapY-1).toString()][player.mapX].talk();
               return 0;
            } 
        
        case 'South':
            if (map[(player.mapY+1).toString()][player.mapX].canTalk) {
               map[(player.mapY+1).toString()][player.mapX].talk();
               return 0;
            } 

        case 'West':
            if (map[player.mapY.toString()][player.mapX-1].canTalk) {
               map[player.mapY.toString()][player.mapX-1].talk();
               return 0;
            } 
        case 'East':
            if (map[player.mapY.toString()][player.mapX+1].canTalk) {
               map[player.mapY.toString()][player.mapX+1].talk();
               return 0;
            } 
        default:
          thingie = 'Talking things out can help you work a problem out.';
          text.innerHTML = thingie;
       }
    }
  }

function items() {
  var thingie = '';
  for (i = 0; i < player.items.length; i++) {
    thingie += '<button onclick="item(' + i + ')">' + player.items[i].item + ': ' + player.items[i].n + '</button> ';
  }
    thingie += '<button onclick="arrows()">Back</button>';
  sumbit.innerHTML = thingie;
}

function item(i) {
  var thingie = player.items[i].item + ': ' + player.items[i].n + '<br>';
  thingie += player.items[i].desc;
  text.innerHTML = thingie;
  thingie = '<table><tr><td><button onclick="player.items[' + i + '].use()">Use</button></td>';
  thingie += '<td><button onclick="arrows()">Back</button></td></tr></table>';
  sumbit.innerHTML = thingie;
}

function stats() {
  // line1
  var thingie = '<table><tr>';
   thingie += '<td> Attack: </td><td>' + player.atk + '&nbsp;&nbsp;</td>';
   thingie += '<td>&nbsp;&nbsp;&nbsp;&nbsp;Head: </td><td>' + player.head.item + '&nbsp;&nbsp;</td>';
   thingie += '<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Body: </td><td> '+ player.torso.item + '</td>';
  thingie += '</tr>';
  // line 2
  thingie += '<tr>';
   thingie += '<td> Defense: </td><td>' + player.def  + '&nbsp;&nbsp;</td>';
   thingie += '<td>LeftHand: </td><td> ' + player.leftHand.item + ' &nbsp;&nbsp;</td>';
   thingie += '<td>RightHand: </td><td>' + player.rightHand.item + '</td>';
  thingie += '</tr>';
  // line 3
  thingie += '<tr>';
   thingie += '<td> Evasion: </td><td>' + player.eva  + ' &nbsp;&nbsp;</td>';
   thingie += '<td>&nbsp;&nbsp;&nbsp;&nbsp;Legs: </td><td> ' + player.legs.item + '&nbsp;&nbsp;</td>';
   thingie += '<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feet: </td><td> ' + player.feet.item + ' </td>';
  thingie += '</tr></table>';
  text.innerHTML = thingie;
}



