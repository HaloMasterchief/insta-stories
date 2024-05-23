import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Story from "../Story";

test("renders story component with correct image and description", () => {
  const imageUrl = "test-image-url";
  const description = "Test Description";
  const onClick = jest.fn();

  render(
    <Story imageUrl={imageUrl} description={description} onClick={onClick} />
  );

  const storyElement = screen.getByAltText(description);
  expect(storyElement).toBeInTheDocument();
  expect(storyElement).toHaveAttribute("src", imageUrl);
});

test("calls onClick when story is clicked", () => {
  const onClick = jest.fn();
  render(
    <Story
      imageUrl="test-image-url"
      description="Test Description"
      onClick={onClick}
    />
  );

  const storyElement = screen.getByAltText("Test Description");
  userEvent.click(storyElement);

  expect(onClick).toHaveBeenCalledTimes(1);
});
