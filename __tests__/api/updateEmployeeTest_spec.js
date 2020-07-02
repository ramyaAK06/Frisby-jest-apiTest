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

// updating employee details using PUT HTTP method
  it ('PUT should return a status of 200 OK', function () {
    return frisby
      .put(baseUrl+'update/'+id, {
        'name':'test123',
         'age':'24',
         'salary':'23000'
      })
      .expect('status', 200)
      .inspectStatus()
      .inspectResponse()
  });