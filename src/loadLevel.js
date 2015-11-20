var levels = require('./levels.js');
var elementPrinter = require('./board.js').elementPrinter;

function loadLevel (index) {
  var str = levels[index];
  str = str.split('\n');

  var boardStart = false;
  var board = [];
  var r = 0;
  var finalStr = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '') boardStart = true;
    var j = 0;
    if (boardStart) {
      var temp = [];
      for (j = 0; j < str[i].length; j++) {
        if (str[i][j] === ';' || str[i][j] === ',') break;
        temp.push(str[i][j]);
        var result = elementPrinter(str[i][j]);
        finalStr += '<span class="' + result.className + '" id="' +
                      r + ',' + j + '">' + result.element + '</span>';
      }
      r++;
      board.push(temp);
    }
    finalStr += '<span class = \"text ';
    if (str[i][j] === ';') finalStr += 'bold';
    finalStr += '\">';
    finalStr += str[i].substr(j + 1).replace(/\ /g, '&nbsp;');
    finalStr += '</span><br />';
  }

  document.getElementById('game-container').innerHTML = finalStr;
  return board;
}

module.exports = loadLevel;
