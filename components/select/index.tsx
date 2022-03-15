import React from 'react';

interface BaseProps {
    children: JSX.Element[] | JSX.Element;
    className?: string;
}

const Select = ({children, className}: BaseProps) => {
    let customClass = className ? className: ""
    return (
        <select className={`border border-zinc-300 h-10 rounded text-zinc-500 pl-3 focus-visible:outline-0 ${customClass}`}>
            {children}
        </select>
    );
}



export default Select;