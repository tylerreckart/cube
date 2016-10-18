/* jshint node: true, mocha:true */

var Scrambo = require('../lib/scrambo.js');
var assert = require('assert');

function arrays_equal(a, b) {
  return !(a < b || b < a);
}

describe('Scrambo', function(){
  var test;

  beforeEach(function(){
    test = new Scrambo();
  });

  describe('constructor', function(){
    it('default type should be 333', function(){
      assert.equal(test.type(), '333');
    });
    it('should display an error for an unsupported type', function(){
      var error = /invalid scrambler, allowed: /;
      assert.throws(function(){
        test.type('notarealtype');
      }, error);
    });
  });

  describe('default', function(){
    it('seed should return Math', function(){
      assert.equal(test.seed(), Math);
    });
    it('length should return 20', function(){
      assert.equal(test.length(), 20);
    });
  });

  describe('same scrambles', function(){
    it('should match 2x2', function(){
      var scrambles = [
        "R' U' R2 F U2 F' U' F' U F R U R' F2 R' U R' U F R",
        "F2 U R2 F' R' U2 F U R2 F2 R F U' F2 R2 U' F' R' F2 U",
        "F2 R' U' F2 U2 R U2 F' U' F2 U' R2 U' F' U F2 R F U R2",
        "R' U2 R' F' U' R2 F' U F2 U2 R2 F' U' F2 U R F2 R2 U2 F'",
        "F' R F2 R' U' R2 U F' R2 U2 R U F' U' F2 R F R2 U R'",
        "U' F U F R' U2 R2 F' R U' F2 R2 U F' U2 F' R U' R' U2",
        "F2 U2 R2 F2 R2 F' R U F2 R' U' R U' R2 U2 R U' R2 F2 U'",
        "R' F U2 R F' R' F R U F R' F R2 F2 R' U' F2 R' F2 U'",
        "F' R' U R2 U2 F' U F R2 F2 R U' F2 U2 F' U2 F U R' F'",
        "F' U2 R' U2 F U F' U' R F' R' F2 U' R F R2 U' R' F U2"
      ];
      var generated = test.seed(1).type('222').get(10);
      assert(arrays_equal(scrambles, generated));
    });
    it('should match 3x3', function(){
      var scrambles = [
        "L D L2 B' D2 F' U' B U F R D' L F2 R' D' R' D' F L'",
        "F2 U R2 F' L U2 B' D' R2 B2 L' B' U' B2 L2 D F' R' B2 U",
        "B2 R' D F2 U2 R U2 B U' B2 U' R2 U' B D' B2 R F U L2",
        "R' U2 L F' D R2 B U B2 D2 R2 B D F2 D' L' F2 R2 D2 B",
        "B R B2 R' U' L2 U B R2 U2 R D' B D B2 L' F R2 U R'",
        "U' F D' B' R' U2 L2 B L' U' B2 R2 D' F' U2 B R U' R' D2",
        "B2 U2 R2 F2 R2 B R D' B2 R' D L' D R2 U2 R D L2 F2 U'",
        "R' B' U2 L' F' R' B' L' D' B' R' B' R2 F2 R' U' F2 L F2 U'",
        "B L D' L2 D2 F' D' B' L2 F2 R D B2 D2 B U2 F U L B",
        "B U2 R' D2 F D' B D L' F' R' F2 D L' B' L2 U' L F U2"
      ];
      var generated = test.seed(1).type('333').get(10);
      assert(arrays_equal(scrambles, generated));
    });
    it('should match 4x4', function(){
      var scrambles = [
        "L D r2 f D2 F' u' B u F r D' L F2 R' D' r' D' F L'",
        "F2 u R2 F' L U2 B' u R2 B2 L' B' U' B2 L2 D f' r' f2 U",
        "f2 R' u' F2 U2 R u2 B U' f2 u' r2 u' B D' f2 r f U L2",
        "r' U2 L F' u' R2 f' U B2 D2 r2 B D F2 u L' F2 R2 D2 f'",
        "B r B2 R' u' L2 u f' R2 U2 R D' B D f2 L' F R2 U R'",
        "U' f D' B' r' U2 L2 B L' u' B2 R2 u F' u2 B R u' r' D2",
        "B2 U2 R2 F2 R2 B r D' B2 R' D L' D R2 U2 R D r2 F2 u'",
        "R' B' U2 L' F' R' f L' D' B' r' B' R2 f2 r' U' f2 r' f2 U'",
        "B L D' r2 D2 F' D' B' L2 F2 r D f2 D2 f' U2 F u r' B",
        "B u2 r' u2 F u B D L' F' r' F2 D L' B' L2 U' L f U2"
      ];
      var generated = test.seed(1).type('444').get(10);
      assert(arrays_equal(scrambles, generated));
    });
    it('should match 5x5', function(){
      var scrambles = [
        "l d l2 b' d2 f' u' B u f r D' l F2 R' D' r' D' F L'",
        "F2 u r2 F' L U2 b' d' R2 B2 L' B' U' B2 L2 D f' r' b2 U",
        "b2 R' d f2 U2 R u2 B U' b2 u' r2 u' B D' b2 r f U L2",
        "r' U2 L f' d R2 b U b2 D2 r2 B D F2 d' L' F2 R2 D2 b",
        "B r B2 R' u' l2 u b R2 U2 r D' B D b2 L' f R2 u R'",
        "U' f D' B' r' U2 L2 b L' u' B2 R2 d' F' u2 B r u' r' D2",
        "B2 u2 r2 f2 R2 B r D' B2 R' D L' D R2 u2 r D l2 F2 u'",
        "R' B' U2 L' f' R' b' L' D' B' r' B' r2 f2 r' U' f2 l f2 U'",
        "B L D' l2 D2 f' D' b' L2 F2 r d b2 D2 b U2 F u l B",
        "B u2 r' d2 f d' B D l' F' r' F2 D L' B' l2 u' L f u2"
      ];
      var generated = test.seed(1).type('555').get(10);
      assert(arrays_equal(scrambles, generated));
    });
    it('should match minx', function(){
      var scrambles = [
        "R-- D-- R-- D-- R-- D-- R-- D-- R++ D++ R-- D++ R++ D-- R++ D-- R-- D-- R++ U'",
        "R++ D-- R++ D++ R-- D-- R++ D-- R-- D-- R++ D++ R-- D-- R-- D++ R++ D-- R-- U'",
        "R++ D++ R++ D++ R++ D-- R-- D-- R++ D++ R-- D-- R++ D-- R-- D-- R++ D++ R++ U'",
        "R++ D++ R-- D-- R++ D-- R-- D-- R++ D-- R++ D-- R-- D++ R-- D-- R-- D++ R-- U'",
        "R++ D++ R-- D-- R-- D++ R++ D++ R++ D-- R++ D++ R++ D-- R++ D-- R++ D-- R++ U'",
        "R++ D-- R++ D-- R++ D++ R-- D-- R-- D-- R++ D++ R-- D++ R-- D-- R-- D++ R-- U'",
        "R++ D-- R++ D++ R-- D-- R-- D-- R++ D++ R++ D-- R++ D++ R++ D++ R-- D-- R-- U'",
        "R-- D++ R++ D-- R++ D-- R++ D-- R++ D-- R++ D-- R-- D++ R-- D-- R-- D-- R-- U'",
        "R-- D-- R-- D-- R-- D++ R++ D++ R++ D-- R++ D++ R-- D++ R-- D++ R-- D++ R++ U'",
        "R++ D-- R++ D++ R++ D-- R++ D++ R-- D++ R-- D-- R-- D-- R-- D++ R++ D-- R-- U'"
      ];
      var generated = test.seed(1).type('minx').length(20).get(10);
      assert(arrays_equal(scrambles, generated));
    });
    it('should match pyram', function(){
      var scrambles = [
        "L R' L' U R' B L' l r' b u ",
        "L U' B R U R' L' r b u ",
        "R L R B' U L' U r b ",
        "U' L' U B' R' B U' l b' u' ",
        "L U' R B L' B' U' R u' ",
        "R L' R U B U L' l' r' b' u ",
        "L' R U L' U' R B l u' ",
        "B' U' B' R' U' B R L l' r ",
        "R' U' L' R L' U L l r b u ",
        "B' R' U B' R U' L' U' l' r' b ",
        "L U' L U B R B' R l r' b ",
        "U R' U' B' R U L' l' b u ",
        "U B L' R' B' R' U' R' l' b' u' ",
        "U' B U L R' U' B U' l' r' ",
        "U B' R' U' L B U' l' r' b' u ",
        "L' U' L' R U' L' B R' l' r' b u' ",
        "U L U B' R' U L' R' B' r b' ",
        "U L' R' U' R B U' R' l r' b u' ",
        "R' U' B' U' R' U L' U l b' u ",
        "U' L B' U L' B R B' R' l r b' ",
      ];
      var generated = test.seed(1).type('pyram').get(20);
      assert(arrays_equal(scrambles, generated));
    });
    it('should match sq1', function(){
      var scrambles = [
        "(0, -1) / (3, 3) / (3, 0) / (1, -5) / (-1, -1) / (0, -3) / (0, -5) / (3, 0) / (1, -4) / (4, 0) / (-3, 0) / (2, 0) / (-3, 0)",
        "(0, -1) / (0, 3) / (3, 0) / (-5, -5) / (0, -3) / (3, 0) / (0, -1) / (-3, 0) / (-1, -3) / (0, -2) / (2, -3) / (-2, -1) / (2, 0) / ",
        "(0, -1) / (-2, 4) / (-3, 0) / (2, -1) / (6, -3) / (1, 0) / (0, -3) / (-1, 0) / (0, -4) / (-5, 0) / (1, 0) / (-1, -4) / (0, -2)",
        "(-5, 0) / (5, 2) / (-3, -3) / (4, -5) / (2, -4) / (1, 0) / (-3, 0) / (-1, 0) / (-2, 0) / (0, -2) / (2, -5) / (-5, 0) / (6, 0)",
        "(0, 2) / (-5, -5) / (5, -1) / (0, -3) / (-5, -3) / (-3, 0) / (-1, 0) / (0, -2) / (2, -3) / (2, -1) / (-2, -2) / (0, -3) / ",
        "(-5, -3) / (0, -3) / (3, 0) / (-4, -1) / (3, 0) / (6, -3) / (1, 0) / (-3, -3) / (-5, 0) / (-2, 0) / (2, -4) / (2, -2) / ",
        "(-5, 3) / (5, -1) / (-3, 0) / (6, -3) / (1, 0) / (0, -3) / (0, -3) / (-3, 0) / (-1, 0) / (2, 0) / (4, 0) / (2, 0) / (-2, 0)",
        "(0, -1) / (0, -3) / (-3, 0) / (3, 0) / (-2, -5) / (-3, -1) / (3, 0) / (6, -5) / (5, 0) / (4, -2) / (-1, 0) / (6, -4)",
        "(-5, 0) / (5, -4) / (4, -2) / (3, 0) / (-3, 0) / (-1, -4) / (0, -2) / (3, 0) / (-3, -4) / (-5, 0) / (-3, -4)",
        "(-2, 0) / (0, 3) / (-1, -1) / (0, -3) / (1, -5) / (6, -3) / (0, -4) / (0, -3) / (3, 0) / (0, -4) / (0, -2) / (0, -4) / "
      ];
      var generated = test.seed(1).type('sq1').get(10);
      assert(arrays_equal(scrambles, generated));
    });
  });

  describe('type', function(){
    it('should be set to 333', function(){
      test.type('333');
      assert.equal(test.type(), '333');
    });
    it('should be set to 444', function(){
      test.type('444');
      assert.equal(test.type(), '444');
    });
    it('should be set to 555', function(){
      test.type('555');
      assert.equal(test.type(), '555');
    });
  });

  describe('chaining', function(){
    it('should chain a seed followed by a get', function(){
      test = new Scrambo().seed(10).get(2);
    });
    it('should chain a type set followed by a get', function(){
      test = new Scrambo().type('444').get(2);
    });
    it('should chain a seed followed by a type set followed by a get', function(){
      test = new Scrambo().seed(1).type('444').get();
    });
    it('should chain a type set followed by a seed set followed by a get', function(){
      test = new Scrambo().type('444').seed(1).get(1);
    });
  });

  describe('seeded scrambles', function(){
    it('should return the same each time', function(){
      var seeded_scramble = test.seed(1).get();
      for (var i = 1; i <= 100; i++) {
        assert(arrays_equal(seeded_scramble, test.seed(1).get()));
      }
    });
    it('complex should return the same each time', function(){
      var seeded_scramble = test.seed(50).type('444').get();
      for (var i = 1; i <= 100; i++) {
        assert(arrays_equal(seeded_scramble, test.seed(50).type('444').get()));
      }
    });
  });

  describe('minx', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('minx');
      test.get();
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('minx');
      test.get();
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('minx').get();
    });
  });

  describe('pyram', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('pyram');
      test.get();
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('pyram');
      test.get();
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('pyram').get();
    });
  });

  describe('clock', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('clock');
      test.get();
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('clock');
      test.get();
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('clock').get();
    });
  });

  describe('sq1', function(){
    it('should initalize from constructor', function(){
      var test = new Scrambo('sq1');
      test.get();
    });
    it('should initalize from constructor with chained type set', function(){
      var test = new Scrambo().type('sq1');
      test.get();
    });
    it('should initalize from constructor with chained type set and chained get', function(){
      var test = new Scrambo().type('sq1').get();
    });
  });

  describe('scramble length', function(){
    it('should equal 20', function(){
      test = test.get();
      assert.equal(test.join().split(' ').length, 20);
    });
    it('should equal 5', function(){
      test = test.length(5).get();
      assert.equal(test.join().split(' ').length, 5);
    });
    it('should equal 1', function(){
      test = test.length(1).get();
      assert.equal(test.join().split(' ').length, 1);
    });
    it('should equal 10', function(){
      test = test.length(10).get();
      assert.equal(test.join().split(' ').length, 10);
    });
  });

  describe('555', function(){
    it('scramble should equal 20', function(){
      test = test.type('555').get();
      assert.equal(test.join().split(' ').length, 20);
    });
    it('scramble should equal 5', function(){
      test = test.length(5).type('555').get();
      assert.equal(test.join().split(' ').length, 5);
    });
    it('scramble should equal 1', function(){
      test = test.length(1).type('555').get();
      assert.equal(test.join().split(' ').length, 1);
    });
    it('scramble should equal 10', function(){
      test = test.length(10).type('555').get();
      assert.equal(test.join().split(' ').length, 10);
    });
  });

});
