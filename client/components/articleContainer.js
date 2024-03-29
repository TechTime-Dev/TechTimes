import React, { useState, useEffect } from "react";
import ArticleCard from "./articleCard.js";
import mockArticles from "./mockData.js"; // Import mock data
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateSearchArticles } from "../redux/articleSlice.js";

export default function ArticleContainer() {
  const dispatch = useDispatch();
  const articlesArray = useSelector((state) => state.articles.searchArticles);

  useEffect(() => {
    fetch("http://localhost:3000/getNews")
      .then((response) => response.json())
      .then((data) => {
        console.log("line 12", data);
        console.log("articlesArray", data.articles);
        dispatch(updateSearchArticles(data.articles));
        console.log("after dispatching", articlesArray);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div className="article-container max-w-[1600px] mx-auto justify-center items-center h-screen pl-8">
      {articlesArray.map((article, index) => (
        <ArticleCard
          key={index}
          title={
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title.split(" - ")[0]}
            </a>
          }
          //* line 40
          author={article.author ? article.author : ""}
          source={article.source.name}
          //* line 43
          date={new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          })}
          img={article.urlToImage}
          description={article.description}
        />
      ))}
    </div>
  );
}
