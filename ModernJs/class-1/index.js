// let fName = document.getElementById("name");
 
// fName.style.backgroundColor = "red";

// fName.style.color = "green";


// let myName = document.getElementsByClassName("name");


// for(let i=0; i<myName.length; i++){

//     myName[i].style.backgroundColor = "red";
// };
// let paragraphs = document.getElementsByTagName("p");

// paragraphs[0].style.backgroundColor = "green";


// let myName = document.querySelectorAll(".name");
// // let myName = document.querySelector(".name");

// myName[0].style.backgroundColor = "green";
// let example1 = document.querySelector(".name")
// example1.outerHTML = '<h4 class="name">jay ho</h4>';


// let example = document.querySelector(".name1");
// example.innerHTML = '<h1>jay ho</h1>';





// console.log(example.innerHTML);
// console.log(example1.outerHTML);



// Replace .name element with a new h4
let example1 = document.querySelector(".name").outerHTML = '<h4 class="name">jay ho</h4>';

// Re-select the .name element
example1 = document.querySelector(".name");

// Example with .name1
let example = document.querySelector(".name1");

// Check if the element exists
if (example) {
    example.innerHTML = '<h1>jay ho</h1>';
    console.log(example.innerHTML); // Will log the new content
}

// Log the updated outerHTML
console.log(example1.outerHTML); // Will log the new <h4> element


