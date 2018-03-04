'use strict'
/*let template= document.querySelector('#similar-wizard-template');
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
*/

function init(){
    document.querySelector("a").addEventListener("click",function(e){
        e.preventDefault()
    });
}
document.addEventListener('DOMContentLoaded',init,false);



var divElements=document.querySelectorAll("div")
var button = document.querySelector("#clickable")
var clickedElement=null

var clickHandler=function(evt){
  console.log(evt)
  if (clickedElement){
    clickedElement.classList.remove('clicked')
  }
  clickedElement=evt.currentTarget;
  clickedElement.classList.add('clicked')
  debugger;
  for (var i=0;i<divElements.length;i++){
    divElements[i].addEventListener('click',clickHandler,true)
}
}
button.addEventListener('click',clickHandler,true);
document.body.addEventListener('click,',clickHandler,true);