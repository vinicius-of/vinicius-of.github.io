import React from 'react';
import { GithubIcon, LinkedinIcon } from '../Svgs';
//@ts-ignore
import {
    contactContainer,
    linksContainer,
    linkedinIcon,
    //@ts-ignore
} from './contact.module.css';

const Contact = () => {
    return (
        <div className={contactContainer}>
            <h2>Contato</h2>
            <p>Aqui você pode encontrar mais detalhes sobre minha carreira!</p>
            <p>Site feito utilizando React Gatsby!</p>
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
                    className={linkedinIcon}
                >
                    <LinkedinIcon />
                </a>
            </div>
        </div>
    );
};

export default Contact;
