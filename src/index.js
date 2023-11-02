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
console.log(complete('hihhvwxyxwv'))
    // if(str.length === 1) {
    //     return str + str
    // }
    // let newStr = str[0]
    //
    // for (let i = 1; i < str.length; i++) {
    //     console.log(newStr)
    //     console.log(str.slice(0, i))
    //     // newStr += str[i]
    //     let newStr_2 = newStr.split('').reverse().join('')
    //     let strSlice = str.slice(0, i)
    //
    //     if (newStr_2 === strSlice) {
    //         newStr += str[i]
    //         if (newStr_2 !== strSlice) {
    //
    //         }
    //
    //     } else {
    //         break
    //     }
    // }
    // // console.log(count)
    // // console.log(strRevers.slice(count))
    // return str + newStr.split('').reverse().join('')
    // for (let i = 0; i < str.length; i++) {
    //     for (let j =  i + 1; j <= str.length; j++) {
    //         let polindrom = str.slice(0,j)
    //         if (polindrom === polindrom.split('').reverse().join('' )) {
    //             return  polindrom
    //         }
    //     }
    // }


    




    // hihhvwxyxwvhhih


//vwxyxwvhhih
//hihhvwxyxwv



//bbsssSSsssSSsssbb
//bbsssSSsssSSsssbb
//bbsssSSsssbb

//jkLMnOpQxxxxXxxxx
//jkLMnOpQxxxxXxxxxXxxxxQpOnMLkj
//jkLMnOpQxxxxXxxxxXxxxxQpOnMLkj
//jkLMnOpQxxxxXxxxxxQpOnMLkj


// const complete = (str) => {
//     let reverseStr = str.split('').reverse().join('');
//
//     for (let i = 1; i < str.length; i++) {
//         if (str.substring(i) === reverseStr.substring(0, str.length - i)) {
//             return str + reverseStr.substring(str.length - i);
//         }
//     }
//
//     return str + reverseStr.substring(1);
// }
//
// console.log(complete('a'));    // aa
// console.log(complete('GG'));   // GGG
// console.log(complete('Ab'));   // AbA
// console.log(complete('aba'));  // ababa
// console.log(complete('aab'));  // aabaa