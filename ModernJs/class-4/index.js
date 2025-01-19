// // setTimeout(() => {
// //     console.log("third");
// // }, 300);

// // const uday = () =>{
// //     console.log("first");
// // }
// // uday();
// // console.log("second");

// // let meraPromise = new Promise((resolve, reject)=>{
// //    setTimeout(() =>{
// //     console.log(
// //         "I am inside promise"
// //     );
// //    },5000);
// //    resolve(500);
// // //    reject(new Error("Bhaisaheb Error aaye hai"));
// // });
// // console.log("Pehala");

// // async function fetchData() {
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// //         const data = await response.json();
// //         console.log(data);
// //     } catch (error) {
// //         console.error("Error:", error);
// //     }
// // }

// // fetchData();

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json()) // Parses JSON from the response
//     .then(data => {
//         console.log(data); // Logs the fetched data
//     })
//     .catch(error => {
//         console.error("Error:", error); // Handles errors like network issues
//     });

// Optional: Add an entry animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
      setTimeout(() => {
        letter.style.opacity = "1";
      }, index * 100);
    });
  });
  