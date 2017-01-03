/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */
import 'babel-polyfill';
import { expect } from 'chai';

function sumAll(arr) {
  function sum(from, to){
    return ((from + to) * (to - from + 1))/2
  }
  return sum(Math.min.apply(undefined,arr), Math.max(...arr));
}

function diff(arr1, arr2) {
  if(arr1 instanceof Array &&
    arr2 instanceof Array){
      var newArr = arr1.filter(item => {
        return arr2.indexOf(item) === -1
      })

    return newArr.concat(arr2.filter(item => {
        return arr1.indexOf(item) === -1
      }))
  }
}

function convert(num) {
  const m = Math.floor(num /1000),
  h = Math.floor((num - m * 1000)/100),
  t = Math.floor((num - m * 1000- h *100) / 10),
  a = num - m * 1000 - h * 100- t * 10,
  romanA = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  romanT = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  romanH = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  romanM = ['', 'M', 'MM', 'MMM', 'MV!', 'V!', 'V!M', 'V!MM', 'V!MMM', 'X!']

  return new String('').concat(romanM[m], romanH[h], romanT[t], romanA[a])
}

function where(collection, source) {
  const a = Object.keys(source)
  return collection.filter(item => {
    if(typeof item === "object") {
      for(let i in a) {
        if(!item.hasOwnProperty(a[i]) || item[a[i]] !== source[a[i]]){
          return false
        }
      }
      return true
    }
  })
}

function myReplace(str, before, after) {
  after = after.toLowerCase()
  if(before.charCodeAt(0) <= 90 && before.charCodeAt(0) >= 65) {
    after = after.charAt(0).toUpperCase().concat(after.slice(1))
  }
  let arr = str.split(' ')
  let i = 0
  i = arr.indexOf(before)
  while( i !== -1){
    arr.splice(i, 1, after)
    i = arr.indexOf(before, i + 1)
  }
  return arr.join(' ')
}

function translate(str) {
  const vowels = ['a', 'i', 'u', 'e', 'o']
  let arr = str.split('')
  let i = arr.findIndex(n => {
    return vowels.some( m => {
      return m === n
    })
  })

  if( i === 0){
    return ''.concat(str.slice(i),'way')
  }
  return ''.concat(str.slice(i),str.slice(0,i),'ay')
}

function pair(str) {
  const dna = ['A', 'T', 'C', 'G']
  function subPair(c) {
    switch(c){
      case 'A':
        return ["A","T"]
      case 'T':
        return ["T","A"]
      case 'C':
        return ["C","G"]
      case 'G':
        return ["G","C"]
      default:
        return new Error()
    }
  }

  let arr = str.split('')
  return arr.map(n => subPair(n))
}

function fearNotLetter(str) {
  const letterList = 'abcdefghijklmnopqrstuvwxyz'
  if(letterList.indexOf(str) !== -1){
    return undefined
  }

  const from = letterList.indexOf(str.charAt(0)),
  to = letterList.indexOf(str.charAt(str.length - 1))
  return letterList.slice(from, to + 1).split('').filter(n => str.indexOf(n) === -1)[0]
}

function boo(bool) {
  return bool? bool === true : bool === false
}

function unite(...args) {
  /*
  let arr
  for(let i in args){
    args[i].
  }
  arr.reduceRight((prev, cur) => {
    return arr.lastIndexOf(cur) === -1
  })
  */
  return args.reduce((prev, cur) => {
    for(let i in cur){
      if(!prev.includes(cur[i])) prev.push(cur[i])
    }
    return prev
  })
}


function convertHtml(str) {
  return str.replace(/[&<>"']/g, match => {
    switch(match){
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "\"":
        return "&quot;";
      case "'":
          console.log(match === "'");
        return "&​apos;";
    }
  })
}

function spinalCase(str) {
  str = str.charAt(0).toLowerCase() + str.slice(1)
  return str.replace(/\s[a-zA-Z]|_[a-zA-Z]|[A-Z]/g, match => {
    if(match.charCodeAt() <= 90 && match.charCodeAt() >= 65){
      return '-' + match
    }
    return '-' + match.slice(1)
  }).toLowerCase()
}

function sumFibs(num) {
  function fib(n){
    return fibIter(1, 0, n)
  }

  function fibIter(a, b, count){
    if(count === 0) return b
    return fibIter(b, a + b, count - 1)
  }

  let sum = 0, temp

  for(let i = 0; ; i++){
    temp = fib(i)
//    console.log('i: ' + i + ' fib: ' + temp);
//    console.log('sum: ' + sum);
    if(temp === num) {
      if(temp % 2 === 1) sum = sum + temp
      break
    } else if(temp > num) {
      break
    }
    if(temp % 2 === 1) sum = sum + temp
  }
  return sum;
}

function sqrt(n){
  return sqrtIter(1.5, n)
}

function sqrtIter(guess, x){
  if(Math.abs(guess * guess - x) < 0.0001){
    return guess
  } else {
    return sqrtIter(average(guess, x / guess), x)
  }
}

function average(x, y){
  return (x + y) / 2
}

