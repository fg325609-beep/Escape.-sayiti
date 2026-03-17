let userEmail = document.getElementById("userEmail");
let btn = document.getElementById("btn");
let userName = document.getElementById("userName")
const text =document.getElementById("text");


const useIsm =("farhod")
const valiEmail = ("user123gmail.com")

btn.addEventListener("click", function(e){
    e.preventDefault()
  if (userEmail.value === useIsm && email.value === valiEmail) {
    this.textContent = "royxatdan otinggiz"

    
  } else {
    this.textContent = "email yoki usrnameni tog'ri kirit"
    
  }

  
})