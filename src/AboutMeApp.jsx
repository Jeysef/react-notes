import React from "react";
import "./index.css";
import { ScrollRotate } from "react-scroll-rotate";

const AboutMeApp = () => {
  /*

  * FUNCTIONS

  */
    // const Animation = () => (
    //   <ScrollAnimation animateBounce="bounceIn">
    //     <p>Textb</p>
    //   </ScrollAnimation>
    // );
    return (
      <div className="wrapinfocard">
        <div className="aboutMeInfoWrapper ov-hid">
          <div className="aboutMeInfo ov-hid">
            <ul>
              <li>
                <b>About me</b>
              </li>
              <li>Student</li>
              <li>programer</li>
            </ul>
          </div>
        </div>
        <ScrollRotate
          from={0}
          to={40}
          animationDuration={0.2}
          method={"perc"}
          loops={0}
        >
          <div className="aboutMeInfoBackcard2 ov-hid"></div>
        </ScrollRotate>

        <ScrollRotate
          from={0}
          to={60}
          animationDuration={0.2}
          method={"perc"}
          loops={0}
        >
          <div className="aboutMeInfoBackcard ov-hid"></div>
        </ScrollRotate>
      </div>
    );
  }

export default AboutMeApp;
