import React, { useState } from "react";
import { Image } from "react-bootstrap";

import "./about.scss"
import { Storage } from "@aws-amplify/storage";




function About_Me(){


  //image state
  const [image, setImage] = useState('');


  const aboutMeIMG = async () => {
    const data = await Storage.get("Pictures/IndexPhoto.jpg");
    setImage(data);
  }
  aboutMeIMG();









    return (
      <>

        <div className="aboutMe translate-middle-x start-50 top-50 position-absolute">
          Hello testing testing

        </div>

        <Image className="image position-absolute translate-middle-x start-50 top-50" alt="new"  src={image} rel="noreferrer" rounded />


      </>
    )

}

export default About_Me;
