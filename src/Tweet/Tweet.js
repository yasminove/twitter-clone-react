import React, { useState } from 'react'; 
import './Tweet.css'
import { Avatar } from '@material-ui/core'

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Image from '../images/yasmin.jpeg'
import Person from '../images/person.jpg'

const Tweet = () => {
    const [ heartConut, setHeartConut ] = useState(0); 
    
    const handleHeartClick = () => {
        setHeartConut(heartConut + 1)
    }

    const handleFilledHeartClick = () => {
        setHeartConut(heartConut-1)
    }

    console.log(heartConut, 'heartConut');
    return (
        <div className="tweet">
            <div className="tweet__wrapper">
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
            <div className="tweet__icons">
            <ChatBubbleOutlineIcon />
            <RepeatIcon />
            { heartConut === 0 || heartConut % 2 === 0 ? <FavoriteBorderIcon onClick={handleHeartClick}/> :  <FavoriteIcon onClick={handleFilledHeartClick} style={{color: '#e0245e'}}/>}
            { heartConut > 0 ?  <span style={{marginLeft: '-107px'}}>{heartConut}</span> : null}
            <PublishIcon />

            </div>
       
           
        </div>
        
    )
}

export default Tweet;