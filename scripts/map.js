var text = document.getElementById('textArea');
var sumbit = document.getElementById('submitButtonArea');
var verBlks = 10;
var horBlks = 20;


var brk = {
  "canPass": false,
  "draw": 'brick',
  'canCheck': false
};

var rug = {
  "canPass": true,
  "draw": 'rug',
  'canCheck': true,
  'canTalk': false,
   check() {
    var thingie = 'No problems found here. While you are tempted, you refuse to sweep your problems under the rug.';
    text.innerHTML = thingie;
  }
};

var grs = {
  "canPass": true,
  "draw": 'grass',
  'canCheck': true,
  'canTalk': false,
  check() {
    var thingie = 'You could have sworn that the grass looked greener from further away. However, after closer analysis';
    thingie += ' the grass in the distance looks greener now.';
    text.innerHTML = thingie;
  }
};

var smp = {
  'canPass':true,
  'draw':'swamp',
  'canCheck': false,
  'canTalk': false
};

var snd = {
  'canPass':true,
  'draw':'sand',
  'canCheck': false,
  'canTalk': false
};

var pth = {
  'canPass':true,
  'draw':'path',
  'canCheck': false,
  'canTalk': false
};

var flr = {
  'canPass':true,
  'draw':'floor',
   'canTalk': false,
  'canCheck': false
};

var wtr = {
  'canPass':false,
  'draw':'water',
  'canTalk': false,
  'canCheck': false
};

var Frd = {
  'name': 'Fred Paz',
  'canPass': false,
  'draw': 'Fred',
  'canTalk': true,
  'canCheck': true,
  check() {
    var thingie = "Fred Paz, the village elder, looks worried.";
    text.innerHTML = thingie;
  },
  talk() {
    if (player.questLog.indexOf('Talked to Fred Paz.') === -1) {
    var thingie = "Fred Paz: Hello, " + player.name + ". It is time that I tell you a story of grave importance.";
    thingie += " Care to listen?";
    text.innerHTML = thingie;
    var buttons = '<button onclick="dialog(1)">Yes</button> <button onclick="dialog(2)">No</button>';
    sumbit.innerHTML = buttons;
    } else {
      dialog(7);
    }
  }
};
  

var map = [
 [wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
 [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
 [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
 [wtr,grs,brk,brk,brk,brk,brk,brk,grs,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,brk,brk,brk,brk,brk,brk,grs,grs,wtr],
 [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 [wtr,grs,brk,flr,Frd,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 [wtr,grs,brk,flr,flr,flr,flr,brk,grs,grs,grs,brk,rug,rug,rug,rug,brk,grs,grs,brk,flr,flr,flr,flr,brk,grs,grs,wtr],
 [wtr,grs,brk,brk,flr,brk,brk,brk,grs,grs,grs,brk,brk,brk,rug,brk,brk,grs,grs,brk,brk,brk,brk,flr,brk,grs,grs,wtr],
 [wtr,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,wtr],
 [wtr,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,grs,grs,grs,grs,grs,pth,grs,grs,grs,wtr],
 [wtr,grs,grs,grs,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,pth,grs,grs,grs,wtr],
 [wtr,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,pth,pth,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,grs,wtr],
 [wtr,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,wtr],
 [wtr,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,snd,wtr],
 [wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr],
 [wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr,wtr]
];

function drawMap() {
  let mapOutput = "";
  let mapX0 = player.mapX - player.x/20;
  let mapY0 = player.mapY - player.y/20;
  let yi = 1;
  let xi = 1;
  
  for(let y = 1; y <= verBlks; y++) {
    yi = y + mapY0;
    if (yi > -1 && yi < map.length) {
      for(let x = 1; x <= horBlks; x++) {
        xi = x + mapX0;
        if (xi > -1 && xi < map[yi].length) {
          if (xi = player.mapX && yi = player.mapY) {
                        mapOutput += '<img height=20 width=20 src="images/map/';
            mapOutput += 'player.png">';
          } else{
            mapOutput += '<img height=20 width=20 src="images/map/';
            mapOutput += map[yi][xi].draw + '.png">';
         }
        }
        mapOutput += "<br>";
      }
    }
   document.getElementById('mapArea').innerHTML = mapOutput;
  }
