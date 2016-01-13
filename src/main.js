(function () {
  persianRex = {};
  
  var numberRange = '[\u06F0-\u06F9]',
      charRange = ['[\\s,\u06A9\u06AF\u06C0\u06CC\u060C',
				'\u062A\u062B\u062C\u062D\u062E\u062F',
				'\u063A\u064A\u064B\u064C\u064D\u064E',
				'\u064F\u067E\u0670\u0686\u0698\u200C',
				'\u0621-\u0629\u0630-\u0639\u0641-\u0654]'].join(),
      punctuationRange = '(\\.|،|:|؟|\\!|«|»|؛|\\-|\\[|\\]|\\(|\\)|\\/)';
  
  persianRex.number = new RegExp('^' + numberRange + '+$');
  persianRex.letter = new RegExp('^' + charRange + '+$');
  persianRex.punctuation = new RegExp('^' + punctuationRange + '+$');
  persianRex.text = new RegExp('^' + combineRegExps(numberRange, charRange, punctuationRange) + '+$');
  
  persianRex.hasNumber = new RegExp(numberRange);
  persianRex.hasLetter = new RegExp(charRange);
  persianRex.hasPunctuation = new RegExp(punctuationRange);
  persianRex.hasText = new RegExp(combineRegExps(numberRange, charRange, punctuationRange));
  
  persianRex.numbersASCIRange = numberRange;
  persianRex.lettersASCIRange = charRange;
  persianRex.punctuationsASCIRange = punctuationRange;

  function combineRegExps () {
		var combined = '(';
		for (var i = 0; i < arguments.length; i++) {
			combined += '(';
			if (i != arguments.length - 1)
				combined += arguments[i] + ')|';
			else
				combined += arguments[i] + ')';
		}
		return combined + ')';
	}
  
  //AMD wrapper 
  if (typeof define !== 'undefined' ) {
    define([], persianRex);
  //NodeJS wrapper
  } else if (typeof exports !== 'undefined') {
    
    exports.number = persianRex.number;
    exports.letter = persianRex.letter;
    exports.punctuation = persianRex.punctuation;
    exports.text = persianRex.text;
    exports.hasNumber = persianRex.hasNumber;
    exports.hasLetter = persianRex.hasLetter;
    exports.hasPunctuation = persianRex.hasPunctuation;
    exports.hasText = persianRex.hasText;
    exports.lettersASCIRange = charRange;
    exports.numbersASCIRange = numberRange;
    exports.punctuationsASCIRange = punctuationRange;
  } else {
    window.persianRex = persianRex;  
  }
})();
