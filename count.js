function countLetters(data){
  var object = {};
  var string = data.split(" ").join('').split('');
  console.log(string);
  for(var i = 0; i < string.length; i++){
    if(object[string[i]]=== undefined){
      object[string[i]]=1;
    }
    else{
      object[string[i]]++;
    }
  }
  return object;
}

//Test Case
console.log(countLetters("lighthouse in the house"));