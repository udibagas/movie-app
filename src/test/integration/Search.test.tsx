import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

describe("Search component integration test", () => {
  test("Search feature", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Search");
    const button = screen.getByText("SEARCH");

    fireEvent.change(input, {
      target: {
        value: "man"
      }
    });

    fireEvent.click(button);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Iron Man")).toBeInTheDocument();
    })
  });
});
