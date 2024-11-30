

import React from 'react';

const MovingTextBar = () => {
  return (
<div className="relative bg-secondary text-white overflow-hidden px-20 py-1">
    {/* Fade Effects */}
    <div className="absolute left-0 top-0 h-full w-36 bg-gradient-to-r from-secondary via-transparent to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 h-full w-36 bg-gradient-to-l from-secondary via-transparent to-transparent z-10 pointer-events-none"></div>

    {/* Scrolling Text */}
    <div className="whitespace-nowrap animate-scroll">
      <span className="inline-block px-4 tracking-widest">✨ WELCOME TO TASCARA.PK✨</span>
    </div>
</div>
  );
};

export default MovingTextBar;
