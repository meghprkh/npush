require('./constants.js');

var board = [], oldboard = [];
var history = [];

var width, height;
var players = [], oldcuri = -1, curi = 0, goldLeft = 0;
var won = false;

function copy () {
  oldboard = [];
  for (var r = 0; r < height; r++) {
    oldboard.push([]);
    for (var c = 0; c < board[r].length; c++) {
      oldboard[r][c] = board[r][c];
    }
  }
}

function init (str) {
  width = 0;
  won = false;
  players = [];
  oldcuri = -1;
  curi = 0;
  goldLeft = 0;
  board = [];
  oldboard = [];
  history = [];
  height = str.length;
  for (var i = 0; i < height; i++) {
    width = width > str[i].length ? width : str[i].length;
    for (var j = 0; j < str[i].length; j++) {
      if (str[i][j] === PLAYER) players.push([i, j]);
      else if (str[i][j] === GOLD) goldLeft++;
    }
  }
  board = str;
  copy();
  update();
}

function move (key) {
  copy();
  oldcuri = curi;
  if (key === UNDO) {
    if (history.length === 0) return false;
    var todo = history.pop();
    if (todo.key === CHANGE) {
      curi = todo.curi;
      return true;
    }
    players[todo.curi] = [todo.curr, todo.curc];
    board[todo.curr][todo.curc] = PLAYER;
    board[todo.adjr][todo.adjc] = todo.adj;
    board[todo.nextToAdjr][todo.nextToAdjc] = todo.nextToAdj;

    return true;
  }
  if (key === CHANGE) {
    history.push({
      key: key,
      curi: curi
    });
    curi++;
    curi %= players.length;
    return true;
  }
  var curr = players[curi][0], curc = players[curi][1];
  var adj, nextToAdj, adjr, adjc, nextToAdjr, nextToAdjc;
  if (key === UP) {
    adjr = curr - 1;
    adjc = curc;
    nextToAdjr = curr - 2;
    nextToAdjc = curc;
  } else if (key === LEFT) {
    adjr = curr;
    adjc = curc - 1;
    nextToAdjr = curr;
    nextToAdjc = curc - 2;
  } else if (key === DOWN) {
    adjr = curr + 1;
    adjc = curc;
    nextToAdjr = curr + 2;
    nextToAdjc = curc;
  } else if (key === RIGHT) {
    adjr = curr;
    adjc = curc + 1;
    nextToAdjr = curr;
    nextToAdjc = curc + 2;
  }
  adj = board[adjr][adjc];
  nextToAdj = board[nextToAdjr][nextToAdjc];
  if (adj === WALL || adj === PLAYER) return false;
  else if (adj === STONE) {
    if (nextToAdj === EMPTY) board[nextToAdjr][nextToAdjc] = STONE;
    else if (nextToAdj === DYNAMITE) board[nextToAdjr][nextToAdjc] = EMPTY;
    else return false;
  } else if (adj === GOLD) goldLeft--;
  else if (adj === DYNAMITE) {
    if (nextToAdj === EMPTY) {
      board[nextToAdjr][nextToAdjc] = DYNAMITE;
    } else if (nextToAdj === STONE || nextToAdj === DYNAMITE) {
      board[nextToAdjr][nextToAdjc] = EMPTY;
    } else return false;
  } else if (adj === EXIT && goldLeft > 0) return false;
  else if (adj === EXIT) {
    won = true;
    return true;
  }
  board[curr][curc] = EMPTY;
  board[adjr][adjc] = PLAYER;
  players[curi] = [adjr, adjc];
  history.push({
    key: key,
    curi: curi,
    curr: curr,
    curc: curc,
    adjr: adjr,
    adjc: adjc,
    nextToAdjr: nextToAdjr,
    nextToAdjc: nextToAdjc,
    adj: adj,
    nextToAdj: nextToAdj
  });
  return true;
}

function elementPrinter (element) {
  var className;
  switch (element) {
    case PLAYER:
      className = 'player';
      break;
    case GOLD:
      className = 'gold';
      break;
    case DYNAMITE:
      className = 'dynamite';
      break;
    case STONE:
      className = 'stone';
      break;
    case WALL:
      className = 'wall';
      break;
    case EXIT:
      className = 'exit';
      break;
    case EMPTY:
      className = 'empty';
      element = '&nbsp;';
      break;
  }
  return {
    className: className,
    element: element
  };
}

function update () {
  if (curi !== oldcuri) {
    if (oldcuri !== -1) {
      document.getElementById(players[oldcuri][0] + ',' + players[oldcuri][1])
              .className = 'player';
    }
    document.getElementById(players[curi][0] + ',' + players[curi][1])
            .className = 'active-player';
    return;
  }
  for (var r = 0; r < height; r++) {
    for (var c = 0; c < width; c++) {
      if (board[r][c] !== oldboard[r][c]) {
        var x = elementPrinter(board[r][c]);
        if (r === players[curi][0] && c === players[curi][1]) x.className = 'active-player';
        var theCell = document.getElementById(r + ',' + c);
        theCell.className = x.className;
        theCell.innerHTML = x.element;
      }
    }
  }
}

// function print () {
//   var str = '';
//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length; j++) {
//       if (i === players[curi][0] && j === players[curi][1]) {
//         str += '<span class="active-player">' + PLAYER + '</span>';
//       } else str += elementPrinter(board[i][j]);
//     }
//     str += '<br />';
//   }
//   return str;
// }

function hasWon () {
  return won;
}

module.exports = {
  init: init,
  move: move,
  update: update,
  hasWon: hasWon,
  elementPrinter: elementPrinter
};