function sumPrimes(num) {
  function prime(n){
    return primeIter(n, Math.floor(sqrt(n)))
  }

  function primeIter(n, count) {
    if(count === 1) return true
    else if(n % count === 0) return false
    return primeIter(n, --count)
  }
  let sum = 0;
  for(let i = 2; i <= num; i++){
    if(prime(i)) sum = sum + i
  }
  return sum;
}

function god(a, b) {
  let temp
  if(b === 0) return 0

  if(a < b) {
    temp = a
    a = b
    b = temp
  }
  let c = a % b
  if(c === 0) {
    return b
  }
  return god(b, c)
}

function smallestCommons(arr) {
  function minMultiple(arr){
    let array = new Array(),
    lenArr = arr.length
    for(let i = 0; i <= lenArr / 2 - 1; i++){
      array.push((arr[i] * arr[lenArr - 1 - i]) / god(arr[i], arr[lenArr - 1 - i]))
    }
    let lenArray = array.length
    if(lenArr % 2 === 1){
      array.push((arr[Math.floor(lenArr / 2)] * array[lenArray-1] / god(array[lenArray-1], arr[Math.floor(lenArr / 2)])))
    }
    return array
  }
  let tempArray = [],temp

  if(arr[1] < arr[0]){
    temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp
  }

  for(let i = arr[0]; i <= arr[1]; i++){
    tempArray.push(i)
  }
  let result = minMultiple(tempArray)

  while(result.length > 1){
    result = minMultiple(result)
  }
  return result[0]
}

function find(arr, func) {
  return arr.filter(item => {
    return func(item)
  })
}

function drop(arr, func) {
  let result = new Array()
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])) {
      return result = arr.slice(i)
    }
  }
  return result
}

function steamroller(arr) {
  let result = new Array()
  const rollIter = (arr, result) => {
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        rollIter(arr[i], result)
      } else {
        result.push(arr[i])
      }
    }
    return result
  }

  if(Array.isArray(arr)) {
    return rollIter(arr,result)
  }
  return arr
}

function binaryAgent(str) {
  let arr = str.split(' ')
  arr = arr.map(n => parseInt(n, 2))
  return String.fromCharCode(...arr)
}

function every(collection, pre) {
  if(Array.isArray(collection)) {
    for(let i = 0; i < collection.length; i++) {
      if(!collection[i][pre]) return false
    }
  }
  return true
}

function add(fn, ...args) {
  if(!args) return n => {
    return n + fn
  }
  return fn + args
}

describe('algo-junior', () => {

  it('sumAll',() => {
    expect(sumAll([10, 5])).equal(45);
  })

  it('diff',() => {
    expect(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])[0]).equal(4);
  })

  it('convert',() => {
    expect(convert(2)).equal("II");
  })

  it('where',() => {
    expect(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })[0].last).equal("Capulet");
  })

  it('myReplace',() => {
    expect(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
    .equal("A quick brown fox leaped over the lazy dog");
  })

  it('translate',() => {
    expect(translate("california")).equal("aliforniacay");
  })

  it('pair',() => {
    expect(pair("ATCGA")[3][1]).equal("C");
  })

  it('fearNotLetter',() => {
    expect(fearNotLetter("abce")).equal("d");
  })

  it('boo',() => {
    expect(boo(undefined)).equal(false);
  })

  it('unite',() => {
    expect(unite([1, 3, 2], [5, 2, 1, 4], [2, 1])[4]).equal(4);
  })

  it('convertHtml',() => {
    expect(convertHtml("Shindler's List")).equal("Shindler&​apos;s List");
  })

  it('spinalCase',() => {
    expect(spinalCase("This Is Spinal Tap")).equal("this-is-spinal-tap");
    expect(spinalCase("thisIsSpinalTap")).equal("this-is-spinal-tap");
    expect(spinalCase("The_Andy_Griffith_Show")).equal("the-andy-griffith-show");
    expect(spinalCase("Teletubbies say Eh-oh")).equal("teletubbies-say-eh-oh");
  })

  it('sumFibs',() => {
    expect(sumFibs(4)).equal(5);
  })

  it('sqrt',() => {
    expect(Math.floor(sqrt(25))).equal(5);
  })

  it('sumPrimes',() => {
    expect(sumPrimes(10)).equal(17);
  })

  it('god',() => {
    expect(god(36363636,1322131231)).equal(1);
  })

  it('smallestCommons',() => {
    expect(smallestCommons([5, 1])).equal(60);
  })

  it('find',() => {
    expect(find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })[0]).equal(8);
  })

  it('drop',() => {
    expect(drop([1, 2, 3, 9, 2], function(n) {return n > 2;})[2]).equal(2);
  })

  it('steamroller',() => {
    expect(steamroller([[["a"]], [["b"]]])[1]).equal('b');
  })

  it('binaryAgent',() => {
    expect(
      binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))
      .equal('Aren\'t bonfires fun!?');
  })

  it('every',() => {
    expect(every([{"single": "yes"}], "single")).equal(true);
  })

  it('add',() => {
    expect(add(2)(3)).equal(5);
  })

});
