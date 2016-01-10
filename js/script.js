$(document).ready(function(){

	$(".tester").keyup(function(){
        var value = $(this).val();

          if ( value == persianRex.number.test('۱۲۳')){
            $(this).addClass("passed");
          } else if (value == persianRex.number.test('123')) {
            $(this).addClass("failed");
          }                
        
    });
});