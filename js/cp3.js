const inputFirstName = document.querySelector("#idFirstName");

inputFirstName.addEventListener("keyup", () => {

    const lblFirstName = document.querySelector("label[for='idFirstName']");

    if (inputFirstName.value.length < 5) {
        inputFirstName.setAttribute("style", "outline-color:#ff0000;");
        lblFirstName.setAttribute("style", "color:#ff0000;");
    } else {
        inputFirstName.setAttribute("style", "outline-color:#00ff00;");
        lblFirstName.setAttribute("style", "color:#00ff00;");
    }

});

const inputLastName = document.querySelector("#idLastName");

inputLastName.addEventListener("keyup", () => {

    const lblLastName = document.querySelector("label[for='idLastName']");

    if (inputLastName.value.length < 5) {
        inputLastName.setAttribute("style", "outline-color:#ff0000;");
        lblLastName.setAttribute("style", "color:#ff0000;");
    } else {
        inputLastName.setAttribute("style", "outline-color:#00ff00;");
        lblLastName.setAttribute("style", "color:#00ff00;");
    }

});

const inputEmail = document.querySelector("#idEmail");


inputEmail.addEventListener("keyup", () => {

    const lblEmail = document.querySelector("label[for='idEmail']");

    if (inputEmail.value.length < 5 || JSON.stringify(inputEmail.value).includes("@") == false) {
        inputEmail.setAttribute("style", "outline-color:#ff0000;");
        lblEmail.setAttribute("style", "color:#ff0000;");
    } else {
        inputEmail.setAttribute("style", "outline-color:#00ff00;");
        lblEmail.setAttribute("style", "color:#00ff00;");

    }

});

const inputPass = document.querySelector("#idPass");

inputPass.addEventListener("keyup", () => {

    const lblPass = document.querySelector("label[for='idPass']");

    if (inputPass.value.length < 5 || inputPass.value.length > 8) {
        inputPass.setAttribute("style", "outline-color:#ff0000;");
        lblPass.setAttribute("style", "color:#ff0000;");
    } else {
        inputPass.setAttribute("style", "outline-color:#00ff00;");
        lblPass.setAttribute("style", "color:#00ff00;");
    }


});

const inputConf = document.querySelector("#idConfPass");

inputConf.addEventListener("keyup", () => {

    const lblConf = document.querySelector("label[for='idConfPass']");

    if (inputConf.value != inputPass.value) {
        inputConf.setAttribute("style", "outline-color:#ff0000;");
        lblConf.setAttribute("style", "color:#ff0000;");
    } else {
        inputConf.setAttribute("style", "outline-color:#00ff00;");
        lblConf.setAttribute("style", "color:#00ff00;");
    }


});

const inputSubmit = document.querySelector("#btnSubmit");

inputSubmit.addEventListener("click", () => {

    if (inputFirstName.value.length < 5) {
        alert("O primeiro nome precisa ter no minímo 5 caracteres.")
    }
    if (inputLastName.value.length < 5) {
        alert("O segundo nome precisa ter no minímo 5 caracteres.")
    }
    if (inputEmail.value.length < 5) {
        alert("o e-mail precisa ter no minímo 5 caracteres e um @");
    } else if (JSON.stringify(inputEmail.value).includes("@") == false) {
        alert("o e-mail precisa ter um @")
    }
    if (inputPass.value.length < 6 || inputPass.value.length > 8) {
        alert("A senha precisa ter no minímo 6 caracteres e no máximo 8.")
    }
    if (inputConf.value != inputPass.value) {
        alert("As senhas são diferentes, por favor, verificar.")
    }
});

const btnDarkMode = document.querySelector("#btnDarkMode");


btnDarkMode.addEventListener("click", () => {
    let botao = document.querySelector("body");
    let container = document.querySelector(".container");
    let inputs = document.querySelectorAll("input");
    let btnSubmit = document.querySelector("#btnSubmit")
    let caracteres = document.querySelectorAll("div");

    for (var i = 0; i < caracteres.length; i++) {
        caracteres[i].setAttribute("style", `color:#fff;`);
    }
    botao.setAttribute("style", `background-color:#000;`);
    container.setAttribute("style", `background:rgb(77, 77, 77)`);
    btnSubmit.setAttribute("style", `background:rgb(44, 44, 44)`);

});