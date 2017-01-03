/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import cp from 'child_process';
import expect from 'expect';

const RUNNING_REGEXP = /The server is running at http:\/\/(.*?)\//;
let server;
const serverPath = '';

function runServer(cb) {
  function onStdOut(data) {
    const match = data.toString('utf8').match(RUNNING_REGEXP);
    process.stdout.write(data);

    if(match){
      server.stdout.removeListener();
    }
  }

  server = cp.spawn('node', [serverPath], {
    env: Object.assign({ NODE_ENV: 'development' }, process.env),
    silent: false
  });

  server.stdout.on('data', onStdOut);
  return server;
}

export default runServer;

describe('es5 feature', () => {
  it('test reduceRight', () => {
    const fn1 = first => 'first is: ' + first
    const fn2 = second => 'second is: ' + second
    const fn3 = last => 'last is: ' + last

    const funcs = [fn1, fn2, fn3]
    const last = funcs[funcs.length - 1]
    const rest = funcs.slice(0, -1)
    expect(rest.reduceRight((composed, f) => {
      let done = f(composed)
      return done
    }, last('last'))).toEqual('first is: second is: last is: last')
  })

  it('test closure for private var', () => {
    function counter(count) {
      return {
        count() { return count++ },
        reset() {
          count = 0
        }
      }
    }
    expect(counter(1).count()).toEqual(2)
    expect(counter(10).count()).toEqual(11)
  })

  /*
  it('test closure for share var', () => {

  })

  */

  it('test fp', () => {
    // function map(fn) {}

    function map(fn) {
      return
    }

  })


})
