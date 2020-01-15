import React, { useState } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/7772980?s=400&u=976f5e43d532ba1449ca5063fe012a5bd379fe59&v=4"
                all="Marcos Vinicius"
                alt=""
              />
              <div className="user-info">
                <strong>Marcos Vinicius</strong>
                <span>Angular, React, Flutter ,PHP, Node Js</span>
              </div>
            </header>
            <p>Entusiasmado por Tecnologias de desenvolvimento Web e mobile</p>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/7772980?s=400&u=976f5e43d532ba1449ca5063fe012a5bd379fe59&v=4"
                all="Marcos Vinicius"
                alt=""
              />
              <div className="user-info">
                <strong>Marcos Vinicius</strong>
                <span>Angular, React, Flutter ,PHP, Node Js</span>
              </div>
            </header>
            <p>Entusiasmado por Tecnologias de desenvolvimento Web e mobile</p>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/7772980?s=400&u=976f5e43d532ba1449ca5063fe012a5bd379fe59&v=4"
                all="Marcos Vinicius"
                alt=""
              />
              <div className="user-info">
                <strong>Marcos Vinicius</strong>
                <span>Angular, React, Flutter ,PHP, Node Js</span>
              </div>
            </header>
            <p>Entusiasmado por Tecnologias de desenvolvimento Web e mobile</p>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/7772980?s=400&u=976f5e43d532ba1449ca5063fe012a5bd379fe59&v=4"
                all="Marcos Vinicius"
                alt=""
              />
              <div className="user-info">
                <strong>Marcos Vinicius</strong>
                <span>Angular, React, Flutter ,PHP, Node Js</span>
              </div>
            </header>
            <p>Entusiasmado por Tecnologias de desenvolvimento Web e mobile</p>
            <a>Acessar o perfil na Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
