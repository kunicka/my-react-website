import React from 'react'

export interface IPageProps {
    title:string;
    children?:JSX.Element;
}

export const Page:React.FC<IPageProps>  = ({title, children}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div className="middle-div">
                {children}
            </div>
            
        </div>
    )
}
