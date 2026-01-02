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


// ===========Catergory switch============

function showSection(sectionId, btn) {
    // Hide all sections
    document.getElementById("mobile-acc").style.display = "none";
    document.getElementById("kitchen").style.display = "none";
    document.getElementById("fashion").style.display = "none";
    document.getElementById("pre-order").style.display = "none";

    // Show selected section
    document.getElementById(sectionId).style.display = "block";

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".btn-swiper button");
    buttons.forEach(b => b.classList.remove("active"));

    // Add active to clicked button
    btn.classList.add("active");
}