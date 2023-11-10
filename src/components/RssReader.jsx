import React, { useEffect, useState } from 'react';
import "../style/RssReader.css"

function extractTextFromHtml(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
}

function createCard(item) {
  const descriptionHtml = item.description;
  const descriptionText = extractTextFromHtml(descriptionHtml);

  const imageMatch = descriptionHtml.match(/<img [^>]*src="([^"]+)"[^>]*>/i);
  let image = '';
  if (imageMatch && imageMatch.length > 1) {
    image = imageMatch[1];
  }

  return (
    <div key={item.guid} className="col-md-6 mb-4">
      <div className="cardRSS">
        <div className="cardRSS-body">
          <h5 className="cardRSS-title">{item.title}</h5>
          <p className="cardRSS-text">{descriptionText}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btnRSS btn-primaryRSS"
          >
            ...
          </a>
        </div>
        {image && (
          <img src={image} className="cardRSS-img-top" alt="Image" />
        )}
      </div>
    </div>
  );
}

function RssReader() {
  const [rssItems, setRssItems] = useState([]);

  useEffect(() => {
    const feedUrl = 'https://rss.app/feeds/cWgW28GDGUwjXFYM.xml';

    function loadRssCards() {
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'ok') {
            const items = data.items.slice(0, 3); // Limit to 3 items
            setRssItems(items.reverse()); // Reverse the order to show the latest first
          }
        });
    }

    loadRssCards();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {rssItems.map((item) => createCard(item)).reverse()} {/* Reverse the order again */}
      </div>
    </div>
  );
}

export default RssReader;