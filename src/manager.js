var Mousetrap = require('mousetrap');
var board = require('./board.js');
var loadLevel = require('./loadLevel.js');
var levelNames = require('./levelNames.js');

var currentLevel = 0;
var gameShown = true;

Mousetrap.bind([UP, LEFT, DOWN, RIGHT, CHANGE, UNDO], function (e, combo) {
  if (gameShown) {
    e.preventDefault();
    if (board.move(combo)) board.update();
    if (board.hasWon()) {
      currentLevel++;
      board.init(loadLevel(currentLevel));
    }
  }
});

board.init(loadLevel(0));

window.toLevel = function (index) {
  currentLevel = index;
  board.init(loadLevel(index));
  toggleMenu();
};

for (var i = 0; i < levelNames.length; i++) {
  document.getElementById('levels-container').innerHTML +=
        '<button onclick="toLevel(' + i + ')">' + levelNames[i] + '</button>';
}

function toggleMenu () {
  if (gameShown) {
    document.getElementById('levels-button').innerHTML = 'Close Menu';
    document.getElementById('levels-container').style.display = 'block';
    document.getElementById('game-container').style.display = 'none';
  } else {
    document.getElementById('levels-button').innerHTML = 'Menu';
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('levels-container').style.display = 'none';
  }
  gameShown = !gameShown;
}

document.getElementById('levels-button').onclick = toggleMenu;
document.getElementById('controls-button').onclick = function () {
  alert('Arrow Keys - Movement\nu - Undo\nTab - Switch Player');
};
