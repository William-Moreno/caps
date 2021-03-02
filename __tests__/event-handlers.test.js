'use strict';

const vendor = require('../src/vendor.js');
const driver = require('../src/driver.js');

//swap normal console.log with jest function
console.log = jest.fn();

describe('Testing the vendor module', () => {
  it('Should console.log some output on \'delivered\'', () => {

    let payload = { order: { storeName: 'The Stuff Store', orderId: '1234-5678-9012-3456', customerName: 'Alexis Riley', address: '987 Laurel Lane'}};

    vendor.delivered(payload);
    expect(console.log).toHaveBeenCalled();
  });
});

describe('Testing the driver module', () => {
  it('Should console.log some output on \'pickUpOrder\'', () => {

    let payload = { order: { storeName: 'The Stuff Store', orderId: '1234-5678-9012-3456', customerName: 'Alexis Riley', address: '987 Laurel Lane'}};

    driver.pickUpOrder(payload);
    expect(console.log).toHaveBeenCalled();
  });

  it('Should console.log some output on \'inTransit\'', () => {

    let payload = { order: { storeName: 'The Stuff Store', orderId: '1234-5678-9012-3456', customerName: 'Alexis Riley', address: '987 Laurel Lane'}};

    driver.inTransit(payload);
    expect(console.log).toHaveBeenCalled();
  });  
});