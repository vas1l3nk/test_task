import React from 'react';
import { Link } from 'react-router-dom';

type CustomLinkProps = {
    to: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, className, style }) => {
    return (
        <Link to={to} className={className} style={style}>
            {children}
        </Link>
    );
};

export default CustomLink;