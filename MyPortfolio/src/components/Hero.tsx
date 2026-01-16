import React from "react";

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-5 bg-yellow-200 p-4 sm:p-6 lg:p-8">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E03AQFTpmscNKg49A/profile-displayphoto-shrink_800_800/B4EZUeC81PGgAg-/0/1739965845734?e=1770249600&v=beta&t=kTzUXdBs7t69GposMqsns_-Q5j5bRRPd4t8g_4yk1TE"
        alt="Profile Picture Victor"
        className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-2 shrink-0"
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center sm:text-left">
        Welcome to my world
      </h1>
    </div>
  );
}

export default Hero;