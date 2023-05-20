const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("keyup", ()=>{

    const lblEmail = document.querySelector("label[for='idEmail']");

    if (inputEmail.value.length < 5){
        inputEmail.setAttribute("style", "outline-color:#ff0000;");
        lblEmail.setAttribute("style", "color:#ff0000;");
    } else {
        inputEmail.setAttribute("style", "outline-color:#00ff00;");
        lblEmail.setAttribute("style", "color:#00ff00;");
    }

});