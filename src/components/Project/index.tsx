import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC } from 'react';
//@ts-ignore
import { projectItem, roleStyle, stackStyle } from './project.module.css';

type ProjectProps = {
    title: string;
    imageData: IGatsbyImageData;
    description?: string;
    alt: string;
    role?: string;
    stack?: string;
};

export const Project: FC<ProjectProps> = ({
    title,
    description,
    imageData,
    alt,
    role,
    stack,
}) => {
    return (
        <div className={projectItem}>
            <GatsbyImage
                image={imageData}
                alt={alt}
                style={{ borderRadius: '50px' }}
            />
            <h3>{title}</h3>
            <span className={roleStyle}>{role}</span>
            <p>{description}</p>
        </div>
    );
};

export default Project;
