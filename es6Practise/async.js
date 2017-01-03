function co(gen){
  const ctx = this;
  return new Promise((resolve, reject) => {

  });
}

const fs = require('fs');

const readFile = function (filename){
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (error, data) => {
      if(error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* (){
  var f1 = yield readFile();
  var f2 = yield readFile();
};

var g = gen();

g.next().value.then((value) => {
  g.next(value).value.then((value) => {
    g.next(value);
  });
});

function run(gen){
  var g = gen();

  function next(data){
    var result = g.next(data);
    if(result.done) return result.value;
    result.value.then(value => {
      next(value);
    });
  }
  next();
}

function co(gen){
  const ctx = this;
  return new Promise((resolve, reject) => {
    if(typeof gen === 'function') gen = gen.call(ctx);
    if(!gen || typeof gen.next !== 'function') return resolve(gen);

    function onFullfilled(){
      var ret = gen.next();
      if(ret.done) return ...;
      var value = toPromise.call(ctx, ret.value);
      if(value && isPromise(value)) return value.then(onFullfilled); 
    }

    next();

  });
}
