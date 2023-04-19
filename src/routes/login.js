const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
    res.send('Pagina de login. <a href="./">Pagina inicial<a>')
})

router.get('/teste', (req, res) => {
    res.send('pagina teste')
})

module.exports = router;