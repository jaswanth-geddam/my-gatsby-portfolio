import React from "react"
import { FaGithub, FaHackerrank, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jash444"
            >
              <FaGithub />
            </a>
          </li>
          <li></li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jaswanth-geddam-52b951169/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li></li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}
