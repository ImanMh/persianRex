$(document).ready(function(){

	$("#tester").keyup(function(){
		var $textArea = $(this),
				userText = $textArea.val();
		
		$textArea.removeClass('passed failed');

		if (userText.length === 0)
			return;
		
		if ( persianRex.text.test(userText) )
		  $textArea.addClass("passed");
		else
		  $textArea.addClass("failed");
		                      
  });
});
