const typePass = document.getElementById("typePass");
const viewPass = document.getElementById("viewPass");
const msg = document.getElementById("msg");
const strength = document.getElementById("strength");
const eye = document.getElementById("eye");

// Get the current src of the eyeme image
const currentSrc = eye.src;

typePass.addEventListener("input", function () {
    if (typePass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none"
    }
     if (typePass.value.length < 4) {
         strength.innerHTML = "weak";
         msg.style.color = "red";
         typePass.style.borderColor = "red";
    }
    else if (typePass.value.length >= 4 && typePass.value.length < 8) {
         strength.innerHTML = "strong";
         msg.style.color = "gold";
         typePass.style.borderColor = "gold";
    }
    else if (typePass.value.length >= 8) {
         strength.innerHTML = "very strong";
         msg.style.color = "green";
         typePass.style.borderColor = "green";
    }
})
eye.addEventListener("click", function viewPassWord() {
    if (typePass.type === "password" && currentSrc.endsWith("close_eye.png")) {
        typePass.setAttribute("type", "text");
        eye.setAttribute("src", "open_eye.png");
    } else {
         typePass.setAttribute("type", "password");
        eye.setAttribute("src", "close_eye.png");
    }
})
