import React from 'react'
import {A} from 'hookrouter'

export const Home = () => {
    return (
        <div>
            <h2>Welcome to the home page of this page.</h2>
            <div className="middle-div">
                
            <A href='./Product1'>Click to see our bestseller!
                </A></div>
        </div>
    )
}
