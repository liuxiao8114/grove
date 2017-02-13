const ERROR_NOMONEY = 'not enough money'

const makeWithdraw = init => amount => {
  if(init > amount) return init = init - amount
  return ERROR_NOMONEY
}

const w1 = makeWithdraw(100)

w1(50)

// 3.2.4
const makeAccount = balance => {
  const withdraw = amount => {
    if(balance > amount) return balance = balance - amount
    return ERROR_NOMONEY
  }

  const deposit = amount => {
    return balance = balance + amount
  }

  const dispatch = m => {
    if(m === 'withdraw') return withdraw
    else if(m === 'deposit') return deposit
    else return 'error'
  }
  return dispatch
}

makeAccount(100)('withdraw')(50)

const makeAccount2 = balance => {
  const withdraw = amount => {
    if(balance > amount) return balance = balance - amount
    return ERROR_NOMONEY
  }

  const deposit = amount => {
    return balance = balance + amount
  }

  return {
    withdraw: withdraw,
    deposit: deposit
  }
}
makeAccount2(100).withdraw(50)
