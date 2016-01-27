# persianRex
 A minimal library of useful Persian / Farsi regular expressions for browser and NodeJS environment

 ![travis-ci](https://travis-ci.org/ImanMh/persianRex.svg)

##Places that you can use persianRex
<img src="http://www.themeyab.com/img/blog/github-persianRex.jpg" alt="persianRex features"/>

##Getting started
You can download the latest release form the [release page](https://github.com/ImanMh/persianRex/releases) or use your preferred package manager.

via npm 

```npm install persian-rex --save```

via bower

```bower install persian-rex --save```

Once downloaded you can include the dist file like this: 

```html
 <scirpt src="bower_components/persian-rex/dist/persian-rex.js"></script>
```

Or if you are using node:

```js
 var persianRex = require('persian-rex');
```

###Detecting Persian Numbers
The ```number``` RegExp will match any string that only contains Persian numbers.
```js
 if (persianRex.number.test('۱۲۳'))
  makeInputsRTL();
```

###Detecting Persian Letters
The ```letter``` RegExp will match any string that only contains Persian letters.
```js
 if (persianRex.letter.test('ابپ'))
  makeInputsRTL();
```

###Detecting Persian Text
The ```text``` RegExp will match any string that only contains Persian letters, Persian numbers or Persian punctuations.
```js
 if (persianRex.text.test('ابپ۱؟ )()۲۳'))
  doSomething();
```

###Detecting RTL characters
From version 2 of this library, ```rtl``` RegExp is added to give you the ability to detect if tested string contains only rtl characters or not. rtl characters are Persian letters, Persian numbers and only the punctuations that are rtl (not [] or / that are also used in English). This is added so that you can be absolutely sure that you are dealing with a rtl text. Here is the example: 
```js
  if (persianRex.rtl.test('،'))
  doSomething();
    
  if (persianRex.rtl.test('!'))
    doSomething(); //this line will not be executed
```

###Punctuations
Since version ```1.3.0``` punctuations are added to the library and they are combined with the ```text``` method to create a more natural detection of Persian text. It's rare that anybody wants to test a string against Persian punctuation but we decided to expose is for our users. Here is how to use it: 
```js
 if (persianRex.punctuation.test('!()[]،؟«»؛'))
  doSomething();
```

###Using has prefix
You can prefix any of the above methods with has.

```js
 if (persianRex.hasNumber.test('ابپ۱۲۳۴۵۶123abc'))
  doSomething();
```

The if condition is true, because the string has a persian number in it. You can use ```hasLetter``` and ```hasText``` as well.

###Lower level usage
You can also get the ASCI code ranges for Persian numbers and Persian letters to make your custom RegExps.
```js
  var customLettersRegular = new RegExp('^' + persianRex.lettersASCIRange);
  var customNumberRegular = new RegExp('^' + persianRex.numbersASCIRange);
  var customNumberRegular = new RegExp('^' + persianRex.rtlPunctuationsASCIRange);
  var customNumberRegular = new RegExp('^' + persianRex.ltrPunctuationsASCIRange);
```

#Sponsors
Many of regular expressions in this project is extracted from larger projects such as [Themeyab.com](http://themeyab.com),
If you think I'm are missing an important regular expression, feel free to open an issue on this repository and I will include it in the next version.

<a href="http://themeyab.com" target="_blank"><img src="http://www.themeyab.com/img/themeyab-logo.png" alt="Themeyab Logo" style="width:300px;height:auto;"></a>
