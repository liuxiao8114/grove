import $ from 'jquery'

const quotes = [
  {
    'by': 'liu_xiao',
    'content': 'this is a beginning'
  }, {
    'by': '',
    'content': 'so it may not be end rightly'
  }, {
    'by': '',
    'content': 'but you have to know'
  }, {
    'by': '',
    'content': 'everyone will have a die'
  }
]

const getQuote = () => {
  return Math.floor(Math.random() * quotes.length + 1)
}

/*
DOM树生成完毕，componentDitMount?
几个问题：
1.ready的时机，生命周期
2.异步数据的取得方式
3.回调，修改Quote区域的内容
4.
*/

const getJSON = url => new Promise((resolve, reject) => {
  const client = new XMLHttpRequest()
  client.open('GET', url)
  client.onreadystatechange = handler
  client.responseType = 'json'
  client.setRequestHeader('Accept', 'application/json')
  client.send()

  function handler() {
    if(this.readyState !== 4) {
      return
    }
    if(this.status === 200) {
      resolve(this.response)
    } else {
      reject(new Error(this.statusText))
    }
  }
})

$(document).ready(() => {
  $('#change').on('click', () => {
    const quote = getQuote()
    console.log(quote); // eslint-disable-line
    $('#content').append('<p>' + quote.content + '</p>')
    $('#author').text('<p>' + quote.by + '</p>')
  }) //绑定事件，注册渐变效果
})
