import { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=596e7b09f0cc47bd8cf2a8ca1abd90af";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch news data.");
      }
      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="news-container">
      <h1>News Today</h1>
      {newsData.map((eachItem, index) => (
        <div className="news-item" key={index}>
          <h2 className="news-title">{eachItem.title}</h2>
          <p className="news-date">
            {new Date(eachItem.publishedAt).toLocaleDateString()}
          </p>
          <a
            href={eachItem.url}
            className="news-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}

export default News;
