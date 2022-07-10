import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3, DiJavascript } from "react-icons/di";
import ftnPerso  from "../imgs/ftnPerso.png";
export default function Skills() {
  return (
    <section id="skills">
      <div className="container grid">
        <div className="skills_title grid">
          <h2 className="title">Skills</h2>
          <p className="description">
            Essas são umas das principais tecnologias que utilizo no meu dia a
            dia.
          </p>
        </div>
        <div className="skills_cards">
          <div className="skill">
            <AiFillHtml5 />
            <p className="title2">HTML</p>
          </div>
          <div className="skill">
            <DiCss3 />
            <p className="title2">CSS</p>
          </div>
          <div className="skill">
            <DiJavascript />
            <p className="title2">JS</p>
          </div>
          <div className="skill">
            <FaReact />
            <p className="title2">ReactJS</p>
          </div>
          <div className="skill">
            <FaNodeJs />
            <p className="title2">NodeJS</p>
          </div>
        </div>
      
      </div>
    </section>
  );
}
