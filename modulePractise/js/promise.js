let p1 = new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest()
  let url = 'http://api.github.com'

  function handler() {
    if(this.readyState !== 4)
      return
  }

  xhr.onload = function() {

  }

  xhr.open('get', url, true)

  xhr.onreadystatechange = handler

  xhr.onerror(() => {
    reject(new TypeError('Network request failed!'))
  })

  xhr.send(typeof request._bodyinit === 'undefined' ? null : request._bodyinit)

})
