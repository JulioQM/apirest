const express = require("express")
const app = express()
const bodyParser =require("body-parser")

//middleware ayuda intermediario para configurr las insatcias del servidor
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes voy a tener varias rutas para interactuar con mi api
app.use(require("./routers/index"))

//Execution 
app.get('/',(req,res)=> [res.send('Welcome to Puntos de antención de Turismo API ')])
app.listen(3001)
console.log("Server running in http://localhost:3001")
