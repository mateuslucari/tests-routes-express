require('dotenv').config();

const PORT = process.env.PORT || 3100

const express = require('express')
const app = express()
const loginRouter = require('./routes/login')
const cadastraRouter = require('./routes/cadastro')

app.use(loginRouter)
app.use(cadastraRouter)

app.get('/', (req, res) => {
    res.send('Pagina inicial. <a href="./login">Fazer login<a>')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta :${PORT}`);
})