import React from 'react';
import Home from '../Home/Home';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';
import Tweet from '../Tweet/Tweet';
const Feed = () => {
  return (
    <div className='feed'>
      <Home />
      <TweetBox />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Feed;
