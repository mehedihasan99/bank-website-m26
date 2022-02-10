document.getElementById("submit-btn").addEventListener("click", function(){
    // get email
    let emailInput = document.getElementById("user-email");
    emailInput = emailInput.value;
    // get password
    let passwordInput = document.getElementById("user-password");
    passwordInput = passwordInput.value;
    // condition 
    if(emailInput == "mehedi.hasan@gmail.com" && passwordInput == 11223344){
        window.location.href = "bank.html";
    }
})
