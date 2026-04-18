import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders brand name and tagline", () => {
    render(<Footer />);
    expect(screen.getByText("TrackPro")).toBeInTheDocument();
    expect(
      screen.getByText(/ultimate companion for tracking/i)
    ).toBeInTheDocument();
  });

  it("renders all quick links", () => {
    render(<Footer />);
    const links = ["Home", "Features", "About", "Contact"];
    links.forEach((label) => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });
  });

  it("renders social icon links with accessible labels", () => {
    render(<Footer />);
    const socials = ["Twitter", "GitHub", "LinkedIn", "Email"];
    socials.forEach((label) => {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    });
  });

  it("renders copyright line with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders inside a <footer> landmark element", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
