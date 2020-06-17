import React from 'react'
import {A} from "hookrouter"

  
export const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <div className="middle-div">
                <A href="./">If you know enough about us, come back to the main page and start exploring our website</A>
            </div>
        </div>
    )
}
