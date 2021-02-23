const _ = require('lodash');
const evens = _.filter([1, 2, 3, 4, 5, 6, 7, 8], function(num){ return num % 2 == 0; });
console.log(evens);