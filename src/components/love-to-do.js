import React from "react"

import { Container, Title } from "./common"

import writtingblog from "../assets/image/writtingblog.svg"
import travelling from "../assets/image/travelling.svg"
import mountainhiking from "../assets/image/mountainhiking.svg"
import swimming from "../assets/image/swimming.svg"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img src={writtingblog} />
            <h4>Sports</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={swimming} />
            <h4>Watching Movies</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={mountainhiking} />
            <h4>Disassembleing And Assembleing Things</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={travelling} />
            <h4>Learn Some New Things</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }
