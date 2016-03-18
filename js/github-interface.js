var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').getRepos;



// var username;

$(document).ready(function() {
  $('#getUsername').click(function() {
    username = $('#username').val();
    $('#username').val("");
    getRepos();
  
  });
});
