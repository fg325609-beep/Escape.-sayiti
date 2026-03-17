let userEmail = document.getElementById("userEmail");
let btn = document.getElementById("btn");
let userName = document.getElementById("userName")
const text = document.getElementById("text");


const useIsm ="farhod"
const valiEmail = "user123gmail.com"

btn.addEventListener("click",function(e){
    e.preventDefault()
  if (userEmail.value === useIsm && useIsm.value === valiEmail) {
    text.textContent = "royxatdan otinggiz"

    
  } else {
    text.textContent = "email yoki usrnameni tog'ri kirit"
    
  }


})

 AOS.init();