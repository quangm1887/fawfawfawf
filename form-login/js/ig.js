$(document).ready(function(){
    $('#eye').click(function(){
       $(this).toggleClass('open');
       $(this).children('i').toggleClass('fa-eye-slash fa-eye');
       if($(this).hasClass('open')){
           $(this).prev().attr('type', 'Text');
       }
       else{
           $(this).prev().attr('type', 'password');
       }

   });
});
$(document).ready(function(){
    $('#eyei').click(function(){
       $(this).toggleClass('open');
       $(this).children('i').toggleClass('fa-eye-slash fa-eye');
       if($(this).hasClass('open')){
           $(this).prev().attr('type', 'Text');
       }
       else{
           $(this).prev().attr('type', 'password');
       }

   });
});
