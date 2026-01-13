import React, { useEffect, useState } from "react";

interface QuotesTypes {
  quote: string;
  author: string;
}

const Card = () => {
  const [randomQuotes, setRandomQuotes] = useState<QuotesTypes[]>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );
      const getQuotes = await response.json();
      setRandomQuotes(getQuotes);
      setloading(true);
    } catch {
      console.log("It went wrong");
    }
  };

  return (
    <>
      <div className="container">
        {!loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <h2>Quotes from Breaking Bad</h2>
        )}
        {randomQuotes.map((quote, index) => (
          <span key={index}>
            <p>{quote.quote}</p>
            <h4>- {quote.author}</h4>
          </span>
        ))}
      </div>

      <button onClick={() => window.location.reload()}>Get Quotes</button>
    </>
  );
};

export default Card;
