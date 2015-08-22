// js/services.js
angular.module('factories', [])
  .factory('Users', function(){
    var users = [];
    return {
        add: function(user){
          users.push(user);
        },
        all: function(){
            return users;
        }
    };
  });
