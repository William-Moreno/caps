# CAPS

## Overview

#### Lab 11
Begin the build of an application for a company called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, be notified that their customers received what they purchased.

#### Lab 12
In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called `socket.io` so that we can do networked events. `Socket.io` manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

## Author: William Moreno

## Collaboration

- Carly Dekock
- James Gerstenberger
- Jason Dormier
- Jason Quaglia
- Nick Magruder

## Dependencies / Getting Started

clone the repository

run `npm install` in the terminal

In three separate terminals navigate to caps directory and run the following commands in order:
1. node /src/server/server.js
1. node /src/driver/client.js
1. node /src/vendor/client.js


## Daily Pull Request

Lab 11 work was accomplished on the `events` branch. The pull request to merge the code into the `main` branch is here:

- [Pull Request](https://github.com/William-Moreno/caps/pull/1)

Lab 12 work was accomplished on the `socket.io` branch. The pull request to merge the code into the `main` branch is here:

- [Pull Request](https://github.com/William-Moreno/caps/pull/3)


#### Lab 11 working features implemented:
- Created `events.js` as a global event pool
- Created `caps.js` as the main hub application
- Created `vendor.js` vendor module
- Created `driver.js` driver module

#### Lab 12 working features implemented:
- Created folders for `server`, `driver` and `vendor`
- Created `server.js` in server folder and `client.js` in driver and vendor folders
- Refactored lab 11 code into new files and implemented `socket.io` connections
- Removed files created in lab 11

## Tests

#### Lab 11
Test suite generated to test event handlers:

  - All tests successfully passed.

#### Lab 12
Removed previous obsolete test suite

  - No tests required for lab 12

## UML

UML drawing created with [miro](https://miro.com/)

![UML Diagram](./assets/socket-io-lab12.PNG)