let axios = require('axios');
const {response} = require('express');

(async ()=>{
    try {
        let res = await axios.get("http://localhost:8080/api/productos/test");
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
})();