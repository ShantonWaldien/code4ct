

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
   { name: 'Create with Code', title: 'Web Pages', description: 'Learn how the internet works and code a simple one-page website using HTML, CSS and JQuery', duration: ' 3 days ', price: 960, },
   { name: 'Getting Started', title: 'Web Pages', description: 'Learn how to set up a development environment and practical skills to start coding.', duration: ' 3 hours ', price: 250, },
];

var globalCounter = 0;
var tbody = document.getElementById('tbody');
for (var i = 0; i < Object.keys(cart).length; i++) {
   var tr = "<tr>";
   if (cart[i].price.toString().substring(cart[i].price.toString().indexOf('.'), cart[i].price.toString().length) < 2) cart[i].price += "0";

   tr += "<td>" + cart[i].name + "</td>" + "<td>" + cart[i].title + "<td>" +  cart[i].description  + '<td>' + "Duration: " + cart[i].duration + '<td>' + "R" + cart[i].price.toString() + '</td>' + '<td>' + "<button id='addTo' onclick='add()'>Add to Cart" + "</button>" + "<button id='remove' onclick='remove()' value=''>Remove from Cart" + "</button></tr>" + "</td>" 
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