const {Router} = require("express");

const {productosGet, productosPost, productosTestGet, productosTestPost} = require("../controllers/productos");

const router = Router();

//Rutas
router.get("/",productosGet);
router.post("/",productosPost);
router.get("/test/",productosTestGet);
router.post("/test/",productosTestPost);

module.exports = router;