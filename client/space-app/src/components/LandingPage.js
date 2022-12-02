import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Earth from '../videos/Earth.mp4'
import Logo from '../images/logo.png'
import jwt_decode from 'jwt-decode';
import React, {useState } from 'react'

export const LandingPage = () => {
  const navigate = useNavigate();
  // const [isSignedIn, setIsSignedIn] =useState(localStorage.getItem(localStorage.getItem("isSignedIn")|| false));
    const responseGoogle = (response) => {
      // setIsSignedIn(true)
      // localStorage.setItem("isSignedIn",true)
      localStorage.setItem("UserInfo",JSON.stringify(jwt_decode(response.credential)))
      navigate("/home");
    };
  return (
    <>  
    <div className='container videoContainer'>
    <div className='AppLayer'></div>
    <video src={Earth}
        type="video/mp4"
        loop={true}
        controls={false}
        muted
        autoPlay={true}
        className='HomeVideo'
        />
      <div className='Row'>
        <div className='col-4 card'>
        </div>
        <div className='col-4 centerDiv'>
        <div className='Login'>
        <div className='AppName'>
        <img src={Logo} className="LoginLogo img-fluid" alt="Logo"></img>
        </div>
        <div className='GoogleLogin'>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
           render={renderProps => (
           <button 
               className='btn btn-light LoginButton' 
               onClick={renderProps.onClick} 
               disabled={renderProps.disabled}>
               <FcGoogle className="mr-5 googleIcon"></FcGoogle> Sign in with Google</button>
               )}
           onSuccess={responseGoogle}
           cookiePolicy={"single_host_origin"} 
 />
          </GoogleOAuthProvider>
        </div>
        <div className='guest'>
        <button 
               className='btn btn-light guestButton fluid'
               onClick={() => navigate('/home')} >
               View as Guest
        </button>
        </div>
       
       </div>
        </div>
        <div className='col-4'></div>
      </div>

        </div>
    </>
        
  )
}
