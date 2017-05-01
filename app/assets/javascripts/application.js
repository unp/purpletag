// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets
//= require bootstrap/modal
//= require bootstrap-select
//= require bootstrap/alert
//= require bootstrap/dropdown

$(function (){
  $("#request").click(function() {
    $("#signup-modal").modal('toggle');
  });

  $("#signup-form").submit(function() {
    $.ajax({
      dataType: "json",
      data: {
        user: {
          name: $("#signup-form-name").val(),
          email: $("#signup-form-email").val(),
          default_airport: $("#signup-form-default-airport").val()
        }
      },
      url: "/signup.json",
      method: "POST",
      success: function(data){
        $("#signup-form").hide();
        $("#form-success").show();
        fbq('track', 'CompleteRegistration', {
          name: $("#signup-form-name").val(),
          email: $("#signup-form-email").val(),
          default_airport: $("#signup-form-default-airport").val()
        });
      },
      error: function(xhr) {
        $("#signup-errors").html('There was an error signing up. Please make sure your name and email address are correct.');
      }
    });
    return false;
  });
});
