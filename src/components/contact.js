import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-details">
            <ul>
              <li>
                <h5>
                <img src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
                </h5>
              </li>
              <li>
                <h5 style={{marginLeft: "2px"}}>
                  <a target="_blank" 
                  href="https://github.com/jash444">
                <img src="https://img.icons8.com/small/48/ffffff/github.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank" 
                  href="https://www.linkedin.com/in/jaswanth-geddam-52b951169/">
                <img src="https://img.icons8.com/ios-glyphs/48/4a90e2/linkedin.png"/>
                </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a target="_blank"
                   href="https://www.google.co.in/maps/place/Gaali+gopuram/@16.7951484,80.205919,8.25z/data=!4m9!1m2!2m1!1sEluru,+Andhra+Pradesh+galigoparam!3m5!1s0x3a366b2ce271afa3:0xac89a73bc5a8aa1f!8m2!3d16.7285842!4d81.078101!15sCiFFbHVydSwgQW5kaHJhIFByYWRlc2ggZ2FsaWdvcHVyYW2SAQxoaW5kdV90ZW1wbGU">
                <img src="https://img.icons8.com/external-justicon-flat-justicon/48/4a90e2/external-gps-map-and-location-justicon-flat-justicon.png"/>
                </a>
                </h5>
              </li>
            </ul>
          </div>
          <div className="contact-status">
            <p>
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:geddamjaswanth4@gmail.com"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
