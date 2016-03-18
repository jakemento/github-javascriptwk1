var apiKey = require('./../.env').apiKey;
var username;

$(document).ready(function() {
  $('#getUsername').click(function() {
    username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/'+ username + '/repos?access_token=' + apiKey).then(function(response) {
      console.log(response);
      for (i = 0; i < response.length; i++) {
        $('.showName').append("<li>repo name:" + response[i].name + "</li>");
        $('.showName').append("<li>description:" + response[i].description + "</li>");
      }
    }).fail(function(error) {
      $('.showName').text(error.message);
    });
  });
});
