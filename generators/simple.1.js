
function* messagesGen(name) {
  yield `hello ${name}!`;
  
  yield "i hope you are enjoying the blog posts";
  
  if (name.startsWith("X")) {
    yield `it's cool how your name starts with X,  ${name}`;
  }
  
  yield "see you later!";
}





// it returns (a paused) Generator object
let myGenerator = messagesGen("Xjorendorff");

console.log(myGenerator.next());

if(!myGenerator.done) {
  for(let msj of myGenerator) {
    console.log(msj);
  }
}
