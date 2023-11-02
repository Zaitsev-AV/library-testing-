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


console.log(['footbar', [['hello']]].length)

console.log(['footbar', [['hello']]].toString())