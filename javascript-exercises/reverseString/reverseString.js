const reverseString = function(string) {
    let stringlength = string.length;
    let stringarray =[];
    for (let index = 0; index < string.length; index++) {
        stringarray.push(string.charAt(index));
    }
    stringarray.reverse();
    return stringarray.join('');

}

module.exports = reverseString
