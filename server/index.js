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
    origin:"http://localhost:3000",
}))



// app.get("/api",async (req,res)=> {
//       const post = await Post.find();
//       res.send(post);
//     const url = 'https://images-api.nasa.gov/search?q=Night Sky';
//     const response = await axios.get(url);
//     res.json([{
//         "id": 1,
//         "title": response.data.collection.items[3].data[0].title,
//         "body": response.data.collection.items[3].data[0].description.slice(0,100) + "...",
//         "img" : response.data.collection.items[3].links[0].href
//     },
//     {
//         "id": 2,
//         "title": response.data.collection.items[4].data[0].title,
//         "body": response.data.collection.items[4].data[0].description.slice(0,100) + "...",
//         "img" : response.data.collection.items[4].links[0].href
//     },
//     {
//         "id": 3,
//         "title": response.data.collection.items[11].data[0].title,
//         "body": response.data.collection.items[11].data[0].description.slice(0,100) + "...",
//         "img" : response.data.collection.items[11].links[0].href
//     },
//     {
//         "id": 2,
//         "title": response.data.collection.items[19].data[0].title,
//         "body": response.data.collection.items[19].data[0].description.slice(0,100) + "...",
//         "img" : response.data.collection.items[19].links[0].href
//     },
//     {
//         "id": 3,
//         "title": response.data.collection.items[27].data[0].title,
//         "body": response.data.collection.items[27].data[0].description.slice(0,100) + "...",
//         "img" : response.data.collection.items[27].links[0].href
//     },
//     {
//         "id": 4,
//         "title": response.data.collection.items[30].data[0].title,
//         "body": response.data.collection.items[30].data[0].description.slice(0,100) + "...",
//         "img" : response.data.collection.items[30].links[0].href
//     }
// ])
// });

app.listen(5000, (req,res) => {
    console.log("Server running on port 5000")
})