const frisby = require('frisby')
const properties = require('/Users/ramyaakulkarni/Downloads/APITestUsingFrisby/resources/properties.js'),
    baseUrl = properties["baseUrl"]

frisby.globalSetup({
    request: {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      }
    }
  });

  it ('Status check', function (done) {
    return frisby
      .get(baseUrl+'employees')
      .expect('status', 200)
      .inspectStatus()
      .done(done)
  });

  it ('header key value check', function (done) {
    return frisby
      .get(baseUrl+'employees')
      .expect('header', 'Content-Type', 'application/json;charset=utf-8')
      .inspectHeaders()
      .inspectRequestHeaders()
      .inspectResponse()
      .done(done)
  });