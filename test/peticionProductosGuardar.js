let axios = require('axios');
const {response} = require('express');

(async ()=>{
    try {
        let res = await axios.post("http://localhost:8080/api/productos/test",{
            title: "prueba Axios Post",
            price: "500",
            thumbnail: "https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg"
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
})();