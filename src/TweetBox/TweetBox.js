import React, { useState, useEffect } from 'react';
import './TweetBox.css';
import Image from '../images/yasmin.jpeg';
import { Avatar, Button } from '@material-ui/core';
import db from '../firbase'
let docId = ''

const TweetBox = () => {
  const [ tweet, setTweet ] = useState('');

  const composeTweet = (e) => {
    setTweet(e.target.value)
    // setTweet("")
  }

  const addTweet = () => {
    // console.log('hiii');
    // console.log(tweet.length, 'tweet.length');
    if(tweet.length > 0){
      db.collection('posts').add({
        displayName: "Yasmin Hillis",
        profilePic: "https://avatars0.githubusercontent.com/u/30685524?s=460&u=fb45f5dc18c7fc8537141e118f0bedb2c5af4348&v=4", 
        text: tweet, 
        username: "yasminhillis",
      }).then(docRef => {
        // console.log(docRef.id, 'docRef');
        docId = docRef.id;
        console.log(docId, 'docId');
        // console.log(typeof docId, 'docId');
      })
      setTweet("")
    }
  
    
  }

  return (
    <div className='tweetBox'>
      <form action=''  >
        <div className='tweetBox__input'>
         
          <Avatar src={Image}/>
          <input onChange={composeTweet} value={tweet} type='text' placeholder="What's happening" />
          
        </div>
        {/* <input className="tweetBox__image" type='text' placeholder="Optional: Add an image" /> */}
        <Button  onClick={addTweet} className='tweetBox_btn' variant='contained'>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
export { docId };
