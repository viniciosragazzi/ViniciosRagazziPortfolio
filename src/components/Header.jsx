import React, { useState } from "react";

import curriculo from "../medias/ViniciosRagazzi.pdf";
import { IoMdSchool } from "react-icons/io";
import { CgScrollV } from "react-icons/cg";

import {
  AiOutlineGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from "react-icons/ai";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header_page ${menuOpen ? "openMenu" : null}`}>
      <div className="bg"></div>
      <div className="container">
        <nav className={`navbar flex ${menuOpen ? "openMenu" : null}`}>
          <div className="logo">
            <span>&gt;_</span>
          </div>
          <div className="flex left">
            <AiOutlineClose
              className="close"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className="flex">
              <li>
                <a onClick={() => setMenuOpen(!menuOpen)} href="#">
                  Início
                </a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(!menuOpen)} href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a onClick={() => setMenuOpen(!menuOpen)} href="#projects">
                  Projétos
                </a>
              </li>
            </ul>
            <div className="buttons flex">
              <a href={curriculo} className="button" download>
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/viniciosragazzi/"
                target="_blank"
                className="button"
              >
                Fale Comigo
              </a>
            </div>
          </div>

          <div onClick={() => setMenuOpen(!menuOpen)} className="hamburgerMenu">
            <span></span>
          </div>
        </nav>
        <div className="content_header flex">
          <div className="content_header-text grid">
            <div className="text">
              <h4 className="subtitle">Olá, meu nome é</h4>
              <h1 className="title">Vinicios Ragazzi</h1>
              <h2>Desenvolvedor FrontEnd</h2>
              <p>
                Olá, meu nome é Vinicios Ragazzi, tenho 21 anos e no momento
                estou focado na área do desenvolvimento web Front-end. <br />
              </p>
              <p>
                <IoMdSchool /> Cursando Analise e Desenvolvimento de Sistemas
              </p>
            </div>

            <div className="redesS">
              <a
                target="_blank"
                href="https://github.com/viniciosragazzi"
                className="btn-rede"
              >
                <AiOutlineGithub />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/vin1ciosragazzi/"
                className="btn-rede"
              >
                <AiFillInstagram />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/viniciosragazzi/"
                className="btn-rede"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className="content_header-img">
            <img
              src="https://cdn.discordapp.com/attachments/771766413563002920/995058591620943942/ReadyPlayerMe-Avatar.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="discoverBtn">
        <a href="#skills">
          <CgScrollV />
        </a>
      </div>
    </header>
  );
}
