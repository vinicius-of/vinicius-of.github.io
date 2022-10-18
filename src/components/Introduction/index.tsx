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
    title,
    techBadges,
    introductionContent,
    details,
    whatsappNumber,
    //@ts-ignore
} from './intro.module.css';

export const Introduction = () => {
    return (
        <>
            <div className={introductionContainer}>
                <div className={introductionContent}>
                    <StaticImage
                        src="../../images/profile.jpg"
                        alt="Minha foto de perfil"
                        placeholder="blurred"
                        width={240}
                        height={240}
                        className={profileContainer}
                    />
                    <div className={techBadges}>
                        <TechBadges />
                    </div>
                    <a className={downloadButton} href={downloadFile} download>
                        Baixe meu currículo!
                    </a>
                    <h1 className={title}>
                        Meu nome é Vinícius e sou um desenvolvedor Full Stack!
                    </h1>
                </div>
                <div className={bottomSquare}></div>
            </div>
        </>
    );
};

export default Introduction;
