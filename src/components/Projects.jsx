import React, { useEffect } from "react";
import projeto1 from '../imgs/projeto1.png'
import projeto2 from '../imgs/projeto2.png'
import desenvolvimento from '../imgs/desenvolvimento.png'
export default function Projects() {

  return (
    <section  id="projects">
      <div className="container">
        <div className="header">
          <h1 className="title">Meus projétos</h1>
          <div className="description">
            Aqui alguns dos principais projetos que venho desenvolvendo.
          </div>
        </div>
        <div className="content">
          <div className="cards">
            <a href="https://todoreact-pi.vercel.app" target='_blank' className="card">
              <div className="img" style={{backgroundImage: `url(${projeto1})`}}></div>
              <div className="description-card">
                <p className="nameCard">ToDo - Lista de Tarefas</p>
                <p className="description">
                 Lista de tarefas simples capaz de criar uma lista de tarefas e adicionar a ela itens a serem executados.
                </p>
                <div className="tecnology-card flex">
                  <span>JS</span>
                  <span>REACT</span>
                </div>
              </div>
            </a>
            <a href="https://cariok-films.vercel.app" target='_blank' className="card">
              <div className="img" style={{backgroundImage: `url(${projeto2})`}}></div>
              <div className="description-card">
                <p className="nameCard">Cariok Films</p>
                <p className="description">
                  Cariok Films é um site sobre informações de filmes e séries. (Em Desenvolvimento)
                </p>
                <div className="tecnology-card flex">
                  <span>JS</span>
                  <span>REACT</span>
                </div>
              </div>
            </a>
            <a href="https://financyapp.vercel.app" target='_blank' className="card">
              <div className="img" style={{backgroundImage: `url(https://user-images.githubusercontent.com/73366668/177011118-e4410ee0-0ad2-4f45-8646-7151b1805707.png)`}}></div>
              <div className="description-card">
                <p className="nameCard">FinanX - Fluxo de Caixa</p>
                <p className="description">
                  FinanX um projeto que facilita o controle de entrada e saida pessoal ou impresarial. (Em Desenvolvimento)
                </p>
                <div className="tecnology-card flex">
                  <span>TAILWINDCSS</span>
                  <span>REACT</span>
                </div>
              </div>
            </a>
            <a href="https://codelandia-21-xbox.vercel.app" target='_blank' className="card">
              <div className="img" style={{backgroundImage: `url(https://user-images.githubusercontent.com/73366668/178162681-b776ae52-98cb-4676-ab2b-373ea6961bcd.png)`}}></div>
              <div className="description-card">
                <p className="nameCard">Xbox Page - Codelandia</p>
                <p className="description">
                  Xbox Page é um site que contém informações sobre o console Xbox Series X - YuriCode Design. (Em Desenvolvimento)
                </p>
                <div className="tecnology-card flex">
                  <span>REACTJs</span>
                </div>
              </div>
            </a>
            <div className="card" style={{backgroundImage: `url(${desenvolvimento})`}}>
            
            </div>
            <div className="card" style={{backgroundImage: `url(${desenvolvimento})`}}>
            
            </div>
          </div>
        </div>
        <div className="buttons">
          <a href="https://github.com/viniciosragazzi?tab=repositories" className="btnR">
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
