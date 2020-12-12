import React from 'react'; 
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <Avatar />
            <input type="text" placeholder="What's happening"/>
            <Button className="tweetBox_btn" variant="contained">Tweet</Button>
        </div>
    )
}

export default TweetBox;