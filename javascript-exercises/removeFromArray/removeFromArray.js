const removeFromArray = function(...args) {
    let list = args[0];
    let final = [];
    list.forEach(element => {
        if (!args.includes(element)){
            final.push(element)
        }   
    });
    return final;
}

module.exports = removeFromArray
