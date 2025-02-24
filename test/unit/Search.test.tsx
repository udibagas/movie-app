import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../src/components/Search";
import "@testing-library/jest-dom";

test("Render Search component => Input", () => {
  render(<Search />);
  const el = screen.getByPlaceholderText('Search');
  expect(el).toBeInTheDocument()
});

test("Render Search component => Button", () => {
  render(<Search />);
  const el = screen.getByText('SEARCH');
  expect(el).toBeInTheDocument()
});