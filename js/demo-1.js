'use strict'
let template= document.querySelector('#similar-wizard-template');
let fragment = document.createDocumentFragment();
let arrayRandoms=document.querySelector(".arrayRandom")






let FirstName =["ZAZA","Naka","Zaebaka","Cools","Cls"]
let LastName = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];
let RandomValues=function getUnique(items) {
  // Make a copy of the array
  let tmp = items.slice(items);
  let ret = [];
  let count=4
  for (var i = 0; i < count; i++) {
    var index = Math.floor(Math.random() * tmp.length);
    var removed = tmp.splice(index, 1);
    // Since we are only removing one element
    ret.push(removed[0]);
  }
  return ret;  
}

arrayRandoms.textContent=RandomValues(FirstName)+" А теперь фамилии чуваков "+RandomValues(LastName);