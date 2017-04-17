// FIBONACCI

// enunciado a)
var arrFibo = [];
function fibonacci (number) {
	for (var i = 0; i <= number; i++) {
    if (i < 2) {
      arrFibo.push(i);
    } else {
      arrFibo.push(arrFibo[i - 1] + (arrFibo[i - 2]));
    }    
  }
  console.log(arrFibo);
  console.log(arrFibo[10]);
}

function fiboPyramid (number) {
  var arrPyramid = [];
 	for (var i = 0; i <= number; i++) {
    if (i < 2) {
      arrPyramid.push(i);
      console.log(arrPyramid.join(" "));
    } else {
      arrPyramid.push(arrPyramid[i - 1] + (arrPyramid[i - 2]));
      console.log(arrPyramid.join(" "));
    }
    
  }
  for (var i = number - 1; i >= 0; i--) {
      arrPyramid.pop();
      console.log(arrPyramid.join(" ")); 
  }
}

fibonacci(10);
fiboPyramid(10);

// enunciado b)
var code1 = 1234;
var code2 = 4321;
var num = code1.toString();
var num2 = code2.toString();

function codeScript (code1, code2) {   
  num = num[1] + num[2] + num[3] + num[0];
  console.log("num 1 " + num * 2);
  num2 = num2[1] + num2[2] + num2[3] + num2[0];
  console.log("num 2 " + num2 * 2);
}

codeScript(code1, code2);
codeScript(code1, code2);
codeScript(code1, code2);
codeScript(code1, code2);

// enunciado c)
var word = "SKYLAB";

function encryptAndDecrypt (word) {
  console.log("Original word: " + word);
  var wordFirst = word.substring(0, (word.length / 2));
  var wordSecond = word.substring((word.length / 2), word.length);
  word = [];
  for (var i = 0; i < wordFirst.length; i++) {
    word.push(wordFirst[i]);
    word.push(wordSecond[i]);
  }
  console.log("Word encrypted: " + word.join(""));
	
  wordDecrypted = [];
  for (var i = 0; i < word.length; i += 2) {
    wordDecrypted.push(word[i]);
  }
  for (var i = 1; i < word.length; i += 2) {
    wordDecrypted.push(word[i]);
  }
  console.log("Word decrypted: " + wordDecrypted.join(""));

}

encryptAndDecrypt(word);
