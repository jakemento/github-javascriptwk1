var apiKey = require('./../.env').apiKey;



exports.getRepos = function() {
  $.get('https://api.github.com/users/'+ username + '/repos?access_token=' + apiKey).then(function(response) {
    console.log(response);
    for (i = 0; i < response.length; i++) {
      $('.showName').append("<li><strong>repo name:</strong>" + response[i].name + "</li>");
      $('.showName').append("<li>description:" + response[i].description + "</li>");
      $('.showName').append("<li>date:" + response[i].created_at + "</li><br>");

    }
  }).fail(function(error) {
    $('.showName').text(error.message);
  });
};
