const fibonacci = function(num) {
    let newNum = Number(num)
    if(newNum < 0) return "OOPS"
    if(newNum === 0) return 0
    if(newNum === 1) return 1
    let prev = 0;
    let current = 1;
    for (let i = 2; i <= num; i++) {
        let next = prev + current
        prev = current
        current = next
    }
    return current
};


// Do not edit below this line
module.exports = fibonacci;
