import React from 'react';
import FastContact from '../FastContact';
import { GithubIcon, LinkedinIcon } from '../Svgs';
//@ts-ignore
import {
    contactContainer,
    linksContainer,
    //@ts-ignore
} from './contact.module.css';

const Contact = () => {
    return (
        <div className={`${contactContainer} highlight-text`}>
            <h2>Contato</h2>
            <div>
                <p>Email</p>
                <a
                    href="mailto:vinicius.oliveirafonseca@gmail.com"
                    target="_blank"
                >
                    <strong>vinicius.oliveirafonseca@gmail.com</strong>
                </a>
            </div>
            <div>
                <p>Número de Celular / WhatsApp</p>
                <p>
                    <strong>+55 (82) 99639-4392</strong>
                </p>
            </div>
            <div className={linksContainer}>
                <a
                    href="https://github.com/vinicius-of"
                    rel="nofollow"
                    target="_blank"
                >
                    <GithubIcon />
                </a>
                <a
                    rel="nofollow"
                    href="https://www.linkedin.com/in/vin%C3%ADcius-de-oliveira-fonseca-969301177/"
                    target="_blank"
                >
                    <LinkedinIcon />
                </a>
            </div>
            <p>Aqui você pode encontrar mais detalhes sobre minha carreira!</p>
            <p>Site feito utilizando React!</p>
        </div>
    );
};

export default Contact;
