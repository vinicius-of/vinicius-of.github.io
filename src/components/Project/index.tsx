import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC } from 'react';
//@ts-ignore
import * as styles from './project.module.css';

type ProjectProps = {
    title: string;
    imageData: IGatsbyImageData;
    description?: string;
};

export const Project: FC<ProjectProps> = ({
    title,
    description,
    imageData,
}) => {
    return (
        <div className={styles.projectItem}>
            <GatsbyImage
                image={imageData}
                alt="Teste"
                imgClassName={styles.image}
                className={styles.containerImage}
            />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Project;
