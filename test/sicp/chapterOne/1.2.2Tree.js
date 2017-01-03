export function countChange(amount) {
  return cc(amount, 5)
}

function cc(amount, kindsOfCoins) {
  if(amount === 0) {
    return 1
  } else if(amount < 0 || kindsOfCoins === 0) {
    return 0
  } else {
    return cc(amount, kindsOfCoins - 1) +
    cc(amount - valueOfCoins(kindsOfCoins), kindsOfCoins)
  }
}

function valueOfCoins(kindsOfCoins) {
  switch (kindsOfCoins) {
    case 5: {
      return 50
    }
    case 4: {
      return 25
    }
    case 3: {
      return 10
    }
    case 2: {
      return 5
    }
    case 1: {
      return 1
    }
    default: return 0
  }
}
