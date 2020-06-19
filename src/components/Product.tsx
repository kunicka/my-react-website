import React from 'react'

export interface IProductProps{
    title:string;
}

export const Product:React.FC<IProductProps> = ({title}) => {
    return (
        <div className="inside-page-container">
            <h2>{title}</h2>
            <p>{title}</p>
            
        </div>
    )
}
