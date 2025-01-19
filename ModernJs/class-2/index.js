

// document.addEventListener("click", function(){
//     console.log("clicked");
// })

// const content = document.querySelector("#anchortag");

// content.addEventListener("click", function(event){
//     console.log("hi");
//     event.preventDefault();
// })

let myDiv = document.createElement('div');

for(let i=0; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = "my para no" + i;

    newElement.addEventListener("click", function(event){
        console.log("I have clicked on para" + i);
    });
    myDiv.appendChild(newElement);
}

document.body.appendChild(myDiv);