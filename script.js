console.log("hello")
let string = ""
let inputbox = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            inputbox.value = string
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            inputbox.value = string
        }
        else {
            string = string + e.target.innerHTML
            inputbox.value = string
        }
    })
})