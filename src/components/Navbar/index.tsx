import React, { useEffect, useState } from 'react';
import {
    AboutPortfolioIcon,
    ContactIcon,
    HomeIcon,
    ProjectsIcon,
} from '../Svgs';
import ProfileIcon from '../Svgs/ProfileIcon';
//@ts-ignore
import { hide, navbar } from './navbar.module.css';

export const Navbar = () => {
    const [classes, setClasses] = useState<string>(hide);
    const limitToHide = 270;

    const handleDisplay = () => {
        const isOutOfIntroduction = window.scrollY > limitToHide;

        if (!isOutOfIntroduction) {
            setClasses(hide);
        } else {
            setClasses(navbar);
        }
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
            <a href="#projects">
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
