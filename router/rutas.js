const express = require('express');
const router = express.Router();

//El Get es la URL de la pagina web a visualizar
 
router.get('/', (req, res) => {
    res.render("index.ejs");
});

module.exports = router;