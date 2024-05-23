import React from "react";
import Story from "./Story";
import storiesData from "../data/stories.json";

interface StoryListProps {
  onStorySelect: (index: number) => void;
}

const StoryList: React.FC<StoryListProps> = ({ onStorySelect }) => {
  return (
    <div className="story-list">
      {storiesData.map((story, index) => (
        <Story
          key={story.id}
          imageUrl={story.imageUrl}
          description={story.description}
          onClick={() => onStorySelect(index)}
        />
      ))}
    </div>
  );
};

export default StoryList;
