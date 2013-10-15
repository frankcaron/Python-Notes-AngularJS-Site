var Users = $resource('/user/:userId', { userId: '@id' });
var user = Users.get({ userId: 123 }, function () {
  user.abc = true;
  user.$save();
});
