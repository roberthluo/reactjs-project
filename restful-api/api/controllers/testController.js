'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_users = function(req, res)
{
  user.find({}, function(err, user)
  {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function(req, res)
{
  var new_user = new User(req.body);
  new_user.save(function(err, user)
  {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res)
{
  User.findByID(req.params.UserID, function(err, user)
  {
      if(err)
        res.send(err);
      res.json(user);
  });
};

exports.update_a_user = function(req, res)
{
  User.findOneAndUpdate({ _id: req.params.userId}, function(err, user)
  {
    if(err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res)
{
  User.remove({ _id: req.params.userId}, function(err, user)
  {
    if(err)
      res.send(err);
    res.json({ message: 'User successfully Deleted'});
  });
};
