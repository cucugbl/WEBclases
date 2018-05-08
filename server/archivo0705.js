var http = require("http"), fs = require("fs");

fs.readFile("./index.html", function (err, html) {
    var htmS = html.toString();
    var variablesEnHtml = htmS.match(/[^\{\}]+(?=\})/g);
    var nombre = "cambia";
    for (var i = variablesEnHtml.length - 1; i >= 0; i--) {
          var value = eval(variablesEnHtml[i]);
          htmS=htmS.replace("{"+variablesEnHtml[i]+"}",value)
    }
    http.createServer(function (req, res) {
        res.write(htmS);
        res.end("hola");// va a la pagina web en el puerto levantado
    }).listen(8080);
});


