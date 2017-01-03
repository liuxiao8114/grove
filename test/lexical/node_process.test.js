/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import cp from 'child_process';

describe('process,EventEmiiter', () => {
  it('process.argv', () => {
    const EventEmitter = require('events');

    class MyEmitter extends EventEmitter {}

    const myEmitter = new MyEmitter();
    myEmitter.on('event', function(a, b) {
      console.log(a, b, this);
        // Prints:
        //   a b MyEmitter {
        //     domain: null,
        //     _events: { event: [Function] },
        //     _eventsCount: 1,
        //     _maxListeners: undefined }
    });
    myEmitter.emit('event', 'a', 'b');

  });

  it('process.stdout', () => {

  });

  it('child_process.spawn', () => {
    const cd = cp.spawn('cd',['..']);
    const server = cp.spawn('node', ['../testFile3.js']);

    cd.stdout.on('data', (data) => {
       console.log(`stdout: ${data}`);
    });
    server.stdout.on('data', (data) => {
       console.log(`stdout: ${data}`);
    });
  });

});
