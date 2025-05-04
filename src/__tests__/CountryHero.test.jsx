// CountryHero.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import CountryHero from "../components/CountryHero";
import "@testing-library/jest-dom";

const mockCountry = {
  name: {
    common: "Japan",
    official: "Japan (Nihon/Nippon)",
  },
  flags: {
    png: "https://flagcdn.com/w320/jp.png",
    alt: "Flag of Japan",
  },
};

describe("CountryHero Component", () => {
  test("renders country flag image with correct src and alt", () => {
    render(<CountryHero country={mockCountry} />);
    const flagImg = screen.getByAltText(/Flag of Japan/i);
    expect(flagImg).toBeInTheDocument();
    expect(flagImg).toHaveAttribute("src", mockCountry.flags.png);
  });

//  test("renders country common and official names", () => {
//    render(<CountryHero country={mockCountry} />);
//    expect(screen.getByTestId("common-name")).toHaveTextContent("Japan");
//    expect(screen.getByTestId("official-name")).toHaveTextContent(
//      "Japan (Nihon/Nippon)"
//    );
//  });

  test("applies background image with flag URL", () => {
    const { container } = render(<CountryHero country={mockCountry} />);
    // The Paper component is the first child
    const paperDiv = container.firstChild;
    // The backgroundImage style should include the flag URL
    expect(paperDiv).toHaveStyle(
      `background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${mockCountry.flags.png})`
    );
  });

  test("uses fallback alt text if no alt is provided", () => {
    const countryNoAlt = {
      ...mockCountry,
      flags: { ...mockCountry.flags, alt: undefined },
    };
    render(<CountryHero country={countryNoAlt} />);
    expect(screen.getByAltText(/Flag of Japan/i)).toBeInTheDocument();
  });
});
