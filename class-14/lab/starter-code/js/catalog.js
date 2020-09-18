/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  var bucket = Product.allProducts;
  console.log(bucket);
  for (var i = 0; i < Product.allProducts.length; i++) {
    var option = document.createElement('option'); // loops through the array of items and creates an element 'option' for items as it loops 
    option.textContent = bucket[i].name;
    selectElement.add(option);
    // console.log(selectElement);
  }

}




populateForm();
// console.log(populateForm)

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {



  // TODO: Prevent the page from reloading
  event.preventDefault(); // keeping things from reloading
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart

var currentCart = [];

function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list

  var name = event.target[1].value;


  // TODO: get the quantity

  var quantity = parseInt(event.target.quantity.value);

  // console.log(event.target[1].value, event.target.quantity.value); // console logged product and value to see what we are selecting and the number 

  // TODO: using those, add one item to the Cart

  var form = document.getElementById('catalog');

  var newItem = new Cart(name, quantity);
  currentCart.push(newItem);
  // console.log(newItem);
  form.reset();
  // cart has value and name
  console.log(currentCart);

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() { }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
