import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import TechBadges from '../TechBadges';
//@ts-ignore
import downloadFile from '../../files/curriculo_ptbr.pdf';

import {
    introductionContainer,
    profileContainer,
    bottomSquare,
    downloadButton,
    //@ts-ignore
} from './intro.module.css';

export const Introduction = () => {
    return (
        <div className={introductionContainer}>
            <StaticImage
                src="../../images/profile.jpg"
                alt="Minha foto de perfil"
                placeholder="blurred"
                width={240}
                height={240}
                className={profileContainer}
            />
            <TechBadges />
            <a className={downloadButton} href={downloadFile} download>
                Baixe meu currículo!
            </a>
            <h1>Meu nome é Vinícius e sou um desenvolvedor Full Stack!</h1>
            <div className={bottomSquare}></div>
        </div>
    );
};

export default Introduction;
