import React, { useState } from "react";
import { Image } from "react-bootstrap";

import "./about.scss"
import { Storage } from "@aws-amplify/storage";




function About_Me(){


  //image state
  const [image, setImage] = useState('');


  const aboutMeIMG = async () => {
    const data = await Storage.get("Pictures/IndexPhoto.jpg", {
      expires: 30
    });
    setImage(data);
  }
  aboutMeIMG();









    return (
      <>

        <div className="aboutMe start-50 top-50 position-absolute ">
          My name is Weston Wood. I am currently a Junior at California State University, Los Angeles
          and a Web Officer for the Assosiation for Computing Machinery (ACM) on Campus. After college
          I want to persue a Backend Web-development job or a Dev-ops engineer job. In my free time I work
          on learning new skills for my future career.


        </div>

        <Image className="image position-absolute translate-middle-x start-50 top-50" alt="new"  src={image} rel="noreferrer" rounded />


      </>
    )

}

export default About_Me;
