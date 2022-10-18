import React from 'react';
//@ts-ignore
import { container, bars, barsShadow } from './columns.module.css';

type Props = {
    width?: string;
    children?: React.ReactNode;
};

const Columns: React.FC<Props> = ({ children }) => {
    return (
        <div className={container}>
            <div className={barsShadow}>
                <div className={bars} />
            </div>
            <div>{children}</div>
            <div className={barsShadow}>
                <div className={bars} />
            </div>
        </div>
    );
};

export default Columns;
