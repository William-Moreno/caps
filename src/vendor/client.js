'use strict';


require('dotenv').config();
const STORE = process.env.STORENAME;
const faker = require('faker');
const io = require('socket.io-client');
const hostURL = 'http://localhost:3000/';
const capsURL = 'http://localhost:3000/caps';

const socket = io.connect(hostURL);
const capsServer = io.connect(capsURL);


setInterval(() => {
  let order = {
    store: 'The Stuff Store',
    orderId: faker.random.uuid(),
    name: faker.name.findName(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()}`,
  };
  capsServer.emit('pickup', { event: 'pickup', time: Date(), order: order });
}, 500);


capsServer.on('delivered', (payload) => {
  console.log(`Thank you for delivering ${payload.order.orderId}`);
});
