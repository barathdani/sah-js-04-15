//4th part
//$('selector').action();
//$('div').css('background','purple');
//$('.first').toggleClass('hidden');
$('p').css('background', 'purple');
//$('.first').toggleClass('hidden');
$('p').text('<strong>Hello world<strong>');
$('p').html('<strong>hello world</strong>');
$('p').append('<strong>another<strong>');

$('button').click(() =>{
  $('.first').toggleClass('hidden');
});
//From 1st part to the 3rd
console.log("javascript is working");

let post = {
    title: "My post",
    description: "My first post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let colors = ["orange", "blue", "green", "purple"];

console.log(post);
console.log(colors);


let age = 33;
if (age > 18){
  console.log("You are an adult");
}
else {
  console.log("you're a kid!");
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}
 let posts = [{
   title: "First post",
   likeCount: 12
 }, {
   title: "Second post",
   likeCount: 222
 }];

 console.log(colors);

 let myFunction = x => {
   console.log(x);
 }

 let greeter = name => {
   consol.log(`Hello, ${name}`);
 }

 greeter("Adam");
 greeter("Peter");
 greeter("Máté");

colors.forEach(color =>{
  console.log(color);
})


console.log("this is the end of the code");
