import React from 'react';
//@ts-ignore
import { details } from './fastcontact.module.css';

const FastContact = () => {
    return (
        <div className={details}>
            <h4>Para contato</h4>
            <a href="mailto:vinicius.oliveirafonseca@gmail.com" target="_blank">
                <strong>vinicius.oliveirafonseca@gmail.com</strong>
            </a>
            <p>
                <strong>+55 (82) 99639-4392</strong>
            </p>
        </div>
    );
};

export default FastContact;
