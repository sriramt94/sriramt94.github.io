var Aes = {};
Aes.cipher = function(input, w) {
	var Nb = 4;
	var Nr = w.length / Nb - 1;
	var state = [ [], [], [], [] ];
	for ( var i = 0; i < 4 * Nb; i++) {
		state[i % 4][Math.floor(i / 4)] = input[i];
	}
	state = Aes.addRoundKey(state, w, 0, Nb);
	for ( var round = 1; round < Nr; round++) {
		state = Aes.subBytes(state, Nb);
		state = Aes.shiftRows(state, Nb);
		state = Aes.mixColumns(state, Nb);
		state = Aes.addRoundKey(state, w, round, Nb);
	}
	state = Aes.subBytes(state, Nb);
	state = Aes.shiftRows(state, Nb);
	state = Aes.addRoundKey(state, w, Nr, Nb);
	var output = new Array(4 * Nb);
	for ( var i = 0; i < 4 * Nb; i++) {
		output[i] = state[i % 4][Math.floor(i / 4)];
	}
	return output;
};
Aes.keyExpansion = function(key) {
	var Nb = 4;
	var Nk = key.length / 4;
	var Nr = Nk + 6;
	var w = new Array(Nb * (Nr + 1));
	var temp = new Array(4);
	for ( var i = 0; i < Nk; i++) {
		var r = [ key[4 * i], key[4 * i + 1], key[4 * i + 2], key[4 * i + 3] ];
		w[i] = r;
	}
	for ( var i = Nk; i < (Nb * (Nr + 1)); i++) {
		w[i] = new Array(4);
		for ( var t = 0; t < 4; t++) {
			temp[t] = w[i - 1][t];
		}
		if (i % Nk == 0) {
			temp = Aes.subWord(Aes.rotWord(temp));
			for ( var t = 0; t < 4; t++) {
				temp[t] ^= Aes.rCon[i / Nk][t];
			}
		} else {
			if (Nk > 6 && i % Nk == 4) {
				temp = Aes.subWord(temp);
			}
		}
		for ( var t = 0; t < 4; t++) {
			w[i][t] = w[i - Nk][t] ^ temp[t];
		}
	}
	return w;
};
Aes.subBytes = function(s, Nb) {
	for ( var r = 0; r < 4; r++) {
		for ( var c = 0; c < Nb; c++) {
			s[r][c] = Aes.sBox[s[r][c]];
		}
	}
	return s;
};
Aes.shiftRows = function(s, Nb) {
	var t = new Array(4);
	for ( var r = 1; r < 4; r++) {
		for ( var c = 0; c < 4; c++) {
			t[c] = s[r][(c + r) % Nb];
		}
		for ( var c = 0; c < 4; c++) {
			s[r][c] = t[c];
		}
	}
	return s;
};
Aes.mixColumns = function(s, Nb) {
	for ( var c = 0; c < 4; c++) {
		var a = new Array(4);
		var b = new Array(4);
		for ( var i = 0; i < 4; i++) {
			a[i] = s[i][c];
			b[i] = s[i][c] & 128 ? s[i][c] << 1 ^ 283 : s[i][c] << 1;
		}
		s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3];
		s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3];
		s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3];
		s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3];
	}
	return s;
};
Aes.addRoundKey = function(state, w, rnd, Nb) {
	for ( var r = 0; r < 4; r++) {
		for ( var c = 0; c < Nb; c++) {
			state[r][c] ^= w[rnd * 4 + c][r];
		}
	}
	return state;
};
Aes.subWord = function(w) {
	for ( var i = 0; i < 4; i++) {
		w[i] = Aes.sBox[w[i]];
	}
	return w;
};
Aes.rotWord = function(w) {
	var tmp = w[0];
	for ( var i = 0; i < 3; i++) {
		w[i] = w[i + 1];
	}
	w[3] = tmp;
	return w;
};
Aes.sBox = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
		171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175,
		156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229,
		241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128,
		226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214,
		179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203,
		190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249,
		2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188,
		182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23,
		196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144,
		136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36,
		92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213,
		78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28,
		166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102,
		72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17,
		105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137,
		13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ];
Aes.rCon = [ [ 0, 0, 0, 0 ], [ 1, 0, 0, 0 ], [ 2, 0, 0, 0 ], [ 4, 0, 0, 0 ],
		[ 8, 0, 0, 0 ], [ 16, 0, 0, 0 ], [ 32, 0, 0, 0 ], [ 64, 0, 0, 0 ],
		[ 128, 0, 0, 0 ], [ 27, 0, 0, 0 ], [ 54, 0, 0, 0 ] ];
