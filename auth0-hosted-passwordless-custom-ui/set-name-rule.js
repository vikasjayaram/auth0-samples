function (user, context, callback) {
  user.user_metadata = user.user_metadata || {};
  if (context.request.query.first_name && context.request.query.last_name) {
   var first_name = context.request.query.first_name;
   var last_name = context.request.query.last_name;
   user.user_metadata = {
     first_name: first_name,
     last_name: last_name
   };
   auth0.users.updateUserMetadata(user.user_id, user.user_metadata)
    .then(function(){
       callback(null, user, context);
    })
    .catch(function(err){
       callback(err);
    });
  } else {
   callback(null, user, context);
  }
}