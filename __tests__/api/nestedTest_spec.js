const frisby = require('frisby');
const Joi = frisby.Joi; // Frisby exposes Joi for convenience

describe('Test for Displaying and validating the comments on a Post', function () {

  it('should return all posts and first post should have comments', function () {

    return frisby
      .get('http://jsonplaceholder.typicode.com/posts')
      .expect('status', 200)
     
      .expect('jsonTypes', '*', {
        userId: Joi.number(),
        id: Joi.number(),
        title: Joi.string(),
        body: Joi.string()
      })

      .then(function (res) { // res = FrisbyResponse object
        
        let postId = res.json[0].id; // Get first post's comments
    
        return frisby
          .get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
          .expect('status', 200)
          .expect('json', '*', {
            postId: postId
          })
          .expect('jsonTypes', '*', {
            postId: Joi.number(),
            id: Joi.number(),
            name: Joi.string(),
            email: Joi.string().email(),
            body: Joi.string()
          })
          .inspectJSON()
      });
  });
});
