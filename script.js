let change1=document.querySelector("[data-dom=change1]");   
let change2=document.querySelector("[data-dom=change2]");
let h3=document.querySelector("h3");
let body = document.querySelector("[data-dom = gradient]");

/*body.style.background = "pink";

console.log(body);*/
function setGradient(){
    body.style.background = "linear-gradient(to right, "+ change1.value + ", " + change2.value + ")";
}

change1.addEventListener("input", setGradient)
// change2.addEventListener("input", function() {
//     h3.innerText=change2.value;
// })
change2.addEventListener("input", setGradient)