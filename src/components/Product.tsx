import React from 'react'

interface IProductProps{
    title: string
}

export const Product:React.FC<IProductProps> = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}
