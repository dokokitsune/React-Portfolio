import React from "react";
import { Image } from "react-bootstrap";

import "./about.scss"
import aws from "../../awsconfig";
import { Storage } from "@aws-amplify/storage";

function About_Me(){
  const aboutMeIMG = async () => {
    let data = await Storage.get('Pictures/IndexPhoto.jpg', {level: "public"});

    return data;
  }

  console.log(aboutMeIMG());







    return (
      <>
      <Image className="top-50 start-50" src={(aboutMeIMG())}></Image>

      </>
    )

}

export default About_Me;
