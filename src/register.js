import './scss/main.scss';
import formTemplate from "./template/partials/form.handlebars";


const registerData = {
    "btnName": "Signup",
    "fields": [{
        name: "firstname",
        type: "text",
        label: "First Name"
    }, {
        name: "lastname",
        type: "text",
        label: "Last Name"
    }, {
        name: "email",
        type: "email",
        label: "Email"
    },{
        name: "password",
        type: "password",
        label: "Password"
    },{
        name: "confirmpassword",
        type: "password",
        label: "Confirm Password"
    }]
}

const registerformContainer = document.querySelector("#register-form");
registerformContainer.innerHTML = formTemplate(registerData);