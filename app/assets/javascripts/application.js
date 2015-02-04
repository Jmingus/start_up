// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
    $("#new_question").on("ajax:success", function(e, data, status, xhr) {
        $("#new_question").append(status)
        $('#question-container').append("<p>" + data["message"] + "</p>")
        // + "<p>" + data["created_at"] "</p>")
    }).on("ajax:error", function(e, xhr, status, error) {
        $("#new_question_message").append("<p>ERROR</p>")
    });
});

$(document).ready(function () {
    $("#new_answer").on("ajax:success", function(e, data, status, xhr) {
        $("#new_answer").append(status)
        $('#answer-container').append("<p>" + data["message"] + "</p>")
        // + "<p>" + data["created_at"] "</p>")
    }).on("ajax:error", function(e, xhr, status, error) {
        $("#new_answer_message").append("<p>ERROR</p>")
    });
});