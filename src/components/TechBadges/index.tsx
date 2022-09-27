import React from 'react';
import {
    GitLogo,
    NestjsLogo,
    NodejsLogo,
    PostgresLogo,
    ReactLogo,
    TypescriptLogo,
} from '../Svgs';
//@ts-ignore
import * as styles from './techbadges.module.css';

const TechBadges = () => {
    return (
        <div className={styles.techBadges}>
            <ReactLogo />
            <PostgresLogo />
            <NodejsLogo />
            <TypescriptLogo />
            <GitLogo />
            <NestjsLogo />
        </div>
    );
};

export default TechBadges;
