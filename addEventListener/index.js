const myBox = document.getElementById("myBox");
const myBt = document.getElementById("myBt");

// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = 'tomato';
// });

// myBox.addEventListener("mouseover", (event) =>{
//     event.target.style.backgroundColor = 'yellow';
//     event.target.style.width = "300px";
//     event.target.style.borderRadius = "50%";
// });

// myBox.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = 'skyblue';
//     event.target.style.borderRadius = "50% /30%";
//     event.target.style.width = "400px";
    
// });


myBt.addEventListener("click", (event)=>{
    myBox.textContent = 'Oche ! 🤒';
    myBox.style.backgroundColor = 'tomato';

});

myBt.addEventListener("mouseover", (event) =>{
    myBox.style.backgroundColor = "red";
});

myBt.addEventListener('mouseout',(event) =>{
    myBox.style.backgroundColor = 'greenyellow'
})