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
      buttons: [
    {
      text: "Login",
      click: function() {
        if (!$('#username').val()) {
          alert("Username is empty");
        }else if (!$('#password').val()) {
          alert("Password is empty");
        }else {
          fun();
          $( this ).dialog( "close" );
        }
      },

      // Uncommenting the following line would hide the text,
      // resulting in the label being used as a tooltip
      //showText: false
    },{
      text: "Close",
      click: function() {
        $( this ).dialog( "close" );
      },
    }
  ]
});

    $('#login').click(function(){
       $('#dialog-confirm').dialog('open');
    });
});
