const {Router} = require("express");

const {logoutGet,loginPost} = require("../controllers/login");

const router = Router();

//Rutas
router.get("/logout",logoutGet);
router.post("/login",loginPost);

module.exports = router;