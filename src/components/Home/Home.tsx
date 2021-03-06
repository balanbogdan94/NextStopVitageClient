import React from 'react'
import "./Home.scss"

const Home = () => {
return (
<div className="mainImage">
    <img 
        alt="logoImg"
        srcSet =" images/Home/home-extra-large.webp 4025w, 
        images/Home/home-large.webp 3019w, 
        images/Home/home-medium.webp 2013w,
        images/Home/home-small.webp 1006w " 
         src="images/Home/home-small.webp" />
</div>
)}



export default Home;