const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios')
const Post = require('./models/appSchema')
const mongoose = require('mongoose');
const MONGO_URL='mongodb+srv://paulsgz:Cp12311999@cluster0.cyclwir.mongodb.net/?retryWrites=true&w=majority'
const posts = require('./routes/posts.js')
const bodyParser = require('body-parser');

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use('/', posts);

app.use(cors({
    origin:"https://space-project31.herokuapp.com",
    credentials:true,   
}))

const port = process.env.PORT || 5000;
app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`)
})