(function () {
  persianRex = {};
  
  var persianNumberRange = '[\u06F0-\u06F9]',
      persianCharRange = ['[\\s,\u06A9\u06AF\u06C0\u06CC\u060C',
				'\u062A\u062B\u062C\u062D\u062E\u062F',
				'\u063A\u064A\u064B\u064C\u064D\u064E',
				'\u064F\u067E\u0670\u0686\u0698\u200C',
				'\u0621-\u0629\u0630-\u0639\u0641-\u0654]'].join();
  
  persianRex.number = new RegExp('^' + persianNumberRange +'+$');
  persianRex.letter = new RegExp('^' + persianCharRange +'+$');
  persianRex.text = new RegExp('^' + combineRegExps(persianNumberRange, persianCharRange) + '+$');
  
  persianRex.hasNumber = new RegExp(persianNumberRange);
  persianRex.hasLetter = new RegExp(persianCharRange);
  persianRex.hasText = new RegExp(combineRegExps(persianNumberRange, persianCharRange));
  
  persianRex.lettersASCIRange = persianCharRange;
  persianRex.numbersASCIRange = persianNumberRange;

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
    exports.text = persianRex.text;
    exports.hasNumber = persianRex.hasNumber;
    exports.hasLetter = persianRex.hasLetter;
    exports.hasText = persianRex.hasText;
    exports.lettersASCIRange = persianCharRange;
    exports.numbersASCIRange = persianNumberRange;
    
  } else {
    window.persianRex = persianRex;  
  }
})();
