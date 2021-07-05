const {Router} = require("express")
const router= Router()

const{
    getTurismo,
    getTurismoName
}=require("../controllers/turismo.controller")

router.get("/servicio",getTurismo)


module.exports=router