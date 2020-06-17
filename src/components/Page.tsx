import React from 'react'

export interface IPageProps {
    title:string;
    children?:JSX.Element;
}

export const Page:React.FC<IPageProps>  = ({title, children}) => {
    return (
        <div className="inside-page-container">
            <h2>{title}</h2>
            <div className="inside-page-container">
                {children}
            </div>
            
        </div>
    )
}
