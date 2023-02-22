import './scss/main.scss';
import formTemplate from "./template/partials/form.handlebars";

const loginData = {
    "btnName": "Login",
    "fields": [{
        name: "username",
        type: "text",
        label: "Username"
    }, {
        name: "password",
        type: "password",
        label: "Password"
    }]
}

const loginformContainer = document.querySelector("#login-form");
loginformContainer.innerHTML = formTemplate(loginData);