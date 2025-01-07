import React from 'react';
import display from '../gsw images/Broad-Bed-Furrow-_Website-banner.webp';

function Display() {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src={display}
        alt="display image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Display;
