// http://www.w3schools.com/js/js_array_methods.
// http://www.w3schools.com/js/js_array_sort.aspasp
console.log('=== origin array ===\n', ["Banana", "Orange", "Apple", "Mango"]);

function shift() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.shift()
  console.log('=== shift output ===\n', fruits);
}

shift();

function sort() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort()
  console.log('=== sort output ===\n', fruits);
}

sort();

function reverse() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.reverse()
  console.log('=== reverse output ===\n', fruits);
}

reverse();
