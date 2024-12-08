let input = document.querySelector("#input");
let range = document.querySelector("#range");

range.addEventListener("input" , () => {
    console.log(range.value);
    
   input.style.width = range.value + "%";
}) 