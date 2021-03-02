'use strict';

const eventPool = require('./event.js');
const vendor = require('./vendor.js');
const driver = require('./driver.js');




eventPool.on('pickup', driver.pickUpOrder);
eventPool.on('in-transit', driver.inTransit);
eventPool.on('delivered', vendor.delivered);

