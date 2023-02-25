const navbar = document.querySelector('.menubar')
const menuBtn = document.querySelector('#menu-btn')

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})

function FormValidation() {
    
    let valid = true, email = "", name ="", phone ="", subject ="";   
    
    name = document.getElementById("name");
    email = document.getElementById("email");
    phone = document.getElementById("phone");
    subject = document.getElementById("subject");

    if (!name.checkValidity()) {
      valid = false;
      name.focus();
      document.getElementById("name-err").innerHTML = "Field cannot be empty";
      name.style.border = "1px solid #FF7979";
    } 
    else {
      document.getElementById("name-err").innerHTML = "";
      name.style.border = "1px solid #DEDEDE";
    }
    
    if (!email.checkValidity()) {
      valid = false;
      email.focus();
      document.getElementById("email-err").innerHTML = "Looks like this is not an email";
      email.style.border = "1px solid #FF7979";
    } 
    else {
      document.getElementById("email-err") = "";
      email.style.border = "1px solid #DEDEDE";
    }
    
    if (!phone.checkValidity()) {
      valid = false;
      phone.focus();
      document.getElementById("phone-err").innerHTML = "Field cannot be empty";
      phone.style.border = "1px solid #FF7979";
    } 
    else {
      document.getElementById("phone-err").innerHTML = "";
      phone.style.border = "1px solid #DEDEDE";
    }

    if (!subject.checkValidity()) {
      valid = false;
      subject.focus();
      document.getElementById("subject-err").innerHTML = "Subject cannot be empty";
      subject.style.border = "1px solid #FF7979";
    } 
    else {
      document.getElementById("subject-err").innerHTML = "";
      subject.style.border = "1px solid #DEDEDE";
    }
    return valid;
}