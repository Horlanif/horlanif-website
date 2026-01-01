function openMenu() {
    document.querySelector(".side-bar").classList.add("active");
}

function closeMenu() {
    document.querySelector(".side-bar").classList.remove("active");
}


// ____________Emailjs_____________

function sendMail(){
    let parms ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }

    emailjs.send("service_532gpxa","template_n5nbxtb",parms).then(alert("Email Sent!"))

    
}