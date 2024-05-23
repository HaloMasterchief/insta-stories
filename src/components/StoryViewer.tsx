import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import storiesData from "../data/stories.json";

interface StoryViewerProps {
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, onNext]);

  const story = storiesData[currentIndex];

  return (
    <AnimatePresence>
      {story && (
        <motion.div
          className="story-viewer"
          key={story.id}
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <div className="story-viewer-content">
            <img src={story.imageUrl} alt={story.description} />
            <div className="story-navigation">
              <div className="nav-left" onClick={onPrev}></div>
              <div className="nav-right" onClick={onNext}></div>
            </div>
            <button className="close-btn" onClick={onClose}>
              X
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StoryViewer;
