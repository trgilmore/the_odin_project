const repeatString = function(string, number) {
    if (number < 0) return "ERROR";
    let text = '';
    for (let index = 0; index < number; index++) {
        text += string
    }
    return text;

}

module.exports = repeatString
