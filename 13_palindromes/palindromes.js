const palindromes = function (str) {
    let cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
    const reverse = cleanStr.split('').reduce((acc, curLet) => curLet + acc, '')
    if(cleanStr === reverse) return true;
    return false;
};


// Do not edit below this line
module.exports = palindromes;
