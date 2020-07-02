const frisby = require('frisby')
const properties = require('/Users/ramyaakulkarni/Downloads/APITestUsingFrisby/resources/properties.js'),
    baseUrl = properties["baseUrl"]
let id = '21';

frisby.globalSetup({
    request: {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  });

// deleting an employee details using DELETE HTTP method and Employee ID as param

it ('DELETE should return a status of 200 for successful deletion', function () {
    return frisby
      .del(baseUrl+'delete/'+id)
      .expect('status', 200)
      .inspectStatus()
  });
