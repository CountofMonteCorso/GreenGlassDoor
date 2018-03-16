


function hasRepeatedLetters(str) {
    var patt = /^([a-z])\1+$/;
    var result = patt.test(str);
    return result;
}