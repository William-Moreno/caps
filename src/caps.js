'use strict';

const eventPool = require('./event.js');
const vendor = require('./vendor.js');
const driver = require('./driver.js');




eventPool.on('pickup', driver.pickUpOrder);
eventPool.on('pickup', pickUpReady);
eventPool.on('in-transit', driver.inTransit);
eventPool.on('pickup', enroute);
eventPool.on('delivered', vendor.delivered);
eventPool.on('pickup', deliveryComplete);


function pickUpReady(payload) {
  let orderInfo = payload.order;
  console.log(`EVENT: {event: 'Order ready for pick up', time: ${Date()}, payload: { store: ${orderInfo.storeName}, orderId: ${orderInfo.orderId}, customer: ${orderInfo.customerName}, address: ${orderInfo.address}}}`);
}

function enroute(payload) {
  let orderInfo = payload.order;
  console.log(`EVENT: {event: 'Order is now in transit', time: ${Date()}, payload: { store: ${orderInfo.storeName}, orderId: ${orderInfo.orderId}, customer: ${orderInfo.customerName}, address: ${orderInfo.address}}}`);
}

function deliveryComplete(payload) {
  let orderInfo = payload.order;
  console.log(`EVENT: {event: 'Order has been delivered', time: ${Date()}, payload: { store: ${orderInfo.storeName}, orderId: ${orderInfo.orderId}, customer: ${orderInfo.customerName}, address: ${orderInfo.address}}}`);
}