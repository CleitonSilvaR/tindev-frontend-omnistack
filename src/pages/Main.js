import React from 'react';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import logo from '../assets/logo.svg';
import './Main.css';


export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo}  alt="Tindev" />

            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>
                            Alguma descricao de algum perfil no gitHub.
                        </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>
                            Alguma descricao de algum perfil no gitHub.
                        </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>
                            Alguma descricao de algum perfil no gitHub.
                        </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>
                            Alguma descricao de algum perfil no gitHub.
                        </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt=""/>
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>
                            Alguma descricao de algum perfil no gitHub.
                        </p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"/>
                        </button>
                        <button type="button">
                            <img src={like} alt="Like"/>
                        </button>
                    </div>
                </li>
            </ul>

        </div>
    );
}