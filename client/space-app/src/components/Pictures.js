import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import React,{ useState, useEffect} from 'react';
import Pagination   from './Pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Luke from '../images/luke.jpg';
import Lubo from '../images/Lubo.jpg';
import Altinay from '../images/Altinay.jpg';
import Jackson from '../images/jackson.jpg';
import Will from '../images/Will.jpg';
import little from '../images/little plant.jpg';
import noDP from '../images/noDP2.png';
import {Sample} from './Sample';
import StarRatings from 'react-star-ratings';

const url = "https://space-project-server.herokuapp.com/"
export const Projects = ()=>{
 
    const [data, setData] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    const [rating, setRating] = useState(0);

    const projects = [
        {
          title: "Galaxy",
          description: "A photograph of a galaxy in Earth",
          imgUrl: Lubo,
          name: 'Lubo Minar',
          userPic: noDP,
          rating: 5,
        },
        {
          title: "Moon and Clouds",
          description: "Moon and clouds being illuminated by the sun.",
          imgUrl: Altinay,
          name: 'Altinay Dinc',
          userPic:noDP,
          rating: 5,
        },
        {
          title: "Blurry Night",
          description: "A blurred photograph of the night",
          imgUrl: little,
          name: 'Little Plant',
          userPic:noDP,
          rating: 5,
        },
        {
          title: "A Dream",
          description: "See the skies in the lake",
          imgUrl: Jackson,
          name: 'Jackson Hendry',
          userPic:noDP,
          rating: 5,
        },
        {
          title: "Night Sky",
          description: "A night full of stars",
          imgUrl: Will,
          name: 'Wil Stewart',
          userPic:noDP,
          rating: 5,
        },
        {
          title: "Aurora Borealis",
          description: "See the beauty of the northern lights",
          imgUrl: Luke,
          name: 'Luke Stackpoole',
          userPic:noDP,
          rating: 5,
        },
      ];


    const paginate = (pageNumber)=> setCurrentPage(pageNumber)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    data.reverse();
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
    const navigate = useNavigate();
    var user = JSON.parse(localStorage.getItem('UserInfo'));
    if(!user){
        user = {
            name:' Guest',
            picture: null
        }
    }
    const fetch = async() => {
        try{
            const response = await axios(url);
            setData(response.data);
        } catch(error) {
            console.log(error);
        }
    }

    const handleFiles = async(e) => {
        setImage(e.target.files[0]);
    }

    const sendData = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title)
        formData.append('description',description)
        formData.append('image',image)
        formData.append('name',user.name)
        formData.append('picture',user.picture)
        formData.append('rating',rating)

        setTitle("");
        setDescription("");
        setImage("");
        setRating("")
        await axios.post('https://space-project-server.herokuapp.com/create', formData)
}



const deletePost = async(id) => {
    await axios.delete(`https://space-project-server.herokuapp.com/${id}`).then((res) => {     
         console.log(res)
    }).catch(err => {
        console.log(err);
    })
}


const LogOut = async()=> {
    localStorage.removeItem('UserInfo')
    navigate('/login')
}
const LogIn = async()=> {
    navigate('/login')
}

useEffect (() => {
    fetch();
}, [data])

    return(
    <div className="Row">
        <div className="col-xl-2">
        </div>
        <div className="col-xl-8 Explore">
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Space Project</h2>
                        <p id="catchphrase">A place to explore and share your own astronomical experiences</p>
                        <div className="Signed ">
                        <h5 className="h5Sign">Signed in as: 
                        {user.name === "Guest" }
                        {user.picture !== null && <img src={user.picture} className="userImage" alt="userPic"/>}{user && user.name}</h5>
                        {user.name !== " Guest" && <button  type="button" className="btn btn-danger outButton" onClick={LogOut}>Log Out</button>}
                        </div>
                        <Tab.Container id="project-tabs" defaultActiveKey="second">
                        <hr className="line"></hr>
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                         <Nav.Link eventKey="first">Post Your Own</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Browse</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                {user.name !== " Guest" && 
                                <Row>
                                    <div className="col-lg-2"></div>
                                    <div className="postYourOwn col-xl-8">
                                    <form onSubmit={sendData} encType="multipart/form-data">
                                    <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" id="title" aria-describedby="Title" placeholder="Enter Title of Post" value={title} name="title" onChange={(e)=>setTitle(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" id="description" placeholder="Describe Your Post"   value={description} name="description" onChange={(e)=>setDescription(e.target.value)}/>
                                    </div>
                                    <div className="choosefile">
                                    <input type="file" filename="image" placeholder="Image" name="image" onChange={handleFiles}></input>
                                    </div>
                                    <div className="form-group mt-3">
                                    <label htmlFor="rating">Rate Your Experience</label>
                                        <input type="range" className="form-range" id="rating" aria-describedby="Rating" value={rating} name="rating"  min="0" max="5" onChange={(e)=>setRating(e.target.value)} />
                                        </div>
                                        
                                    <button type="submit" className="btn btn-primary submitFiles">Submit</button>
                                    </form>
                                    </div>
                                    <div className="col-lg-2"></div>
                                </Row>
                                }
                               {user.name === " Guest" && <p>You have to <button className="loginPost"onClick={LogIn}>Log In</button> to Post!!!</p>}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" >
                            <Row>
                            <div className="featured">
                            <h3>Featured Posts</h3> 
                            </div>
                                    {
                                        
                                            projects.map((project,index) => {
                                                return(
                                                    <Sample 
                                                    key={index}
                                                    {...project}
                                                    /> 
                                                )  
                                            })
                                           
                                        }
                                         <hr className="line"></hr> 
                                           {             
                                                               
                                       currentPosts.map((data2,index) => {
                                            return(
                                                <Col sm={6} md={4} key={index+1} className="postBody"  id="explore">
                                                <div className="proj-imgbx" >
                                                    <img src={data2.image} alt="img" className="img-fluid contentImages" key={index}/> 
                                                <div className="proj-txtx">
                                                    <h4>{data2.title}</h4>
                                                    <span>{data2.description}</span>
                                                    <div className="buttons">
                                                    { (data2.name === user.name) && <button type="button" className="btn btn-outline-dark deleteButton" onClick={()=>deletePost(data2._id)}>Delete Post</button>}
                                                </div>
                                                </div>
                                                </div>
                                                 <div className="label">
                                                 <img src={data2.userPic} alt="img" className="img-fluid userImage" key={index}/>
                                                 <p> {data2.name}</p>
                            
                                                    <p>Rating: 
                                                 <StarRatings
                                                    rating={data2.rating}
                                                    starRatedColor="gold"
                                                    numberOfStars={5}
                                                    className='rating'
                                                    starDimension="17px"
                                                    starSpacing="0px"
                                                    /></p>
                                                 </div>
                                        
                                                </Col>
                                            )
                                        }) 
                                    }
                                
                                     <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate} />
                                </Row>
                            </Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
        <div className="col-xl-2"></div>
    </div>
       
    );
}