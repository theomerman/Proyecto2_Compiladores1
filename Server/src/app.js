var express = require('express');
var morgan = require('morgan');
var cors = require("cors");
var app = express();
var corsOptions = {origin: true, optionSuccessStatus: 200}


app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));

var incremental = 0;

app.listen(8080, function(){
    console.log('app escuchando en el puerto 8080');
});

app.get('/', (req, res)=>{
    res.json({mensaje: "Hola Mundo!"});
});
app.get('/retornoTexto',(req, res)=>{
    res.send('<h1>Hola Mundo!</h1>')
})

app.get('/getIncremental',(req, res)=>{
    incremental++
    res.send(`${incremental}`)
})

app.post('/setIncremental', (req, res)=>{
    incremental = req.body.incremental
    res.json({msg: "Operacion con exito"});
})