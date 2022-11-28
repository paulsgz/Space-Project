if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require('express');
const router = express.Router();
const Post = require('../models/appSchema')
const cors = require('cors');
const multer = require('multer')
const {storage, cloudinary} = require('../cloudinary')

const upload = multer({storage: storage});


router.use(cors({
    origin:"http://localhost:3000",
}))
router.get('/', (req,res) => {
    const posts = Post.find({}, function(err,posts) {
        if(err){
            console.log(err);
        } else {
            res.json(posts);
        }
    })}) 

router.post('/create',upload.array('image'), async (req,res) => {
    var paths = req.files.map(file => file.path);
    const post = new Post({
        name: req.body.name,
        userPic: req.body.picture,
        title: req.body.title,
        description: req.body.description,
        image: paths[0],
        })
        console.log(post);
        await post.save();
})

router.post('/:id/reviews', async(req,res) => {
    const { id }  = req.params;
    const post = await Post.find({id})
   console.log((post))
})

router.put('/comments/:id', async (req,res) => {
    const { id }  = req.params;
    const post = Post[id];
    console.log(post);
})

router.delete('/:id',async(req,res) => {
    const { id }  = req.params;
    await Post.findByIdAndDelete(id);
})

module.exports = router;