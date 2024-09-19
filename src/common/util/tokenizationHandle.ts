export const objectKeys = (obj: Record<string, any>) => {
  let keys, position;

  keys = [];

  for (position in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, position)) {
      keys.push(position);
    }
  }

  return keys;
};

export const Base64Tokenization = {
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

  index: 0,

  encode: function (input: string) {
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4, output;

    output = '';
    chr1 = void 0;
    chr2 = void 0;
    chr3 = void 0;
    enc1 = void 0;
    enc2 = void 0;
    enc3 = void 0;
    enc4 = void 0;
    let index = 0;

    input = Base64Tokenization._utf8_encode(input);

    while (index < input.length) {
      chr1 = input.charCodeAt(index++);
      chr2 = input.charCodeAt(index++);
      chr3 = input.charCodeAt(index++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else {
        if (isNaN(chr3)) {
          enc4 = 64;
        }
      }
      output =
        output +
        Base64Tokenization._keyStr.charAt(enc1) +
        Base64Tokenization._keyStr.charAt(enc2) +
        Base64Tokenization._keyStr.charAt(enc3) +
        Base64Tokenization._keyStr.charAt(enc4);
    }

    return output;
  },
  _utf8_encode: function (string: string) {
    let char, iterator, getText;

    string = string.replace(/\r\n/g, '\n');
    getText = '';
    iterator = 0;

    while (iterator < string.length) {
      char = string.charCodeAt(iterator);
      if (char < 128) {
        getText += String.fromCharCode(char);
      } else if (char > 127 && char < 2048) {
        getText += String.fromCharCode((char >> 6) | 192);
        getText += String.fromCharCode((char & 63) | 128);
      } else {
        getText += String.fromCharCode((char >> 12) | 224);
        getText += String.fromCharCode(((char >> 6) & 63) | 128);
        getText += String.fromCharCode((char & 63) | 128);
      }
      iterator++;
    }

    return getText;
  },
};
