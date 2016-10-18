/* jshint node: true */

var util = require('./util.js');

var scramblers = {};
scramblers = require('./scramblers/NNN.js');
scramblers.clock = require('./scramblers/clock.js');
scramblers.minx = require('./scramblers/minx.js');
scramblers.pyram = require('./scramblers/pyram.js');
scramblers.sq1 = require('./scramblers/sq1.js');
scramblers.skewb = require('./scramblers/skewb.js');

/**
 * A scramble generator
 * @constructor
 */
function Scrambo() {

	this.t = '333';
	this.l = 20;
	this.s = Math;

	this.length(this.l);

	this.type(this.t);

	return this;
}

/**
 * Gets/Sets scramble type
 * @param {string} type scramble type
 * @returns {string} set type
 */
Scrambo.prototype.type = function(type) {
	if (!arguments.length) return this.t;

	this.t = type;

	this.init();

	return this;
};

/**
 * Return a scramble
 * @param {number} num number of scrambles
 * @returns {string} generated scramble
 */
Scrambo.prototype.get = function(num) {
  num = num || 1;

	var stack = [];
	for(var i = 0; i < num; i++) {
		stack.push(scramblers[this.t].getRandomScramble());
	}

	return stack;
};

/**
 * Sets the seed
 * @param {num|Math} random source
 */
Scrambo.prototype.seed = function(seed) {
	if (!arguments.length) return this.s;

	// Force to string so we get consistent seeds.
	seed = seed + '';
	// Hash the string into a number.
	seed = util.hashCode(seed);
	// http://stackoverflow.com/a/19303725
	this.s = {
		random: function() {
			var x = Math.sin(seed++) * 10000;
    		return x - Math.floor(x);
		}
	};

	this.init();

	return this;
};

/**
 * Gets/Sets the scramble length
 * @param {num|Math} random source
 */
Scrambo.prototype.length = function(length) {
	if (!arguments.length) return this.l;

	this.l = length;

	scramblers[this.t].setScrambleLength(this.l);

	return this;
};

/**
 * Initializes the scrambler
 */
Scrambo.prototype.init = function() {

	// Check the scrambler exists.
	if(!scramblers.hasOwnProperty(this.t)){
		throw new Error('invalid scrambler, allowed: ' + Object.keys(scramblers));
	}

	scramblers[this.t].initialize(this.s);
};

module.exports = Scrambo;