function charPosition(data){
  var object = {};
  var stringArray = data.split("").join('').split("");
  var array = [];
  for(var i = 0; i < stringArray.length; i++){

    if(object[stringArray[i]] === undefined){

      object[stringArray[i]] = [i] ;
    }
    else{
     object[stringArray[i]].push(i);

    }

    }
      return object;
    }
x
//Test Case
console.log(charPosition("lighthouse in the house"));