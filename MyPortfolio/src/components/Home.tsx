import React, { useEffect, useState } from "react";

import Header from "./Header";
import Services from "./Services";

function Hero() {
  const [quotes, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
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
    <div className="container mx-auto py-20 px-4">
      <div className="flex items-start gap-8 mb-4 bg-yellow-200">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQFTpmscNKg49A/profile-displayphoto-shrink_800_800/B4EZUeC81PGgAg-/0/1739965845734?e=1770249600&v=beta&t=kTzUXdBs7t69GposMqsns_-Q5j5bRRPd4t8g_4yk1TE"
          alt="Profile Picture Victor"
          className="w-75 h-75 rounded-full border-2"
        />
        <h1 className="text-9xl ">Victor dS</h1>
      </div>

      <div className="flex gap-6 mb-4 bg-red-300">
        <div className="flex-1">
          <p className="mb-4 ">I am Victor, a Web Developer</p>
          <p>Trusted full stack developer available to build your projects</p>
        </div>

        <div className="flex-1">
          <p className="mb-8 ">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. Delivering work
            within time and budget which meets client’s requirements is our
            moto. Lorem Ipsum has been the industry's standard dummy text ever
            when an unknown printer took a galley.
          </p>
        </div>

        <div className="flex-1">
          <p className="">{quotes}</p>
        </div>
      </div>

      <div className="flex bg-blue-300 ">
        <Services />
      </div>
    </div>
  );
}

export default Hero;
