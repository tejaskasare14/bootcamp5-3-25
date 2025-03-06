//dom has some built in functions that we use to manipulate HTML
//document - visible part of webpage

//get by id
let para_red=document.getElementById("para_red")
console.log(para_red);
para_red.style.color = 'red'

let para_blue=document.getElementById("para_blue")
para_blue.style.color = 'blue'

// get by tag name
let all_h1 = document.getElementsByTagName("h1")
console.log(all_h1); //here we will get array

//all_h1.style.color = 'green'
for(let h1_tag of all_h1)
{
    h1_tag.style.color = "green"
}


//get element  by class name
let all_in_purple = document.getElementsByClassName("in_purple")
for(let tag of all_in_purple)
{
    tag.style.color="purple"
}