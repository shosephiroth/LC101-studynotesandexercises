function reverseCharacters(str) {
   strArray = str.split("").reverse().join(str);
  return strArray;
}

testReverseString = 'The freaks come out at night'
reverseCharacters(testReverseString);
