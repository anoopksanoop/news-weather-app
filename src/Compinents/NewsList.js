import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Newslist.css"

const NewsList = ({ query, language }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        if (query) {
          axios
            .get(`https://gnews.io/api/v4/search?q=${query}&lang=${language}&apikey=c894a2ec90598db22f021e0c0a625295`)
            .then(response => {
              setArticles(response.data.articles);
            })
            .catch(error => {
              console.error("Error fetching news data:", error);
            });
        }
      }, [query, language]);
  return (
//     <div className="news-list">
//     {articles.map(article => (
//       <div key={article.url} className="article">
//         <h4><a href={article.url}>{article.title}</a></h4>
//         <p>{article.publishedAt}</p>
//         <p>{article.description}</p>
//       </div>
//     ))}
//   </div>



<div className="container my-4"  style={{overflow:"auto", height:"300px"}}>
<div className="row">
  {articles.map(article => (
    <div key={article.url} className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100">
        {article.image && (
          <img src={article.image} className="card-img-top" alt={article.title} />
        )}
        <div className="card-body">
          <h5 className="card-title">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </h5>
          <p className="card-text"><small className="text-muted">{new Date(article.publishedAt).toLocaleDateString()}</small></p>
          <p className="card-text">{article.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
  )
}

export default NewsList