

require('dotenv').config();
const STORE = process.env.STORENAME;
const faker = require('faker');
const eventPool = require('./event.js');
const Order = require('./orders.js');

const OrderInterface = new Order();

setInterval(() => {
  let randOrderId = faker.finance.creditCardNumber();
  let randName = faker.name.findName();
  let randAddress = faker.address.streetAddress();
  let newOrder = OrderInterface.create(STORE, randOrderId, randName, randAddress);
  eventPool.emit('pickup', { order: newOrder });
}, 5000);


function delivered(payload){
  let orderInfo = payload.order;
  console.log(`VENDOR: Thank you for delivering ${orderInfo.orderId}`);
}

module.exports = {
  delivered,
};