var a = Object.prototype.toString;
console.log(a.call("aaa"));   //String
console.log(a.call(1));       //Number
console.log(a.call(true));    //Boolean
console.log(a.call(null));     //Null
console.log(a.call(undefined));//Undefined
console.log(a.call([]));       //Array
console.log(a.call(function() {}));//Function
console.log(a.call({}));       //Object
