const {dbConnect} = require("../database")
exports.signup = (req, res, next)=>{
    console.log(req.body);
    console.log(req.files)
    const db = dbConnect();
    db.collection("users").insertOne(req.body)
}