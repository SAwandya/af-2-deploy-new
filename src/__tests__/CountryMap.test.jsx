// CountryMap.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import CountryMap from "../components/CountryMap";
import "@testing-library/jest-dom";

const mockCountry = {
  name: { common: "France" },
  latlng: [48.8566, 2.3522],
  maps: {
    googleMaps: "https://maps.google.com/?q=France",
    openStreetMaps: "https://www.openstreetmap.org/relation/1403916",
  },
};

describe("CountryMap Component", () => {
  test("renders Location title and MapIcon", () => {
    render(<CountryMap country={mockCountry} />);
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
    // Optionally, check for MapIcon by role or class if needed
  });

  test("renders iframe with correct Google Maps embed URL", () => {
    render(<CountryMap country={mockCountry} />);
    const iframe = screen.getByTitle(/Map of France/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      "https://maps.google.com/maps?q=48.8566,2.3522&z=5&output=embed"
    );
  });

  test("renders latitude/longitude correctly", () => {
    render(<CountryMap country={mockCountry} />);
    expect(screen.getByText(/Latitude\/Longitude:/i)).toHaveTextContent(
      "Latitude/Longitude: 48.8566, 2.3522"
    );
  });

  test("renders Google Maps and OpenStreetMap buttons with correct links", () => {
    render(<CountryMap country={mockCountry} />);
    const googleMapsBtn = screen.getByRole("button", { name: /Google Maps/i });
    const openStreetMapBtn = screen.getByRole("button", {
      name: /OpenStreetMap/i,
    });

    expect(googleMapsBtn).toBeInTheDocument();
    expect(googleMapsBtn.closest("a")).toHaveAttribute(
      "href",
      mockCountry.maps.googleMaps
    );
    expect(openStreetMapBtn).toBeInTheDocument();
    expect(openStreetMapBtn.closest("a")).toHaveAttribute(
      "href",
      mockCountry.maps.openStreetMaps
    );
  });

  test("buttons open links in a new tab", () => {
    render(<CountryMap country={mockCountry} />);
    const googleMapsBtn = screen.getByRole("button", { name: /Google Maps/i });
    const openStreetMapBtn = screen.getByRole("button", {
      name: /OpenStreetMap/i,
    });

    expect(googleMapsBtn.closest("a")).toHaveAttribute("target", "_blank");
    expect(openStreetMapBtn.closest("a")).toHaveAttribute("target", "_blank");
    expect(googleMapsBtn.closest("a")).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
    expect(openStreetMapBtn.closest("a")).toHaveAttribute(
      "rel",
      "noopener noreferrer"
    );
  });
});
