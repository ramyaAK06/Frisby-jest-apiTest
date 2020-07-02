const frisby = require('frisby')
const properties = require('/Users/ramyaakulkarni/Downloads/APITestUsingFrisby/resources/properties.js'),
    baseUrl = properties["baseUrl"]

frisby.globalSetup({
    request: {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  });

// create employee through POST HTTP method

it ('POST should return a status of 200', function () {
    return frisby
      .post(baseUrl+'create', {
       'name':'test1',
       'age':'23',
       'salary':'12000'
      })
      .expect('status', 200)
      .inspectRequest()
      .inspectResponse()
      .inspectJSON()
      .inspectBody()
      .inspectStatus()
  });