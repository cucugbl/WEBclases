
var http= require("http");

http.createServer(function(req,res){
    console.log("solicitud");// es para la consola
    res.end("hola");// va a la pagina web en el puerto levantado
}).listen(8080);
