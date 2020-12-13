import React, { Component, useEffect, useState } from 'react';
import Home from '../Home/Home';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';
import FilpMove from 'react-flip-move'
import db from '../firbase'
 
import Image from '../images/yasmin.jpeg';

import Tweet from '../Tweet/Tweet';
const Feed = () =>  {
  const [ posts, setPosts ] = useState([])
  // componentDidMount() {
  //   // console.log(db.collection('posts'), 'db.collection(posts)');
  //   db.collection('posts').onSnapshot(snapshot => {
  //     // console.log(snapshot.docs, 'snapshot.docs');
  //     snapshot.docs.map(doc => {
  //       // console.log(doc, 'doc');
  //       // console.log(doc.data(), 'doc.data()');

  //     })
  //   })
  // }
  useEffect(() => {
    
      db.collection('posts').onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => {
            // console.log(doc.data(), 'doc.data()');
            return doc.data()
          })
        )
        // snapshot.docs.map(doc => {
        //   // console.log(doc.data(), 'doc.data()');
           
        // })
      })
    
  }, []);

  console.log(posts, 'posts');

 
    return (
      <div className='feed'>
        <Home />
        <TweetBox />
       
        {posts.map(post => (
          <>
          <FilpMove>
           <Tweet
           key={post.text}
           profilePic={post.profilePic}
           displayName={post.displayName}
           username={post.username}
           text={post.text}
           image={post.image}
           heartCount={post.heart}
         />
        
         </FilpMove>
         </>
        ))}
        {/* <Tweet />
        <Tweet />
        <Tweet />
        <Tweet /> */}
      </div>
    );
  
}

export default Feed;
