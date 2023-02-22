import axios from "axios";
import productTemplate from "../template/partials/product.handlebars";

const getProductsData = async () => {
    try {
        const resp =  await axios.get('http://localhost:3003/api/v1/products');
        let data = resp?.data || {};
        console.log("d = " + JSON.stringify(data));
        createProductsHtml(data);
    } catch(error) {
        console.log("err " + error);
    }
}

const createProductsHtml = (data) => {
    const prodcutContainer = document.querySelector("#products");
    prodcutContainer.innerHTML = productTemplate(data);
}

getProductsData();