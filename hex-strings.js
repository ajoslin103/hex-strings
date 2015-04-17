'use strict';

// from - http://neathack.info/questions/how-to-convert-from-hex-to-ascii-in-javascript
function asciiToHex(str) {
	var arr = [];
	for (var i = 0, l = str.length; i < l; i ++) {
		var hex = Number(str.charCodeAt(i)).toString(16);
		arr.push(hex);
	}
	return arr.join('');
}

// from - http://neathack.info/questions/how-to-convert-from-hex-to-ascii-in-javascript
function hexToAscii(hexx) {
	var hex = hexx.toString();//force conversion
	var str = '';
	for (var i = 0; i < hex.length; i += 2) {
		str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	}
	return str;
}

