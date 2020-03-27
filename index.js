//Node.js 10.14.0
//Plain Javascript and Node.js is supported
// html/css is not supported here 

var name="Sakinbarnes Samuel";
var courses=["Html", "Css", "Js", "C#"];
console.log(name);
if((courses.length) % (2) == 0){
  for(var i=0; i<courses.length; i++){
    console.log(courses[i+2]);
  }
}
else{
  for(var i=1; i<courses.length; i++){
    console.log(courses[i]);
  }
}