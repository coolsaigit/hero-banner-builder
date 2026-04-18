import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "./Index";

describe("Index page", () => {
  it("renders all sections without error", () => {
    render(<Index />);
    // Footer landmark confirms Footer rendered
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
