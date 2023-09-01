import API from './api-variables';

export const getProducts = () => {
    fetch(`${API.URL}/${API.PRODUCTS}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
        })
}