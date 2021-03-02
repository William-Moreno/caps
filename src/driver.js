'use strict';

const eventPool = require('./event.js');


eventPool.on('pickup', ((payload) => {
  let orderInfo = payload.order;
  
  setTimeout(() => {
    console.log(`DRIVER: picked up ${orderInfo.orderId}`);
    eventPool.emit('in-transit', { order: orderInfo });
  }, 1000);
}));

eventPool.on('in-transit', ((payload) => {
  let orderInfo = payload.order;

  setTimeout(() => {
    console.log(`DRIVER: delivered ${orderInfo.orderId}`);
    eventPool.emit('delivered', { order: orderInfo });
  }, 3000);
}));

