function fun() {

    $.post( "php/login.php",
      {
      username: $('#username').val(),
      password: $('#password').val(),
      },
      function( data ) {
        console.log(data);
      });
}

$(function() {


    $( "#dialog-confirm" ).dialog({
      autoOpen: false,
      resizable: false,
      height: "auto",
      width: 400,
      draggable: false,
      modal: true,
      dialogClass: 'no-close success-dialog',
      buttons: {
        "Login": function() {
          fun();
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });

    $('#login').click(function(){

       $('#dialog-confirm').dialog('open');
    });
});
