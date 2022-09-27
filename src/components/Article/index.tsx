import React, { FC } from 'react';
import { ReactNode } from 'react';
//@ts-ignore
import { articleItem } from './article.module.css';

type ArticleProps = {
    title: string;
    children: ReactNode;
};

export const Article: FC<ArticleProps> = ({ title, children }) => {
    return (
        <article className={articleItem}>
            <h2>{title}</h2>
            <p>{children}</p>
        </article>
    );
};

export default Article;
