var obj1={ name:"person 1", age:5};
var obj2={age:5 , name:"person 1"};
var equal = JSON.stringify(obj1)===JSON.stringify(obj2)
console.log(equal)
