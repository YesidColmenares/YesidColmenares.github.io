const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use('/', require('./router/rutas.js'));

app.use((req, res, next) => {
    res.status(404).render("404");
});

//Escucha en el puerto 3000 
app.listen(3000, () => {
    console.log('Servidor a su servicio en el puerto: 3000');
})
