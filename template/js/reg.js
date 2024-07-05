

$(document).ready(function() {
    $('#profileCheck').change(function() {
      if($(this).is(":checked")) {
        $('#registrationForm').hide();
        $('#authorizationForm').show();
        $('#noProfileCheck').prop('checked', false);
      } else {
        $('#authorizationForm').hide();
        $('#registrationForm').show();
      }
    });
  
    $('#noProfileCheck').change(function() {
      if($(this).is(":checked")) {
        $('#authorizationForm').hide();
        $('#registrationForm').show();
        $('#profileCheck').prop('checked', false);
      } else {
        $('#registrationForm').hide();
        $('#authorizationForm').show();
      }
    });
  });