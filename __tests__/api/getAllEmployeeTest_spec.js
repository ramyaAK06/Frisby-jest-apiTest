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

  // GET request to fetch all the employee details

  it ('GET should return all employee details and a status of 200', function (done) {
    return frisby
      .get(baseUrl+'employees')
      .expect('status', 200)
      .inspectJSON()
      .done(done)
  });