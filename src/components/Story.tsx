import React from "react";

interface StoryProps {
  imageUrl: string;
  description: string;
  onClick: () => void;
}

const Story: React.FC<StoryProps> = ({ imageUrl, description, onClick }) => {
  return (
    <div className="story" onClick={onClick}>
      <img src={imageUrl} alt={description} />
    </div>
  );
};

export default Story;
