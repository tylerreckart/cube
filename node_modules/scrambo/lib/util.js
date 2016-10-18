/* jshint node: true */

// http://stackoverflow.com/a/7616484
// Allows string seeds yay!
module.exports.hashCode = function(str) {
  var hash = 0, i, chr, len;
    /* istanbul ignore if */
  if (str.length === 0) return hash;
  for (i = 0, len = str.length; i < len; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
