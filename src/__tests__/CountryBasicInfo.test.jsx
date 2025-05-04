import React from "react";
import { render, screen } from "@testing-library/react";
import CountryBasicInfo from "../components/CountryBasicInfo";
import "@testing-library/jest-dom";

const mockCountry = {
  region: "Asia",
  subregion: "South-Eastern Asia",
  capital: ["Jakarta"],
  population: 273523615,
  area: 1904569,
  languages: {
    ind: "Indonesian",
  },
  currencies: {
    IDR: {
      name: "Indonesian rupiah",
      symbol: "Rp",
    },
  },
};

describe("CountryBasicInfo Component", () => {
  test("renders region, subregion, and capital", () => {
    render(<CountryBasicInfo country={mockCountry} />);
    expect(screen.getByText("Region:")).toBeInTheDocument();
    expect(screen.getByText("Asia")).toBeInTheDocument();

    expect(screen.getByText("Subregion:")).toBeInTheDocument();
    expect(screen.getByText("South-Eastern Asia")).toBeInTheDocument();

    expect(screen.getByText("Capital:")).toBeInTheDocument();
    expect(screen.getByText("Jakarta")).toBeInTheDocument();
  });

  test("renders population and area", () => {
    render(<CountryBasicInfo country={mockCountry} />);
    expect(screen.getByText("Population:")).toBeInTheDocument();
    expect(screen.getByText("273,523,615")).toBeInTheDocument();

    expect(screen.getByText("Area:")).toBeInTheDocument();
    expect(screen.getByText("1,904,569 km²")).toBeInTheDocument();
  });

  test("renders currency name and symbol", () => {
    render(<CountryBasicInfo country={mockCountry} />);
    expect(screen.getByText("Indonesian rupiah")).toBeInTheDocument();
    expect(screen.getByText("(Rp)")).toBeInTheDocument();
  });

  test("renders languages as chips", () => {
    render(<CountryBasicInfo country={mockCountry} />);
    expect(screen.getByText("Indonesian")).toBeInTheDocument();
  });

  test("renders fallback text when no languages or currencies", () => {
    const emptyCountry = {
      region: "Europe",
      population: 123456,
      area: 7890,
      capital: [],
      languages: {},
      currencies: null,
    };
    render(<CountryBasicInfo country={emptyCountry} />);
    expect(screen.getByText(/No language data available/i)).toBeInTheDocument();
    expect(screen.getByText(/No currency data available/i)).toBeInTheDocument();
  });
});
