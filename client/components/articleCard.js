import React, { useState } from 'react';
import FavoriteBoarderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ArticleCard(props) {
  //onclick link send to route for add to history

  //onclick heart send to route add to favorites AND change color of heart
  const [isfavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
    //send to favorites List
  };

  return (
    <div class='article-card-container'>
      <div class='right'>
        <p class='article-image'>Image</p>
        {/* <img src={props.img} /> */}
        {isfavorite ? (
          <FavoriteIcon onClick={handleFavorite} />
        ) : (
          <FavoriteBoarderIcon onClick={handleFavorite} />
        )}
      </div>
      <div class='article-card'>
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>Date: {props.date}</p>
        <p>Link: {props.link}</p>
      </div>
    </div>
  );
}
