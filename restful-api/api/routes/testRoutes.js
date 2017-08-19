'use strict'

module.exports = function(app)
{
  var user = require('../controllers/testController');


  // test Routes
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);

  app.route('users/:userID')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);

}
