import React, { useState } from 'react';
import FavoriteBoarderIcon from '@mui/icons-material/FavoriteBorder.js';
import FavoriteIcon from '@mui/icons-material/Favorite.js';

export default function ArticleCard(props) {
  console.log('Image prop:', props.img); // Log the img prop

  const [isfavorite, setIsFavorite] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);

  //handle click on favorite icon to change icon and send to backend to be added to favorites list
  const handleFavorite = async () => {
    try {
      //update favorite icon
      setIsFavorite((prev) => !prev);
      //send to favorites List
      const response = await fetch('/favorite', {
        method: 'POST',
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
        method: 'POST',
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
        {/* <p className='article-image'>Image</p> */}
        <img src={props.img} className='article-image' />
        {isfavorite ? (
          <FavoriteIcon className='favorite-icon' onClick={handleFavorite} />
        ) : (
          <FavoriteBoarderIcon
            className='favorite-icon'
            onClick={handleFavorite}
          />
        )}
      </div>
      <div className='article-card'>
        <p
          className={linkClicked ? 'link clicked' : 'link'}
          onClick={handleHistory}
        >
          Title: {props.title}
        </p>
        <p>
          Author: {props.author}, <i> {props.source}</i>
        </p>
        <p>Date: {props.date}</p>
        <p>{props.description && <p>Description: {props.description}</p>}</p>
      </div>
    </div>
  );
}
