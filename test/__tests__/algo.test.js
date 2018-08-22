function reverseString(str) {
  let a = str.split('');
  a = a.reverse();
  return a.join('');
}

function factorialize(num, n) {
  if(num !== 1){
    return factorialize(num - 1, n * num)
  } else{
    return n;
  }
}

function palindrome(str) {
  str = str.toLowerCase().trim();
  // Good luck!
  let reverseStr = str.split('').reverse().join('')
  if(str === reverseStr) return true;
  return false
}

function titleCase(str) {
  var arrStr = str.split(' ')
  var after = arrStr.map((e) => {
    return e.charAt(0).toUpperCase().concat(e.slice(1).toLowerCase())
  }).join(' ')
  return after;
}

function findLongestWord(str) {
  var arrStr = str.split(' ');
  var arrLength = arrStr.map(e => e.length);
  return Math.max(...arrLength);
}

function largestOfFour(arr) {
  if(arr instanceof Array){
    arr = arr.map(e => {
      if(e instanceof Array){
        return Math.max(...e);
      }
      return e;
    })
  }
  return arr;
}

function truncate(str, num) {
  let len,s
  if(num <= 3) {
    len = str.length
    len <= num ? s = str : s = (str.slice(0,num) + "...")
  } else {
    len = str.length - 3
    len <= num ? s = str : s = (str.slice(0,num - 3) + "...")
  }
  return s
}

function confirmEnding(str, target) {
  const lenStr = str.length
  const lenTar = target.length
  if(lenTar > lenStr) return false
  return str.slice(lenStr - lenTar, lenStr) === target ? true : false
}

function repeat(str, num, result = str) {
  if( num < 0) return ''
  if( num === 1) return result
  result = result.concat(str)
  return repeat(str,--num, result);
}

function chunk(arr, size) {
  let len = arr.length
  if(len <= size) return arr
  let n = Math.floor(len / size),
  mod = len % size,
  newArr = new Array()
  for(let i = n - 1; i >= 0 ; i--){
     newArr.unshift(arr.slice(i * size,(len- mod - ((n - i - 1) * size))))
  }
  if(mod !== 0) newArr.push(arr.slice(n * size, len))
  return newArr
}

function slasher(arr, howMany) {
  let len = arr.length
  if(len <= howMany) return []
  return arr.slice(howMany, len)
}

function mutation(arr) {
  if(arr instanceof Array && arr.length >=2 &&
    typeof arr[0] === 'string' &&
    typeof arr[1] === 'string' ){
    let len = arr[1].length
    let a0 = arr[0].toLowerCase(),
      a1 = arr[1].toLowerCase()

    for(let i = 0; i < len; i++) {
      if(a0.indexOf(a1.charAt(i)) === -1) {
        return false
      }
    }
    return true
  }
  return false
}

function bouncer(arr) {
  if(arr instanceof Array){
    return arr.filter((item) => {
      return Boolean(item) === true
    })
  }
  return arr;
}

function destroyer(arr,...args) {
  return arr.filter(item => {
    let notInFlag = true
    for(let i in args){
      if(args[i] === item) {
        notInFlag = false
        break
      }
    }
    return notInFlag
  })
}

function where(arr, num) {
  arr = arr.concat(num).sort((value1,value2) => {
    if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    })
  return arr.indexOf(num)
}

describe('algo', () => {
  it('reverseString',() => {
    expect(reverseString("hello")).toEqual("olleh");
  })

  it('factorialize',() => {
    var a = factorialize(5,1);
    expect(a).toEqual(120)
  })

  it('palindrome',() => {
    expect(palindrome("Eye")).toEqual(true)
    expect(palindrome("yye")).toEqual(false)
  })

  it('titleCase',() => {
    expect(titleCase("I'm a little tea pot")).toEqual("I'm A Little Tea Pot")
  })

  it('findLongestWord',() => {
    expect(findLongestWord("The quick brown fox jumped over the lazy dog")).toEqual(6)
  })

  it('largestOfFour',() => {
    expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])[0]).toEqual(5)
  })

  it('truncate',() => {
    expect(truncate("A-tisket a-tasket A green and yellow basket", 11)).toEqual("A-tisket...")
  })

  it('confirmEnding',() => {
    expect(confirmEnding("Bastian", "n")).toEqual(true)
  })

  it('repeat',() => {
    expect(repeat("abc", 3)).toEqual("abcabcabc")
  })

  it('chunk',() => {
    expect(chunk([0, 1, 2, 3, 4, 5], 4)[0][1]).toEqual(1)
  })

  it('slasher',() => {
    expect(slasher([1, 2, 3], 2)[0]).toEqual(3)
  })

  it('mutation',() => {
    expect(mutation(["Mary", "Army"])).toEqual(true)
  })

  it('bouncer',() => {
    expect(bouncer([7, "ate", "", false, 9])[2]).toEqual(9)
  })

  it('destory',() => {
    expect(destroyer(["tree", "hamburger", 53], "tree", 53)[0]).toEqual("hamburger")
  })

  it('where',() => {
    expect(where([5, 3, 20, 3], 5)).toEqual(2)
  })
});
