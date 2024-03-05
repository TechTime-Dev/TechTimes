import React, { useState } from 'react';
import FavoriteBoarderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ArticleCard(props) {
  //onclick link send to route for add to history

  const [isfavorite, setIsFavorite] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);

  //handle click on favorite icon to change icon and send to backend to be added to favorites list
  const handleFavorite = async () => {
    try {
      //update favorite icon
      setIsFavorite((prev) => !prev);
      //send to favorites List
      const response = await fetch('/favorite', {
        method: postMessage,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleId: props.articleId,
          userId: props.userId,
          isfavorite: !isfavorite,
        }),
      });
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleHistory = async () => {
    //send to history list
    try {
      const response = await fetch('/history', {
        method: postMessage,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          articleId: props.articleId,
          userId: props.userId,
        }),
      });
      setLinkClicked(true);
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <div className='article-card-container'>
      <div className='right'>
        <p className='article-image'>Image</p>
        {/* <img src={props.img} /> */}
        {isfavorite ? (
          <FavoriteIcon className='favorite-icon' onClick={handleFavorite} />
        ) : (
          <FavoriteBoarderIcon
            className='favorite-icon'
            onClick={handleFavorite}
          />
        )}
      </div>
      <div class='article-card'>
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>Date: {props.date}</p>
        <p
          className={linkClicked ? 'link clicked' : 'link'}
          onClick={handleHistory}
        >
          Link: {props.link}
        </p>
      </div>
    </div>
  );
}
