import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/16366726?s=460&u=a470a73a5629f08282f479d5f8b319d432b692be&v=4" alt="Jaime Lay"/>
                <div>
                    <strong>Jaime Lay</strong>
                    <span>Educação Física</span>
                </div>
            </header>

            <p>
                Entusiasta por Calistenia, Powerlifting e Musculação.
                <br /> <br />
                Experiência principal em calistenia.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$150,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;