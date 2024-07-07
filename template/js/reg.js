$(document).ready(function() {
  $('#profileCheck').change(function() {
    if($(this).is(":checked")) {
      $('#registrationForm').hide();
      $('#authorizationForm').show();
      $('#authorizationForm [name="action"]').val('login');
      $('#noProfileCheck').prop('checked', false);
    } else {
      $('#authorizationForm').hide();
      $('#registrationForm').show();
      $('#authorizationForm [name="action"]').val('');
    }
  });

  $('#noProfileCheck').change(function() {
    if($(this).is(":checked")) {
      $('#authorizationForm').hide();
      $('#registrationForm').show();
      $('#authorizationForm [name="action"]').val('');
      $('#profileCheck').prop('checked', false);
    } else {
      $('#registrationForm').hide();
      $('#authorizationForm').show();
      $('#authorizationForm [name="action"]').val('login');
    }
  });
});


