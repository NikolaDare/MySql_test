function functionName() {
          $.post( "php/reg.php",
            {
            username: $('#username').val(),
            password: $('#password').val(),
            email: $('#email').val()
            },
            function( data ) {
              $('body').load(data);
            });
}
