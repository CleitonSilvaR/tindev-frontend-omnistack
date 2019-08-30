import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import api from '../services/api';
import './Login.css';



export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(evento) {
        evento.preventDefault();

        const response = await api.post('/devs', { username });

        const { _id } = response.data;

        console.log(response);
        console.log(_id);

        history.push(`/dev/${_id}`)
    }
    
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                 placeholder="Digite seu usuário no Github"
                 value={username}
                //  value='CleitonSilvaR'
                 onChange={evento => setUsername(evento.target.value)}
                />

                <button type="submit">Enviar</button>

            </form>
        </div>
    );
}
