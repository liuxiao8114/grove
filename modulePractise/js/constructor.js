function Foo() {
  this.name = ''
  this.shot = function() {

  }
}

function Bar() {

}

Foo.call(Bar.prototype)

Bar.prototype = new Foo()


function Foo2() {
  Bar.call(this)
}

const promise = new Promise(function(resolve, reject) {

})

promise.then(response => {

}).catch(errpr => {
  
})
