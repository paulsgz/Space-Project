import { Col } from "react-bootstrap"
import StarRatings from 'react-star-ratings';

export const Sample= ({title,description,imgUrl,name,userPic,rating})=>{
    return(
        <Col sm={6} md={4}>
 <div className="proj-imgbx" >
    <img src={imgUrl} alt="img" className="img-fluid contentImages"/> 
   <div className="proj-txtx">
<h4>{title}</h4>
     <span>{description}</span>
      <div className="buttons">
        </div>
       </div>
      </div>
       <div className="label">
         <img src={userPic} alt="img" className="img-fluid userImage" />
         <p> {name}</p>
         <p>Rating:
       <StarRatings
            rating={rating}
            starRatedColor="gold"
            numberOfStars={5}
            className='rating'
            starDimension="17px"
            starSpacing="0px"
            /></p>
     </div>
        </Col>
    )
}