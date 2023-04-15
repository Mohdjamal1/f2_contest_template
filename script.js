/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item) =>{
    if (item.profession === "developer") {
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value) =>{
    if (value.profession === "developer") {
      console.log(value);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let obj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeArr = arr.filter((val) =>{
    return val.profession !== "admin" 
  });
  console.log(removeArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
  {id: 4, name: "Mohd Jamal", age: "24", profession: "DataAnalyst"},
  {id: 5, name: "Yuvraaj singh", age: "26", profession: "Programmer"},
  {id: 6, name: "Vikaas", age: "23", profession:"Student"},
];
  let arr3 = arr.concat(arr2);
  console.log(arr3);
}
