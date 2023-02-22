import axios from "axios";
import productTemplate from "../template/partials/product.handlebars";

const groupBy = function(array, key) {
    return array.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
};

const categoriesLabel = [
    'Fruits & Vegitables',
    'Bakery Cakes & Diary',
    'Beverages',
    'Beauty and Hygiene',
    'Baby Care'
];
let i = 0;

const getProductsData = async () => {
    try {
        const resp =  await axios.get('http://localhost:3003/api/v1/products');
        let data = resp?.data || {};
        const products = data && data.products;
        const groupedProduct =  groupBy(products, 'category');

        let updatedData = [];
        for(const [, value] of Object.entries(groupedProduct)) {
            const productObj = {
                "name": categoriesLabel[i], 
                "data" : value,
            }
            updatedData.push(productObj);
            i++;
        }
        const updatedDataObj = {
            "products": updatedData
        }
    
        //console.log("da", groupedProduct);
        console.log("d = " + JSON.stringify(updatedData));
        createProductsHtml(updatedDataObj);
    } catch(error) {
        console.log("err " + error);
    }
}

const createProductsHtml = (data) => {
    const prodcutContainer = document.querySelector("#products");
    prodcutContainer.innerHTML = productTemplate(data);
}

getProductsData();