'use strict';

const eventPool = require('./event.js');


function pickUpOrder(payload) {
  let orderInfo = payload.order;
  console.log(`EVENT: {event: 'pickup', time: ${Date()}, payload: { store: ${orderInfo.storeName}, orderId: ${orderInfo.orderId}, customer: ${orderInfo.customerName}, address: ${orderInfo.address}}}`);
  setTimeout(() => {
    console.log(`DRIVER: picked up ${orderInfo.orderId}`);
    eventPool.emit('in-transit', { order: orderInfo });
  }, 1000);
}

function inTransit(payload) {
  let orderInfo = payload.order;
  console.log(`EVENT: {event: 'in-transit', time: ${Date()}, payload: { store: ${orderInfo.storeName}, orderId: ${orderInfo.orderId}, customer: ${orderInfo.customerName}, address: ${orderInfo.address}}}`);
  setTimeout(() => {
    console.log(`DRIVER: delivered ${orderInfo.orderId}`);
    eventPool.emit('delivered', { order: orderInfo });
  }, 3000);
}

module.exports = {
  pickUpOrder,
  inTransit,
};
