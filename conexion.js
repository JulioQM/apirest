const pgPromise = require("pg-promise")
const config ={
    host:"ec2-34-232-191-133.compute-1.amazonaws.com",
    port:"5432",
    database:"d9ov9ci4le66rm",
    user:"uozyxyntleytaz",
    password:"a4cb1f54a864be4a0e40427ec9b3c379831011d41e9fc80689896cbf7858296f",
    ssl:true 
}

const pgp = pgPromise({})
const db= pgp(config)

//db.any("select * from servicios").then(res=>{console.log(res)})

exports.db = db