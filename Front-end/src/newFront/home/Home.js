import React from 'react'
import Navbar from './compoents/Navbar.js';
import Intro from './compoents/Intro.js';
import Footer from './compoents/Footer.js';
import Feed from "../misc/feed"
function Home(){

    return(
       <>
       
       <Navbar />
       <Intro /><Feed /><Footer/>
      
       {/* <Intro /> 
       <Feedback/> */}
       </>
    );
}
export default Home;