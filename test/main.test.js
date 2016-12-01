var persianAlphabet = ['ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س',
  'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'],
  persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

describe('Test ENV', function () {
  describe('check test suite is working', function () {
    it ('should pass anyway', function (done) {
      assert.ok(true);
      done();
    });
    
    it('should see the persianRex object', function () {
      assert.ok(typeof persianRex !== 'undefined');
      assert.ok(typeof persianRex.number !== 'undefined');
      assert.ok(typeof persianRex.letter !== 'undefined');
    });
  });
});

describe('RTL', function () {

  describe('letters', function () {
    it('should consider all Persian letters rtl', function () {
      persianAlphabet.forEach(function (letter) {
        assert.ok(persianRex.letter.test(letter));
      });
    });
  });

  describe('numbers', function () {
    it('should consider all Persian numbers rtl', function () {
      persianNumbers.forEach(function(number) {
        assert.ok(persianRex.rtl.test(number));
      });
    });
  });
  
  describe('punctuations', function () {
    it('should consider all Persian only punctuations rtl', function () {
      assert.ok(persianRex.rtl.test('،'));
      assert.ok(persianRex.rtl.test('٬'));
      assert.ok(persianRex.rtl.test('؟'));
      assert.ok(persianRex.rtl.test('«'));
      assert.ok(persianRex.rtl.test('»'));
      assert.ok(persianRex.rtl.test('؛'));
    });
    
    it('should not accept none rtl but persian punctuations rtl', function () {
      assert.notOk(persianRex.rtl.test('('));
      assert.notOk(persianRex.rtl.test(')'));
      assert.notOk(persianRex.rtl.test('{'));
      assert.notOk(persianRex.rtl.test('}'));
      assert.notOk(persianRex.rtl.test('['));
      assert.notOk(persianRex.rtl.test(']'));
      assert.notOk(persianRex.rtl.test('!'));
    });
  });
  
  describe('mixture of letter number and rtl punctuations', function () {
    it('should consider the mixture as rtl', function () {
      assert.ok(persianRex.rtl.test('؛۹ی'));        
    });
  });
  
  describe('negative rtl function test', function () {
    it('', function () {
      assert.notOk(persianRex.rtl.test('[ا]'));
      assert.notOk(persianRex.rtl.test('[۱]'));
    });
  });
  
  describe('hasRtl', function () {
    it('should consider rtl if a only rtl chars are passed', function () {
      assert.ok(persianRex.hasRtl.test('ی'));
      assert.ok(persianRex.hasRtl.test('۹'));
      assert.ok(persianRex.hasRtl.test('؛'));
      assert.ok(persianRex.rtl.test('؛۹ی'));        
    });

    it('should consider rtl if a sinlge rtl char is in string', function () {
      assert.ok(persianRex.hasRtl.test('aaیaa'));
      assert.ok(persianRex.hasRtl.test('a۹a'));
      assert.ok(persianRex.hasRtl.test('؛a'));
      assert.ok(persianRex.hasRtl.test('a؛۹ی'));        
    });
    
  });
});

