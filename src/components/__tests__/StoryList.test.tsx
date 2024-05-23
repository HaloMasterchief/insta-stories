import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StoryList from "../StoryList";

test("renders story list with correct number of stories", () => {
  const storiesData = [
    { id: 1, imageUrl: "test-image-url-1", description: "Test Description 1" },
    { id: 2, imageUrl: "test-image-url-2", description: "Test Description 2" },
  ];
  const onStorySelect = jest.fn();

  render(<StoryList onStorySelect={onStorySelect} />);

  const storyElements = screen.getAllByTestId("story-icon");
  expect(storyElements).toHaveLength(storiesData.length);
});

test("calls onStorySelect when a story is clicked", () => {
  const onStorySelect = jest.fn();
  render(<StoryList onStorySelect={onStorySelect} />);

  const storyElement = screen.getByAltText("Test Description 1");
  userEvent.click(storyElement);

  expect(onStorySelect).toHaveBeenCalledWith(0);
});
