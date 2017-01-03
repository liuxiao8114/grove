import fs from './lib/fs';

async function copy({watch} = {}){
  await Promise.all([
    ncp(),
    ncp()
  ]);

  await fs.writeFile('',JSON.stringify());

  if(watch){
    const watcher = await new Promise((resolve, reject) => {
      gaze('./src/content/**/*.*',(err, val) => {err ? resolve(err) : reject(val)});
    });

    const cp = async (file) => {
      const relPath = file.substr();
      await ncp(``,``);
    };

    watcher.on('changed',cp);
    watcher.on('added',cp);
  }
}

var gen = function* gen(){
  yield "Hello";
  yield "World";
};

var g = gen();

g.next(); //value:Hello done:false
g.next(); //value:World done:false
g.next(); //value:undefined done:true

function co(gen) {
  var ctx = this;

  return new Promise(function(resolve, reject){
    if(typeof gen === 'function') gen = gen.call(ctx);
    if(!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    function onFulfilled(res){
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    function next(ret){
      if(ret.done) return resolve(ret.value);
      var value = gen.next(ret.value);
      if(value && isPromise(value)) return value.then(onFulfilled, onRejected);

    }
  });
}

var gen = function(){};
function step(fn){
  var value = gen.next(fn);
  if(value.done) return resolve(value);
}

Promise.resolve(next.value);
new Promise(resolve => resolve(next.value));

let thenable = {
  then: (resolve, reject) => {
    resolve(42);
  }
}

getJSON('').then(function(post){
  return getJSON(post.commentURL);
}).then(function funcA(comments){

}, function funcB(){

});

export default copy;
