//Create and modify and Array
var hobbies = [
  "reading",
  "singing",
  "dancing",
  "writing",
  "hiking",
  "traveling"
];

console.log(hobbies.length);

hobbies.push("painting");

console.log(hobbies[2]);

hobbies.pop();

console.log(hobbies);

hobbies.splice(2, 0, "painting", "running");
console.log(hobbies);

hobbies.shift();

hobbies.unshift("laughing");
console.log(hobbies);

//Creat a new array and combine arrays
var goals = ["learn backend dev", "master Python", "get awesome tech job"];

var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);

var things = allTheThings.indexOf("singing");

console.log(things);

allTheThings.splice(1, 1);
console.log(allTheThings);

//Map over an Array
var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});

console.log(plans);
