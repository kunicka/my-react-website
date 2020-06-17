import React from 'react'
import {A} from "hookrouter"
import { Page } from './Page'

  
export const About = () => {
    const homeLink = <A href="./">If you know enough about us, come back to the main page and start exploring our website</A>
    return (
        <div className="page-container">
            <Page title="About Page" children={homeLink}/>
        </div>
    )
}
