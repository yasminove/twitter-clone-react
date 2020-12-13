import React, { useState } from 'react'; 
import './Tweet.css'
import { Avatar } from '@material-ui/core'

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import FavoriteIcon from '@material-ui/icons/Favorite';
import db from '../firbase';

import  {docId}  from '../TweetBox/TweetBox'

import Person from '../images/person.jpg'

const Tweet = ({ profilePic, displayName, username, text, image, heartCount }) => {
    const [ heartConut, setHeartConut ] = useState(0); 
    
    const handleHeartClick = () => {
        console.log(docId, 'docId');
        
        setHeartConut(heartConut + 1)
        // const doc = db.collection("posts").doc(docId); 
        // console.log(doc, 'doc777777');
        // console.log(doc.id, 'doc777777');
        const doc = db.collection('posts').doc(docId);
        // console.log(heartConut, 'heartConut');
        console.log(heartConut, 'heartConutttttttttttttttttttt');
        doc.update({
            heart: heartConut + 1,
            displayName: "The GREAT"

        })    
        console.log(doc, 'doc');    
    }

    // console.log(heartConut, 'heartConutheartConutheartConutheartConutheartConut');

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
                {image ? (
                    <img className="tweet__image" style={{width: '201px', height: '175px'}} src={image} />
                )
                : null}
                

            </div>
            </div>
            <div className="tweet__icons">
            <ChatBubbleOutlineIcon />
            <RepeatIcon />
            { heartConut === 0 || heartConut % 2 === 0 ? <FavoriteBorderIcon onClick={handleHeartClick}/> :  <FavoriteIcon onClick={handleFilledHeartClick} style={{color: '#e0245e'}}/>}
            { heartConut > 0 ?  <span style={{marginLeft: '-107px'}}>{heartCount}</span> : null}
            <PublishIcon />

            </div>
       
           
        </div>
        
    )
}

export default Tweet;