Aes.Ctr = {};
function encryptJS(plaintext, password, nBits) {
	var blockSize = 16;
	if (!(nBits == 128 || nBits == 192 || nBits == 256)) {
		return "";
	}
	plaintext = Utf8.encode(plaintext);
	password = Utf8.encode(password);
	var nBytes = nBits / 8;
	var pwBytes = new Array(nBytes);
	for ( var i = 0; i < nBytes; i++) {
		pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
	}
	var key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes));
	key = key.concat(key.slice(0, nBytes - 16));
	var counterBlock = new Array(blockSize);
	var nonce = (new Date()).getTime();
	var nonceSec = Math.floor(nonce / 1000);
	var nonceMs = nonce % 1000;
	for ( var i = 0; i < 4; i++) {
		counterBlock[i] = (nonceSec >>> i * 8) & 255;
	}
	for ( var i = 0; i < 4; i++) {
		counterBlock[i + 4] = nonceMs & 255;
	}
	var ctrTxt = "";
	for ( var i = 0; i < 8; i++) {
		ctrTxt += String.fromCharCode(counterBlock[i]);
	}
	var keySchedule = Aes.keyExpansion(key);
	var blockCount = Math.ceil(plaintext.length / blockSize);
	var ciphertxt = new Array(blockCount);
	for ( var b = 0; b < blockCount; b++) {
		for ( var c = 0; c < 4; c++) {
			counterBlock[15 - c] = (b >>> c * 8) & 255;
		}
		for ( var c = 0; c < 4; c++) {
			counterBlock[15 - c - 4] = (b / 4294967296 >>> c * 8);
		}
		var cipherCntr = Aes.cipher(counterBlock, keySchedule);
		var blockLength = b < blockCount - 1 ? blockSize
				: (plaintext.length - 1) % blockSize + 1;
		var cipherChar = new Array(blockLength);
		for ( var i = 0; i < blockLength; i++) {
			cipherChar[i] = cipherCntr[i]
					^ plaintext.charCodeAt(b * blockSize + i);
			cipherChar[i] = String.fromCharCode(cipherChar[i]);
		}
		ciphertxt[b] = cipherChar.join("");
	}
	var ciphertext = ctrTxt + ciphertxt.join("");
	ciphertext = Base64.encode(ciphertext);
	return ciphertext;
}
var Base64 = {};
Base64.code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
Base64.encode = function(str, utf8encode) {
	utf8encode = (typeof utf8encode == "undefined") ? false : utf8encode;
	var o1, o2, o3, bits, h1, h2, h3, h4, e = [], pad = "", c, plain, coded;
	var b64 = Base64.code;
	plain = utf8encode ? str.encodeUTF8() : str;
	c = plain.length % 3;
	if (c > 0) {
		while (c++ < 3) {
			pad += "=";
			plain += "\0";
		}
	}
	for (c = 0; c < plain.length; c += 3) {
		o1 = plain.charCodeAt(c);
		o2 = plain.charCodeAt(c + 1);
		o3 = plain.charCodeAt(c + 2);
		bits = o1 << 16 | o2 << 8 | o3;
		h1 = bits >> 18 & 63;
		h2 = bits >> 12 & 63;
		h3 = bits >> 6 & 63;
		h4 = bits & 63;
		e[c / 3] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3)
				+ b64.charAt(h4);
	}
	coded = e.join("");
	coded = coded.slice(0, coded.length - pad.length) + pad;
	return coded;
};
Base64.decode = function(str, utf8decode) {
	utf8decode = (typeof utf8decode == "undefined") ? false : utf8decode;
	var o1, o2, o3, h1, h2, h3, h4, bits, d = [], plain, coded;
	var b64 = Base64.code;
	coded = utf8decode ? str.decodeUTF8() : str;
	for ( var c = 0; c < coded.length; c += 4) {
		h1 = b64.indexOf(coded.charAt(c));
		h2 = b64.indexOf(coded.charAt(c + 1));
		h3 = b64.indexOf(coded.charAt(c + 2));
		h4 = b64.indexOf(coded.charAt(c + 3));
		bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
		o1 = bits >>> 16 & 255;
		o2 = bits >>> 8 & 255;
		o3 = bits & 255;
		d[c / 4] = String.fromCharCode(o1, o2, o3);
		if (h4 == 64) {
			d[c / 4] = String.fromCharCode(o1, o2);
		}
		if (h3 == 64) {
			d[c / 4] = String.fromCharCode(o1);
		}
	}
	plain = d.join("");
	return utf8decode ? plain.decodeUTF8() : plain;
};
var Utf8 = {};
Utf8.encode = function(strUni) {
	var strUtf = strUni.replace(/[\u0080-\u07ff]/g, function(c) {
		var cc = c.charCodeAt(0);
		return String.fromCharCode(192 | cc >> 6, 128 | cc & 63);
	});
	strUtf = strUtf.replace(/[\u0800-\uffff]/g, function(c) {
		var cc = c.charCodeAt(0);
		return String.fromCharCode(224 | cc >> 12, 128 | cc >> 6 & 63,
				128 | cc & 63);
	});
	return strUtf;
};
Utf8.decode = function(strUtf) {
	var strUni = strUtf.replace(
			/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(c) {
				var cc = ((c.charCodeAt(0) & 15) << 12)
						| ((c.charCodeAt(1) & 63) << 6)
						| (c.charCodeAt(2) & 63);
				return String.fromCharCode(cc);
			});
	strUni = strUni.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(c) {
		var cc = (c.charCodeAt(0) & 31) << 6 | c.charCodeAt(1) & 63;
		return String.fromCharCode(cc);
	});
	return strUni;
};