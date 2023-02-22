import axios from "axios";
import categoriesTemplate from "../template/partials/categories.handlebars";

const getCategoriesData = async () => {
    try {
        const resp =  await axios.get('http://localhost:3003/api/v1/categories');
        let data = resp?.data || {};
        createCategoriesHtml(data);
    } catch(error) {
        console.log("err " + error);
    }
}

const createCategoriesHtml = (data) => {
    const categoryContainer = document.querySelector("#categories");
    categoryContainer.innerHTML = categoriesTemplate(data);
}

getCategoriesData();