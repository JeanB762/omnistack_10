import React from 'react';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
          </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18680754?s=460&v=4" alt="Jean Borges" />
              <div className="user-info">
                <strong>Jean Borges</strong>              
                <span>ReactJs, ReactNative, NodeJs</span>
              </div>
            </header>
            <p>Programador de bosta web e mobile.</p>
            <a href="https://github.com/JeanB762">Acessar no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18680754?s=460&v=4" alt="Jean Borges" />
              <div className="user-info">
                <strong>Jean Borges</strong>              
                <span>ReactJs, ReactNative, NodeJs</span>
              </div>
            </header>
            <p>Programador de bosta web e mobile.</p>
            <a href="https://github.com/JeanB762">Acessar no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18680754?s=460&v=4" alt="Jean Borges" />
              <div className="user-info">
                <strong>Jean Borges</strong>              
                <span>ReactJs, ReactNative, NodeJs</span>
              </div>
            </header>
            <p>Programador de bosta web e mobile.</p>
            <a href="https://github.com/JeanB762">Acessar no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/18680754?s=460&v=4" alt="Jean Borges" />
              <div className="user-info">
                <strong>Jean Borges</strong>              
                <span>ReactJs, ReactNative, NodeJs</span>
              </div>
            </header>
            <p>Programador de bosta web e mobile.</p>
            <a href="https://github.com/JeanB762">Acessar no GitHub</a>
          </li>
        </ul>
      </main>

    </div>
  );
}

export default App;