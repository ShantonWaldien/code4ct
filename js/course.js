

// 'use strict';

// // let items = document.getElementsByClassName('item');
// // console.log(items);

// let cart = [
//     // { name: name, price: price,},
//     // { name: name, price: price,},
//     // { name: name, price: price,},
//     // { name: name, price: price,},
//     // { name: name, price: price,},
//     // { name: name, price: price,},
// ];

// function addCart(name, price) {

//     //create item
//     let item = {
//         name: name,
//         price: price,
//     };

//     //check if array empty
//     if (cart.length != 0) {
//         //search an item in an array
//         let check = false;
//         for (let cartItem in cart) {
//             if (cart[cartItem].name === item.name) {
//                 check = true;
//             }
//         }

//         //if check returns false,  item was not found in the array.
//         if (!check) { cart.push(item) }

//         //else push to array
//     } else {
//         cart.push(item);
//     }

//     //get cart div
//     let div = document.getElementById('cart');
//     //clear cart
//     div.innerHTML = "";

//     //show cart with updated array
//     for (let value in cart) {

//         // Create a <li> node
//         let node = document.createElement("LI");
//         // Create a text node               
//         let textnode = document.createTextNode(cart[value].name);

//         // Append the text to <li>
//         node.appendChild(textnode);

//         // Append <li> to <ul> with id="myList"                             
//         div.appendChild(node);
//     }
// }

//STILL TO DO
//remove an item from cart
//write a function that calculates the total of the cart
//add a quantity to cart items
//be able to increase and decrease the quantity 
//REMEMBER the cart total must update as the quantity changes

// /This Displays your array


let cart = [
   { name: 'Intro to Coding', title: 'Web Pages',  description: 'Code a simple one-page website using HTML and JQuery.', duration: ' 3 hours ', price: 250, },
   { name: 'Create with Code', title: 'Web Pages', description: 'Learn how the internet works and code a simple one-page website using HTML, CSS and JQuery.', duration: ' 3 days ', price: 960, },
   { name: 'Getting Started', title: 'Web Pages', description: 'Learn how to set up a development environment and practical skills to start coding.', duration: ' 3 hours ', price: 250, },
   { name: 'Intro to Coding', title: 'Music', description: 'Code a song using SonicPi software on a Raspberry Pi computer.', duration: ' 3 hours ', price: 250, },
   { name: 'Create with Code', title: 'Music', description: 'Learn computer science principles by coding music with a Raspberry Pi computer.', duration: ' 3 days ', price: 960, },
   { name: 'Intro to Coding', title: 'Animation',  description: 'Create a 2D animation using coding language JavaScript.', duration: ' 3 hours ', price: 250, },
   { name: 'Create with Code', title: 'Animation', description: 'Learn computer science principles by coding animations using JavaScript.', duration: ' 3 days ', price: 960, },
];

var globalCounter = 0;
var tbody = document.getElementById('web-pages');
for (var i = 0; i < Object.keys(cart).length; i++) {
   var tr = "<tr>";
   if (cart[i].price.toString().substring(cart[i].price.toString().indexOf('.'), cart[i].price.toString().length) < 2) cart[i].price += "0";

   tr += "<td>" + cart[i].name + "</td>" + "<td>" + cart[i].title + "<td>" +  cart[i].description  + '<td>' + cart[i].duration + '<td>' + "R" + cart[i].price.toString() + '</td>' + '<td>' + "<button id='addTo' onclick='add()'>Add to Cart" + "</button>" + "<button id='remove' onclick='remove()' value=''>Remove from Cart" + "</button></tr>" + "</td>"
   ;
   tbody.innerHTML += tr;
}

let beginnerCourse = [
  { name: 'Beginner JavaScript',  description: 'Develop a basic proficiency in programming structures and methods in JavaScript so that you are able to create an interactive web application.', duration: ' 6 days ', price: 1800, },
  { name: 'Beginner Front-End Web Development', description: 'Develop a good proficiency in CSS and an understanding of web design principles so that you are able to create visually pleasing web pages.', duration: ' 6 days ', price: 1800, },
  { name: 'Beginner Python', description: 'Develop a basic proficiency in programming principles and methods in Python.', duration: ' 6 days ', price: 1800, },
  
];

var globalCounter = 0;
var tbody = document.getElementById('beginner');
for (var i = 0; i < Object.keys(beginnerCourse).length; i++) {
  var tr = "<tr>";
  if (beginnerCourse[i].price.toString().substring(beginnerCourse[i].price.toString().indexOf('.'), beginnerCourse[i].price.toString().length) < 2) beginnerCourse[i].price += "0";

  tr += "<td>" + beginnerCourse[i].name + "</td>" + "<td>" +  beginnerCourse[i].description  + '<td>' + beginnerCourse[i].duration + '<td>' + "R" + beginnerCourse[i].price.toString() + '</td>' + '<td>' + "<button id='addTo' onclick='add()'>Add to Cart" + "</button>" + "<button id='remove' onclick='remove()' value=''>Remove from Cart" + "</button></tr>" + "</td>"
  ;
  tbody.innerHTML += tr;
}

let interCourse = [
  { name: 'Fullstack JavaScript',  description: 'Develop an understanding of the front and backend development environment and basic proficiency in server side JavaScript and object-oriented programming. By the end of the course you will be able to architect an application, control flow in an application and persist and retrieve data in a database.', duration: ' 6 days ', price: 1800, },
  { name: 'Website Deployment', description: 'Learn how to manage and deploy code to a server environment so that you can host your own web pages.', duration: ' 4 days ', price: 1200, },
];

var globalCounter = 0;
var tbody = document.getElementById('inter');
for (var i = 0; i < Object.keys(interCourse).length; i++) {
  var tr = "<tr>";
  if (interCourse[i].price.toString().substring(interCourse[i].price.toString().indexOf('.'), interCourse[i].price.toString().length) < 2) interCourse[i].price += "0";

  tr += "<td>" + interCourse[i].name + "</td>" + "<td>" +  interCourse[i].description  + '<td>' + interCourse[i].duration + '<td>' + "R" + interCourse[i].price.toString() + '</td>' + '<td>' + "<button id='addTo' onclick='add()'>Add to Cart" + "</button>" + "<button id='remove' onclick='remove()' value=''>Remove from Cart" + "</button></tr>" + "</td>"
  ;
  tbody.innerHTML += tr;
}

function add()
  {
    // This needs to add to cart
    alert('I work');
}

function remove()
  {
    // This needs to remove from the cart
    alert('I also work');
}