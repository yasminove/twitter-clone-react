import React from 'react';
import './TweetBox.css';
import Image from '../images/yasmin.jpeg';
import { Avatar, Button } from '@material-ui/core';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form action=''>
        <div className='tweetBox__input'>
          <Avatar src={Image}/>
          <input type='text' placeholder="What's happening" />
          
        </div>
        {/* <input className="tweetBox__image" type='text' placeholder="Optional: Add an image" /> */}
        <Button className='tweetBox_btn' variant='contained'>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
