import React, { useEffect, useState } from "react";

function Quotes() {
  const [quotes, setQuote] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    showQuote();
  }, []);

  const showQuote = async () => {
    try {
      const response = await fetch(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );
      const data = await response.json();
      setQuote(data[0].quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="mb-5 text-center text-lg bg-amber-400 py-10 px-10">
      <p className="">{quotes}</p>
    </div>
  );
}

export default Quotes;
