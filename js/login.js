function fun() {

  $.post("php/login.php", {
      username: $('#username').val(),
      password: $('#password').val(),
    },
    function(data) {
      console.log(data);
    });
}

$(function() {
  var slickOpts = {
       dots: true,
       infinite: true,
       speed: 500,
       autoplay: true
   };
  $('#demo').carousel();
  $("#dialog-confirm").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: 400,
    draggable: false,
    modal: true,
    dialogClass: 'no-close success-dialog',
    buttons: [{
      text: "Login",
      click: function() {
        if (!$('#username').val()) {
          alert("Username is empty");
        } else if (!$('#password').val()) {
          alert("Password is empty");
        } else {
          fun();
          $(this).dialog("close");
        }
      },

    }, {
      text: "Close",
      click: function() {
        $(this).dialog("close");
      },
    }]
  });

  $('.login').click(function() {
    $('#dialog-confirm').dialog('open');
  });
  $('body').on('click', '.ui-widget-overlay', function(e){
    $('#dialog-confirm').dialog('close');
  });

  $('.txtnews').on('click',function() {
    $.get("php/sub.php", {
      ename: $('#em').val()
    },function (res, status) {
      // var data = JSON.parse(res);
      console.log('data',res);
      console.log('status',status);
    });
  });
});
