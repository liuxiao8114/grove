const getJSON = function(url){
  const promise = new Promise((reslove, reject) => {
    const client = new XMLHttpRequest();
    client.open('', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();

    function handler(){
      if(this.readyState === 4){
        reslove(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }
  });

  return promise;
};

/*
getJSON('/posts.json').then((json) => {

},(error) => {

});
*/

getJSON('/posts.json').then(
  json => console.log(),

);

const someAsyncThing = () => {
  return new Promise((resolve, reject) => {

  })
}

function getFoo(str){
  return new Promise((resolve) => {
    resolve(str);
  });
}

const g = function* (){
  const foo = yield getFoo('foo');
  console.log(foo);
}

function run(generator){
  var it = generator();

  function go(result){
    if(result.done) return result.value;
    return result.value.then(
      value => go(it.next(value)),
      error => go(it.throw(error))
    );
  }

  go(it.next());
}

run(g);
