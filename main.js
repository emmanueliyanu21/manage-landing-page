const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    menu.style.display = "none"
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    menu.style.display = "block"
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

document.getElementById('newsletter-post').addEventListener('submit', function(event){
  e.preventDefault();

  let emailInput = document.getElementById("email-input");
  let errorMessage = document.getElementById("error-message");

  var email = emailInput.value.trim();

  if(email === ''){
    errorMessage.textContent = 'Please enter a email address'
    errorMessage.style.display = 'block'
    return
  }

  if(!validateEmail(email)){
    errorMessage.textContent = 'Please enter a valid email address'
    errorMessage.style.display = 'block'
  }

  errorMessage.style.display = 'none'
})

function validateEmail(email){
  let validReg =  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return validReg.test(email)
}