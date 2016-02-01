$(document).ready(function(){

	$("#tester-persian").keyup(function(){
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
	
	
	$("#tester-rtl").keyup(function(){
		var $textArea = $(this),
				userText = $textArea.val();
		
		$textArea.removeClass('passed failed');

		if (userText.length === 0)
			return;
		
		if ( persianRex.rtl.test(userText) )
		  $textArea.addClass("passed");
		else
		  $textArea.addClass("failed");
  });
	
});
