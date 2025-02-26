import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    render(<Button label="Test" onClick={() => {}} />);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const handleClick = jest.fn();

    render(<Button label="Click me" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click me"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
