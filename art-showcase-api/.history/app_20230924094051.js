const express = require('express')
const expressGraphql = require("express-graphql").graphqlHTTP;
const graphqlSchema = require("./graphql/schemas")
const app = express();
app.use((req, res, next)=>{
    res.send("hello world")
})

app.use("/graphql",expressGraphql({
    schema : gr
}))

app.listen(8080)