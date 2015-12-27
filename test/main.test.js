describe('Main Unit Test Suite', function () {

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
  
  describe('number', function () {
    it('single digit numbers', function () {
      assert.ok(persianRex.number.test('۰'));
      assert.ok(persianRex.number.test('۱'));
      assert.ok(persianRex.number.test('۲'));
      assert.ok(persianRex.number.test('۳'));
      assert.ok(persianRex.number.test('۴'));
      assert.ok(persianRex.number.test('۵'));
      assert.ok(persianRex.number.test('۶'));
      assert.ok(persianRex.number.test('۷'));
      assert.ok(persianRex.number.test('۸'));
      assert.ok(persianRex.number.test('۹'));
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
      assert.ok(persianRex.letter.test('ا'));
      assert.ok(persianRex.letter.test('ب'));
      assert.ok(persianRex.letter.test('پ'));
      assert.ok(persianRex.letter.test('ت'));
      assert.ok(persianRex.letter.test('ث'));
      assert.ok(persianRex.letter.test('ج'));
      assert.ok(persianRex.letter.test('چ'));
      assert.ok(persianRex.letter.test('ح'));
      assert.ok(persianRex.letter.test('خ'));
      assert.ok(persianRex.letter.test('د'));
      assert.ok(persianRex.letter.test('ذ'));
      assert.ok(persianRex.letter.test('ر'));
      assert.ok(persianRex.letter.test('ز'));
      assert.ok(persianRex.letter.test('س'));
      assert.ok(persianRex.letter.test('ش'));
      assert.ok(persianRex.letter.test('ص'));
      assert.ok(persianRex.letter.test('ض'));
      assert.ok(persianRex.letter.test('ط'));
      assert.ok(persianRex.letter.test('ظ'));
      assert.ok(persianRex.letter.test('ع'));
      assert.ok(persianRex.letter.test('غ'));
      assert.ok(persianRex.letter.test('ف'));
      assert.ok(persianRex.letter.test('ق'));
      assert.ok(persianRex.letter.test('ک'));
      assert.ok(persianRex.letter.test('گ'));
      assert.ok(persianRex.letter.test('ل'));
      assert.ok(persianRex.letter.test('م'));
      assert.ok(persianRex.letter.test('ن'));
      assert.ok(persianRex.letter.test('و'));
      assert.ok(persianRex.letter.test('ه'));
      assert.ok(persianRex.letter.test('ی'));
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
  
  describe('text', function () {
    it('should pass a single letter or number', function () {
      assert.ok(persianRex.text.test('۱'));
      assert.ok(persianRex.text.test('ا'));
    });    

    it('should pass multi letter or number', function () {
      assert.ok(persianRex.text.test('۱۲۳'));
      assert.ok(persianRex.text.test('ابپ'));
    });    
    
    it('should pass mixture of multi letter and number', function () {
      assert.ok(persianRex.text.test('۱ا'));
      assert.ok(persianRex.text.test('ا۱۲۱۲۲ب۳پ'));
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
  
  describe('hasText', function () {
    it('should pass if a single perian char or number is found', function () {
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
    });
  });
  
});
