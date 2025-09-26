/*var a = 10
var b = 20
console.log("La suma es:",a+b)*/

//servidor
import express from "express"
import rutas from "./routes/rutas.js"

const app = express()

app.set("view engine", "ejs")

app.use("/", rutas)

//request:hacer pregunta recibir información del usuario
//response: mandar información
/*app.get("/", function(req, res){ 
	res.send("Hola desde nodejs")
})

app.get("/contactanos", function(req, res){
	res.send("Estas en contactanos:)")
})*/

const PORT = process.env.PORT || 3000

//arranca el servidor
app.listen(PORT, function(){
	console.log("Aplicación en http://localhost:",PORT)
});
