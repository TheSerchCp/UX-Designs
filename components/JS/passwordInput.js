feather.replace({ 'aria-hidden': 'true' });

$(".togglePassword").click(function (e) {
      e.preventDefault();
      var type = $(this).parent().parent().find(".password").attr("type");
      console.log(type);
      if(type == "password"){
          $(".input-icon").removeClass("bi-eye-fill").addClass("bi-eye-slash-fill")
          $(this).parent().parent().find(".password").attr("type","text");
      }else if(type == "text"){
          $(".input-icon").removeClass("bi-eye-slash-fill").addClass("bi-eye-fill")
          $(this).parent().parent().find(".password").attr("type","password");
      }
  });

  $('#btn').click(function(){
    $('.search.input-group')
    .removeClass('pull-right')
    .addClass('pull-left')
  })