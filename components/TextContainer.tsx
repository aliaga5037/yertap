import React, { useState } from 'react';

const TextContainer = ({ text, limit }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const toggleReadMore = () => {
    setShowFullText(!showFullText);
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      <p className="text-base font-normal leading-3 text-black">
        {showFullText ? text : text.substring(0, limit)}
      </p>
      <button onClick={toggleReadMore} className="text-sm text-gray-500">
        {isReadMore ? 'Read more' : 'Show less'}
      </button>
    </div>
  );
};

export default TextContainer;
