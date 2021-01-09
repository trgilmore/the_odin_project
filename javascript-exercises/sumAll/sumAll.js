const sumAll = function(a, b) {
    if (a > b) {
        let c = b;
        b = a;
        a = c;
    }
    if (a<0 || b<0) return "ERROR";
    if (typeof(a)!=="number" || typeof(b)!=="number") return "ERROR";

    let sum = 0;
    let numbers = [];
    
    for (let index = a; index <= b; index++) {
        numbers.push(index); 
    }
    //console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum;
  

}

module.exports = sumAll
