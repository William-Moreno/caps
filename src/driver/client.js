'use strict';

const io = require('socket.io-client');
// const hostURL = 'http://localhost:3000/';
const capsURL = 'http://localhost:3000/caps';

// const socket = io.connect(hostURL);
const capsServer = io.connect(capsURL);


capsServer.on('pickup', (payload) => {
  
  setTimeout(() => {
    console.log(`Picking up ${payload.order.orderId}`);
    payload.event = 'in-transit';
    capsServer.emit('in-transit', payload);
  }, 1500);

  setTimeout(() => {
    payload.event = 'delivered';
    capsServer.emit('delivered', payload);
  }, 3000);

});

