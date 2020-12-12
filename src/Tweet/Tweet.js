import React from 'react'; 
import './Tweet.css'
import { Avatar } from '@material-ui/core'
import Image from '../images/yasmin.jpeg'
import Person from '../images/person.jpg'

const Tweet = () => {
    return (
        <div className="tweet">
            <div className="tweet__header">
            <Avatar  className="tweet__image" src={Image} />
            <h2>Yasmin Hillis
                <span>@yasminhillis</span>
            </h2>

            </div>

            
            <div className="tweet__text">
                <p>This is my first tweet</p>
            </div>
            <div className="tweet__image">
                <img style={{width: '201px', height: '175px'}} src={Person} />
            </div>
        </div>
        
    )
}

export default Tweet;