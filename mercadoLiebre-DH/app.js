const express = require('express');
const app = express();
const path = require('path');

//app.listen(3000,()=> console.log('Microdesafio Mercado Liebre'));
app.listen(process.env.PORT || 3000,function(){
  console.log('servidor corriendo puerto 3000');
})
/// en la carpeta public tienen que ir las imagenes, css y js para front
//opcion 1
/* const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath)); */
//opcion 2 
app.use(express.static('public'));
//opcion 3
//app.use('/static',express.static(__dirname + '/public'));
// si uso esta opcion en el html tengo que llamar la ruta asi src="static/images/img-tv-samsung-smart.jpg"

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname,'/views/home.html'));
                        // dirname es una constante de node.js que hacer referencia al directorio del archivo que se esta ejecutando
})

app.get('/register',function(req, res){
  res.sendFile(path.join(__dirname + '/views/register.html'));
})

app.get('/login',function(req, res){
  res.sendFile(path.join(__dirname + '/views/login.html'));
})