import React from 'react'
import {A} from 'hookrouter'
import {Page} from './Page'

export const Home = () => {
        const bestsellerLink = <A href='./Product1'>Click to see our bestseller!</A>
        return (
            <div className="page-container">
                <Page title="Welcome to the home page of this page." children={bestsellerLink}/>
            </div>
        )
    }
    

