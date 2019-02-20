var data = {
    a:{"0": "1"},
    b:{"1": "2"},
    c:{"2": "3"},
    d:{"3": "4"}
};


function parseData(myInput) {
  var newArray = Object.keys(myInput).map(k => {return myInput[k]})
  return newArray
}

var y = parseData(data)
//console.log(y)

//let newArray = []
//for (var prop in obj) {
//    newArray.push({obj[prop], {"Name":prop}})
//}



let newArray = []
for (var key in data) {
    if (data.hasOwnProperty(key)) {
        const newRow = Object.assign({"Name": key}, data[key])
        newArray.push(newRow)
    }
}

console.log(newArray)
