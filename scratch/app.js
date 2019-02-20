// $ node app.js in this dir to run this file

var arr1 = [
    {"Date": "2017-04-15", "Price":"300"},
    {"Date": "2017-04-16", "Price":"310"},
    {"Date": "2017-04-17", "Price":"320"},
]

function getDateObject(dateString) {
    // Splits a yyyy-mm-dd string, and returns a Date object
    var parts = dateString.split("-")
    var myDate = new Date(parts[0], parts[1]-1, parts[2])
    return myDate
}


for (var i = 0; i < arr1.length; i++) {
    arr1[i]["newDate"] = getDateObject(arr1[i]["Date"])
}

arr1.forEach(o => o.newDate = new Date(o.Date));

console.log(arr1)

/*
var parts = "2017-04-15".split("-")
var newDate = new Date(parts[0], parts[1]-1, parts[2])
console.log(newDate)

var parts = "2017-04-16".split("-")
var newDate = new Date(parts[0], parts[1]-1, parts[2])
console.log(newDate)

var parts = "2017-04-17".split("-")
var newDate = new Date(parts[0], parts[1]-1, parts[2])
console.log(newDate)
*/
