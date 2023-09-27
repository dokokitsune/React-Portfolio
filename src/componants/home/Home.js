import React from "react";
import ReactTyped from "react-typed";

import "./home.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";




function Home() {

  return(


    <>
    <div className="container">

      <h1>
        <ReactTyped className = "typeWriter position-absolute top-50 start-50 translate-middle"
          strings={["Weston Wood", "ACM Web Officer", "CSU Los Angeles Junior"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}

          / >
      </h1>
        <div className="icons position-absolute top-50 start-50 translate-middle">

          <a href="https://www.linkedin.com/in/weston-wood9802/" target="_blank" style={{cursor: "default",}}>
            <FontAwesomeIcon className="iconElement"  id="linkedin" icon={faLinkedin} style={{color: "white",}} size="4x"/>
          </a>

          <a href="https://github.com/dokokitsune" target="_blank" >
            <FontAwesomeIcon className="iconElement" id="github"  icon={faGithubSquare} style={{color: "white",}} size="4x" />
          </a>

        </div>

      </div>




    </>



  )

}


export default Home;
