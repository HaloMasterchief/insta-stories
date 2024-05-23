import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StoryViewer from "../StoryViewer";

const storiesData = [
  { id: 1, imageUrl: "test-image-url-1", description: "Test Description 1" },
  { id: 2, imageUrl: "test-image-url-2", description: "Test Description 2" },
];

test("renders story viewer with correct image", () => {
  render(
    <StoryViewer
      currentIndex={0}
      onClose={() => {}}
      onNext={() => {}}
      onPrev={() => {}}
    />
  );

  const storyImage = screen.getByAltText("Test Description 1");
  expect(storyImage).toBeInTheDocument();
  expect(storyImage).toHaveAttribute("src", storiesData[0].imageUrl);
});

test("calls onNext after 5 seconds", async () => {
  jest.useFakeTimers();
  const onNext = jest.fn();
  render(
    <StoryViewer
      currentIndex={0}
      onClose={() => {}}
      onNext={onNext}
      onPrev={() => {}}
    />
  );

  jest.advanceTimersByTime(5000);
  // eslint-disable-next-line testing-library/no-wait-for-empty-callback
  await waitFor(() => {});

  expect(onNext).toHaveBeenCalled();
});

test("calls onPrev when prev button is clicked", () => {
  const onPrev = jest.fn();
  render(
    <StoryViewer
      currentIndex={1}
      onClose={() => {}}
      onNext={() => {}}
      onPrev={onPrev}
    />
  );

  const prevButton = screen.getByLabelText("Previous story");
  userEvent.click(prevButton);

  expect(onPrev).toHaveBeenCalled();
});

test("calls onClose when close button is clicked", () => {
  const onClose = jest.fn();
  render(
    <StoryViewer
      currentIndex={0}
      onClose={onClose}
      onNext={() => {}}
      onPrev={() => {}}
    />
  );

  const closeButton = screen.getByText("X");
  userEvent.click(closeButton);

  expect(onClose).toHaveBeenCalled();
});
