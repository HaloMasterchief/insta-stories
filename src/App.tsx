import React, { useState } from "react";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";
import storiesData from "./data/stories.json";
import "./styles/App.css";

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleStorySelect = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const handleCloseViewer = () => {
    setCurrentIndex(null);
    setModalOpen(false);
  };

  const handleNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex !== null && prevIndex < storiesData.length - 1
          ? prevIndex + 1
          : 0
      );
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex !== null && prevIndex > 0
          ? prevIndex - 1
          : storiesData.length - 1
      );
    }
  };

  return (
    <div className="App">
      {modalOpen && <div className="overlay" onClick={handleCloseViewer} />}
      <StoryList onStorySelect={handleStorySelect} />
      {currentIndex !== null && (
        <StoryViewer
          currentIndex={currentIndex}
          onClose={handleCloseViewer}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default App;
