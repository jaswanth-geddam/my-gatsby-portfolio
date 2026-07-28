import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Geddam jaswanth, I
              develop web applications using frontend or backend.
              My core skill is based on JavaScript,Node and I love to
              do most of the things using JavaScript. I love to make the web
              more open to the world. Looking forward to taking up a challenging role in a company, 
              while enhancing my technical knowledge and gaining development experience.
            </p>
            <div className="about-action">
              <Button
                link="https://drive.google.com/file/d/19IpzYrTPfjACBXsTpMCTJmzaIXHAN4zz/view?usp=sharing"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              {/* <Button clickEvent link="#skill" ml="15px" title="My Skills" /> */}
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img style={{marginLeft:"30%"}} alt="profile" src={profile}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
