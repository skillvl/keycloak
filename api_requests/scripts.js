const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function parseJWT(token){
    let output = "";
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    token = token.split('\.')[1];
    token = token.replace(/[^A-Za-z0-9+\/=]/g, "");
    while (i < token.length) {
        enc1 = _keyStr.indexOf(token.charAt(i++));
        enc2 = _keyStr.indexOf(token.charAt(i++));
        enc3 = _keyStr.indexOf(token.charAt(i++));
        enc4 = _keyStr.indexOf(token.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 !== 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
            output = output + String.fromCharCode(chr3);
        }
    }
    output = decodeURI(output);
    return JSON.parse(output.slice(0, -1)); //JSON.parse(output);
}

export {parseJWT}