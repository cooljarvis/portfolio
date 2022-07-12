import React from "react";
import pImg from '../assets/images/profile.jpeg'
import './ProfileImage.css'

const profileImage = () => {
    return (
        <>
        <img src={pImg} className="image-container"/>
        </>
    )
}

export default profileImage