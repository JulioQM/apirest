const express = require("express")
const app = express()
const bodyParser =require("body-parser")
const cors=require('cors')

//middleware ayuda intermediario para configurr las insatcias del servidor
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//cors
app.use(cors())

//routes voy a tener varias rutas para interactuar con mi api
app.use(require("./routers/index"))

//Execution 
app.get('/',(req, res) => {res.send("Welcome to E_COMMERCE API-REST")})
//app.get('/',(req,res)=> [res.send('Welcome to Puntos de antención de Turismo API ')])
/* app.listen(3001)
console.log("Server running in http://localhost:3001") */
//ejecucion
//app.listen(3000)
app.listen(process.env.PORT || 5050)
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
console.log("Server running in http://localhost:5050")
