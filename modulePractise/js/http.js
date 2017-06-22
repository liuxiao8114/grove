function postMessage(msg) {
  var req = new XMLHttpRequest()
  req.open('POST', '/log.php')
  req.sentRequestHeader('Content-Type', 'text/plain;charset=UTF-8')
  req.send(msg)
}


function getText(url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      var type = xhr.getResponseHeader('Content-Type')
      if(type.match(/^text/))
        callback(xhr.responseText)
    }
  }
  xhr.send(null)
}

function encodeFormData(data) {
  if(!data) return ''
  var posts = []
  for(var name in data) {
    if(!data.hasOwnProperty(name)) continue
    if(typeof data[name] === 'function') continue
    var value = data[name]
    name = encodeURIComponent
  }
}
