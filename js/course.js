

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
   { name: 'Course One', price: 500},
   { name: 'Course Two', price: 500},
   { name: 'Course Three', price: 500},
   { name: 'Course Four', price: 500},
   { name: 'Course Five', price: 500},
   { name: 'Course Six', price: 500},
];

var globalCounter = 0;
var tbody = document.getElementById('tbody');
for (var i = 0; i < Object.keys(cart).length; i++) {
   var tr = "<tr>";
   if (cart[i].price.toString().substring(cart[i].price.toString().indexOf('.'), cart[i].price.toString().length) < 2) cart[i].price += "0";

   tr += "<td>" + cart[i].name + "</td>" + "<td>$" + cart[i].price.toString() + "</td></tr>";
   tbody.innerHTML += tr;
}