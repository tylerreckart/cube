/* jshint node: true */

var sequenceLength = 0;
var scrambler = function (size) {
  var sequence = [];
  var randomSource;

  function appendmoves(sequence, axsl, tl, la) {
    for (var sl = 0; sl < tl; sl++) {
      if (axsl[sl]) {
        var q = axsl[sl] - 1;
        var sa = la;
        var m = sl;
        if (sl + sl + 1 >= tl) {
          sa += 3;
          m = tl - 1 - m;
          q = 2 - q;
        }
        sequence[sequence.length] = (m * 6 + sa) * 4 + q;
      }
    }
  }

  function scramble() {
    var tl = size - 1;
    var axsl = [tl];
    var axam = [0,0,0];
    var la;
    var n = 0;
    la = -1;
    sequence[0] = [];
    for (var i = 0; i < tl; i++)
      axsl[i] = 0;
    axam[0] = axam[1] = axam[2] = 0;
    var moved = 0;
    while (sequence[0].length + moved < sequenceLength) {
      var ax, sl, q;
      do {
        do {
          ax = Math.floor(randomSource.random() * 3);
          sl = Math.floor(randomSource.random() * tl);
          q = Math.floor(randomSource.random() * 3);
        } while (ax === la && axsl[sl] !== 0);
      } while (ax === la);
      if (ax != la) {
        appendmoves(sequence[0], axsl, tl, la);
        for (i = 0; i < tl; i++)
          axsl[i] = 0;
        axam[0] = axam[1] = axam[2] = 0;
        moved = 0;
        la = ax;
      }
      axam[q]++;
      moved++;
      axsl[sl] = q + 1;
    }
    appendmoves(sequence[0], axsl, tl, la);
    sequence[0][sequence[0].length] = 0;
  }

  function scramblestring() {
    var scramble = '',
      j;
    for (var i = 0; i < sequence[0].length - 1; i++) {
      if (i !== 0)
        scramble += ' ';
      var k = sequence[0][i] >> 2;
      j = k % 6;
      k = (k - j) / 6;
      if (k) {
        scramble += 'dlburf'.charAt(j);
      } else {
        scramble += 'DLBURF'.charAt(j);
      }
      j = sequence[0][i] & 3;
      if (j !== 0)
        scramble += ' 2\''.charAt(j);
    }
    return scramble;
  }
  var setRandomSource = function (src) {
    randomSource = src;
  };
  var getRandomScramble = function () {
    scramble();
    return scramblestring(0);
  };
  var setScrambleLength = function (length) {
    sequenceLength = length;
  };
  return {
    initialize: setRandomSource,
    getRandomScramble: getRandomScramble,
    setScrambleLength: setScrambleLength
  };
};
module.exports['222'] = scrambler(2);
module.exports['333'] = scrambler(3);
module.exports['444'] = scrambler(4);
module.exports['555'] = scrambler(5);
module.exports['666'] = scrambler(6);
module.exports['777'] = scrambler(7);
