import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Profile = () => {
  // const [childVisibility, setChildvisibility] = useState(0);
  // const [visibility, setVisibility] = useState("hidden")

  const [isVisible, setIsVisible] = useState(false);
    
  
  const changeVisibility = (e)=>{
    setIsVisible(prevState => !prevState);
        // setChildvisibility(!childVisibility)

        // if(childVisibility){
        //   setVisibility("visible")
        // }
        // else{
        //   setVisibility("hidden")
        // }
    }

    

  return (
    <div className="parent">
      <Router>
        <Link to="/" onClick={changeVisibility}>
          <img
            src="portrait-man-cartoon-style.jpg"
            width={50}
            height={50}
            alt="profile"
          />
        </Link>
      </Router>
      {isVisible && (<div className="child">
        <ul className="list">
          <li>Prfile</li>
          <li>Logout</li>
        </ul>
      </div>)}
    </div>
  );
};

export default Profile;
