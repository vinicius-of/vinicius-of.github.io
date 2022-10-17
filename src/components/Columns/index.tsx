import React from 'react';
//@ts-ignore
import { container, bars } from './columns.module.css';

type Props = {
    width?: string;
    children?: React.ReactNode;
};

const Columns: React.FC<Props> = ({ width, children }) => {
    return (
        <div className={container}>
            <section className={bars}></section>
            <div>{children}</div>
            <section className={bars}></section>
        </div>
    );
};

export default Columns;
