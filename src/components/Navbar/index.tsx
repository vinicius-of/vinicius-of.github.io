import React, { useEffect, useState } from 'react';
import { ContactIcon, HomeIcon, ProjectsIcon } from '../Svgs';
import ProfileIcon from '../Svgs/ProfileIcon';
//@ts-ignore
import { hide, navbar } from './navbar.module.css';

export const Navbar = () => {
    const [classes, setClasses] = useState<string>(hide);
    const limitToHide = 270;

    const handleDisplay = () => {
        const isOutOfIntroduction = window.scrollY > limitToHide;
        setClasses(!isOutOfIntroduction ? hide : navbar);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleDisplay);

        return () => {
            window.removeEventListener('scroll', handleDisplay);
        };
    }, []);

    return (
        <nav className={classes}>
            <a href="#home">
                <HomeIcon />
                <span>Introdução</span>
            </a>
            <a href="#about">
                <ProfileIcon />
                <span>Sobre mim</span>
            </a>
            <a href="#experiences">
                <ProjectsIcon />
                <span>Experiências</span>
            </a>
            <a href="#contact">
                <ContactIcon />
                <span>Contato</span>
            </a>
        </nav>
    );
};

export default Navbar;
