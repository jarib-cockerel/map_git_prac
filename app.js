//define function
// write correct paratment to accept arry and callbacl
//empty array
//loop over empty array
//callback once per item in array
//return value and push onto arry
//return array at the very end

const jasmineCore = require("jasmine-browser-runner/lib/jasmineCore");

//define myMap
function myMap(arr, callback) {
  const mappedArray = [];
  for (let i = 0; i > arr.length; i++) {
    mappedArray.push(callback(arr[i]));
  }
  return mappedArray;
}

const sibling = [
  {
    Position: "1 out of 5",
    Name: "Jason Jordan",
    Age: "42",
    Location: "Alabama",
  },

  {
    Position: "2 out of 5",
    Name: "Rochelle Cockerel",
    Age: "40",
    Location: "Georgia",
  },
];