describe('Persian', function () {
  
  describe('number', function () {
    it('single digit numbers', function () {
      persianNumbers.forEach(function(number) {
        assert.ok(persianRex.number.test(number));
      });
    });
    
    it('multi digit numbers', function () {
      assert.ok(persianRex.number.test('۱۲۳'));
      assert.ok(persianRex.number.test('۴۵۶۷۸'));
      assert.ok(persianRex.number.test('۹۹۹۹۹'));
    });    
    
    it('should not pass letters', function () {
      assert.notOk(persianRex.number.test('ابپ'));
    });
    
    it('should not pass mix of letters and numbers', function () {
      assert.notOk(persianRex.number.test('ابپ'));
      assert.notOk(persianRex.number.test('ا۲بپ'));
    });

    it('should not pass english numbers', function () {
      assert.notOk(persianRex.number.test('1'));
      assert.notOk(persianRex.number.test('12345'));
    });
  });
  
  describe('letter', function () {
    it('single leters', function () {
      persianAlphabet.forEach(function (letter) {
        assert.ok(persianRex.letter.test(letter));
      });
    });
    
    it('multi leters', function () {
      assert.ok(persianRex.letter.test('الب'));
      assert.ok(persianRex.letter.test('تثج'));
      assert.ok(persianRex.letter.test('چحخدذرز'));
    });    
    
    it('should not pass English letters', function () {
      assert.notOk(persianRex.letter.test('اaلب'));
      assert.notOk(persianRex.letter.test('a'));
    });    
    
    it('should not pass Persian numbers', function () {
      assert.notOk(persianRex.letter.test('ا۲لب'));
      assert.notOk(persianRex.letter.test('۲'));
    });    
    
  });
  
  describe('punctuation marks', function () {
      it('single punctuation marks', function () {
        assert.ok(persianRex.punctuation.test('.'));
        assert.ok(persianRex.punctuation.test('،'));
        assert.ok(persianRex.punctuation.test(':'));
        assert.ok(persianRex.punctuation.test('؟'));
        assert.ok(persianRex.punctuation.test('!'));
        assert.ok(persianRex.punctuation.test('«'));
        assert.ok(persianRex.punctuation.test('»'));
        assert.ok(persianRex.punctuation.test('؛'));
        assert.ok(persianRex.punctuation.test('-'));
        assert.ok(persianRex.punctuation.test('['));
        assert.ok(persianRex.punctuation.test(']'));
        assert.ok(persianRex.punctuation.test('('));
        assert.ok(persianRex.punctuation.test(')'));
        assert.ok(persianRex.punctuation.test('/'));
      });

      it('multi punctuation marks', function () {
        // assert.ok(persianRex.punctuation.test('.،:؟-!«»؛[]()/'));
        assert.ok(persianRex.punctuation.test('،؟«»؛'));
        assert.ok(persianRex.punctuation.test('،،،،،'));
        // assert.ok(persianRex.punctuation.test('!!!!!'));
      });
      
      it('should not accept numbers or letters', function () {
        assert.notOk(persianRex.punctuation.test('[۱]'));
        assert.notOk(persianRex.punctuation.test('[ا]'));
      }); 
  });
  
  describe('text', function () {
    it('should pass a single letter or number or punctuation', function () {
      assert.ok(persianRex.text.test('۱'));
      assert.ok(persianRex.text.test('ا'));
      assert.ok(persianRex.text.test('؟'));
    });    

    it('should pass multi letter or number or punctuation', function () {
      assert.ok(persianRex.text.test('۱۲۳'));
      assert.ok(persianRex.text.test('ابپ'));
      assert.ok(persianRex.text.test('؟؟'));
    });    
    
    it('should pass mixture of multi letter and number and punctuation', function () {
      assert.ok(persianRex.text.test('۱ا'));
      assert.ok(persianRex.text.test('ا۱۲۱۲۲ب۳پ'));
      assert.ok(persianRex.text.test('ا۱؟؟۲۱۲۲ب۳پ'));
    });
    
    it('should pass if Persian ltr punctuations are used', function () {
      assert.ok(persianRex.text.test('!ا([])۱؟؟۲۱۲۲ب۳پ'));
      assert.notOk(persianRex.text.test('!aaaaaا([])۱؟؟۲۱۲۲ب۳پ'));
    });    
        
    it('should not pass if contains no persian letter or number', function () {
      assert.notOk(persianRex.text.test('اب2پت'));
      assert.notOk(persianRex.text.test('ابaپت'));
    });    
  });
  
  describe('hasNumber', function () {
    it('should pass if a sinlge perian letter found', function () {
      assert.ok(persianRex.hasNumber.test('۰'));
      assert.ok(persianRex.hasNumber.test('1۱'));
      assert.ok(persianRex.hasNumber.test('1۲1'));
      assert.ok(persianRex.hasNumber.test('1۲1'));
      assert.ok(persianRex.hasNumber.test('ب۲ب'));
      assert.ok(persianRex.hasNumber.test('1۲1۲1۲1۲1'));
    });
  });
  
  describe('hasLetter', function () {
    it('should pass if a single perian char is found', function () {
      assert.ok(persianRex.hasLetter.test('ا'));
      assert.ok(persianRex.hasLetter.test('۱ا۱'));
      assert.ok(persianRex.hasLetter.test('1ا1'));
      assert.ok(persianRex.hasLetter.test('aaاaaa'));
      assert.ok(persianRex.hasLetter.test('aاaاaاa'));
    });
  });
  
  describe('hasPunctuation', function () {
      it('should pass if contains a persian punctuation', function () {
          assert.ok(persianRex.hasPunctuation.test('؟1'));
          assert.ok(persianRex.hasPunctuation.test('؟1'));
          assert.ok(persianRex.hasPunctuation.test('شسی؟بلا'));
          assert.ok(persianRex.hasPunctuation.test('شس!بلا'));
          assert.ok(persianRex.hasPunctuation.test('[!]'));
          assert.ok(persianRex.hasPunctuation.test('(a)'));
      });
  });
  
  describe('hasText', function () {
    it('should pass if a single perian char or number or punctuation is found', function () {
      assert.ok(persianRex.hasText.test('۰'));
      assert.ok(persianRex.hasText.test('1۱'));
      assert.ok(persianRex.hasText.test('1۲1'));
      assert.ok(persianRex.hasText.test('1۲1'));
      assert.ok(persianRex.hasText.test('ب۲ب'));
      assert.ok(persianRex.hasText.test('1۲1۲1۲1۲1'));
      assert.ok(persianRex.hasText.test('ا'));
      assert.ok(persianRex.hasText.test('۱ا۱'));
      assert.ok(persianRex.hasText.test('1ا1'));
      assert.ok(persianRex.hasText.test('aaاaaa'));
      assert.ok(persianRex.hasText.test('aاaاaاa'));
      assert.ok(persianRex.hasText.test('؟؟'));
      assert.ok(persianRex.hasText.test('a؟a؟a؟a'));
      assert.ok(persianRex.hasText.test('(a)'));
      assert.ok(persianRex.hasText.test('[a]'));
    });
  });
  
  describe('raw number ASCI ranges', function () {
    it('should be able to create custom RegExps', function () {
      var customRex = new RegExp('^' + persianRex.numbersASCIRange);
      assert.ok(customRex.test('۱۲۳123'));
      assert.notOk(customRex.test('123۱۲۳'));
    });
  });
  
  describe('raw letter ASCI ranges', function () {
    it('should be able to create custom RegExps', function () {
      var customRex = new RegExp('^' + persianRex.lettersASCIRange);
      assert.ok(customRex.test('ابپ123'));
      assert.notOk(customRex.test('123ابپ'));
    });
  });
  
  describe('raw punctuation ASCI ranges', function () {
    it('should be able to create custom RegExps', function () {
      var customRex = new RegExp('^' + persianRex.rtlPunctuationsASCIRange);
      assert.ok(customRex.test('؟۱۲۳123'));
      assert.notOk(customRex.test('123۱۲۳؟؟'));

      var customRex2 = new RegExp('^' + persianRex.ltrPunctuationsASCIRange);
      assert.ok(customRex2.test('.abc'));
      assert.notOk(customRex2.test('؟.[a]'));
    });
  });
  
});
