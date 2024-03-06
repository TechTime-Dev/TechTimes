import React, { useState, useEffect } from 'react';
import ArticleCard from './articleCard.js';
import mockArticles from './mockData.js'; // Import mock data
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateSearchArticles } from "../redux/articleSlice.js";

export default function ArticleContainer() {
    const dispatch = useDispatch();
  // const [articles, setArticles] = useState([]);
  const articlesArray = useSelector((state) => state.articles.searchArticles);

  useEffect(() => {
    fetch('http://localhost:3000/getNews')
      .then((response) => response.json())
      .then((data) => {
        console.log('line 12', data);
        console.log('articlesArray', data.articles);
        dispatch(updateSearchArticles(data.articles))
        console.log('after dispatching', articlesArray);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  //   console.log(articles);

  return (
    <div className='article-container'>
      {articlesArray.map((article, index) => (
        <ArticleCard
          key={index}
          title={
            <a href={article.url} target='_blank' rel='noopener noreferrer'>
              {article.title}
            </a>
          }
          //   title= {article.title}
          //   author={article.author}
          source={article.source.name}
          date={article.publishedAt}
          img={article.urlToImage}
          description={article.description}
        />
      ))}
    </div>
  );
}
