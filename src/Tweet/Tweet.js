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
            </div>

            
            <div className="tweet__text">
            <h2 className="tweet__displayName">Yasmin Hillis
                <span className="tweet__username">@yasminhillis</span>
            </h2>
                <p>This is my first tweet</p>
                <img className="tweet__image" style={{width: '201px', height: '175px'}} src={Person} />

            </div>
       
          
        </div>
        
    )
}

export default Tweet;