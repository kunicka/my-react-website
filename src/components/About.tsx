import React from 'react'
import {A} from "hookrouter"
import { Page } from './Page'

  
export const About = () => {
    const bestsellerLink = <A href="./">If you know enough about us, come back to the main page and start exploring our website</A>
    return (
        <div>
            <Page title="About Page" children={bestsellerLink}/>
        </div>
    )
}
