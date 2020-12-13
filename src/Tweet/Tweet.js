import React, { useState } from 'react'; 
import './Tweet.css'
import { Avatar } from '@material-ui/core'

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Person from '../images/person.jpg'

const Tweet = ({ profilePic, displayName, username, text, image }) => {
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
            <Avatar  className="tweet__image" src={profilePic} />
            </div>

            
            <div className="tweet__text">
            <h2 className="tweet__displayName">{displayName}
                <span className="tweet__username">@{username}</span>
            </h2>
                <p>{text}</p>

                <img className="tweet__image" style={{width: '201px', height: '175px'}} src={image} />

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