const express = require('express');
const router = express.Router();
//const path = require('path');

router.get('/cadastrar/usuario', (req, res) => {
    res.send('Pagina de cadastro de usuario. <a href="/">Pagina inicial<a>')
})

router.get('/teste', (req, res) => {
    res.send('pagina teste')
})

module.exports = router;