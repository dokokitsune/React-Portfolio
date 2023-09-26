import React from "react";
import ReactTyped from "react-typed";
import "./home.scss"



function Home() {

  return(


    <>
      <h1>
        <ReactTyped className = "typeWriter position-absolute top-50 start-50 translate-middle"
          strings={["Weston Wood", "ACM Web Leader", "CSULA Junior"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}

          / >
      </h1>


    </>



  )

}


export default Home;
