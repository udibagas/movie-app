import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../../src/components/Header";
import "@testing-library/jest-dom";

test("renders Header component", () => {
  render(<Header />);
  const headerElement = screen.getByText('FinProH8');
  expect(headerElement).toBeInTheDocument()
});