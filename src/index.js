const complete = (str) => {
    if (str.length === 1) return str
    let reverseStr = str.split('').reverse().join('');

    for (let i = 1; i < str.length; i++) {
        if (str.slice(i) === reverseStr.slice(0, str.length - i)) {
            return str + reverseStr.slice(str.length - i);
        }
    }

    return str + reverseStr.slice(1);
}

Array.prototype.toString = function () {
    let isArray =  Array.isArray(this)
    let interim = ''
    if (isArray && this.length > 0) {
        for (let i = 0; i < this.length; i++) {
            if (typeof this[i] !== 'string') {
                if (i+1 !== this.length) {
                    interim += `${this[i]},`
                } else interim += `${this[i]}`
            } else {
                if((i+1 !== this.length)) {
                    interim += `'${this[i]}',`
                }else interim += `'${this[i]}'`
            }
        }
    } else {
        return '[]'
    }
    return `[${interim}]`
}


const palindrome_1 = num => typeof num === 'string' || num < 0 ? "Not valid" : +num.toString().split('').reverse().join('') === num

console.log(palindrome_1(1221))

function palindrome(num,s) {
    if (typeof num === 'string' || typeof s === "string" || num < 0 ) return "Not valid"

    const check = (element) => {
        return +element.toString().split('').reverse().join('') === element
    }
    let res = []
    let start = num
    if (num < 10) {
        start = (10 - num) + num
    }
    while(res.length !== s ) {
        if ( check(start)) {
            res.push(start)
        }
        start++
    }
    return res
}

console.log(palindrome(6,4))

const uniqueInOrder = (value) => {
    let array = []
    if (typeof value === "string") {
        let arrValues = value.split('')
        array = arrValues.reduce((result, value, index, array) => {
            if (value !== array[index + 1]) {
                result.push(value);
            }
            return result;
        }, []);
    } else {
        array = value.reduce((result, value, index, array) => {
            if (value !== array[index + 1]) {
                result.push(value);
            }
            return result;
        }, []);
    }
    return array
}


console.log(uniqueInOrder([1,2,2,3,3]) )