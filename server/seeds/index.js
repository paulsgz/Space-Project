if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const mongoose = require('mongoose');
const Post = require('../models/appSchema')
const axios = require('axios')
const MONGO_URL=process.env.MONGO_URL;
mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  
const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});

const seedDB = async() => {
    await Post.deleteMany({});
    const url = 'https://images-api.nasa.gov/search?q=Night Sky';
    const response = await axios.get(url);
    for(let i=0;i<25;i++){
        const post = new Post({
            name: 'Nasa',
            userPic:response.data.collection.items[3].links[0].href,
            title: response.data.collection.items[i].data[0].title,
            description: response.data.collection.items[i].data[0].description.slice(0,100) + "...",
            image: response.data.collection.items[i].links[0].href,
        })
        await post.save();
        console.log(post);
    }
    
}

seedDB().then( () =>{
    mongoose.connection.close();
})