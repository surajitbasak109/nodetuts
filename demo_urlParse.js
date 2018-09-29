'use strict';
let url = require('url');
let adr = 'http://localhost:8080/?year=2018&month=September';

var q = url.parse(adr, true);

console.log("Host:", q.host);
console.log("Path:", q.pathname);
console.log("Search:", q.search);

var qData = q.query;
console.log("Month:", qData.month);
