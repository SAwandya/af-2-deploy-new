// src/components/BorderingCountries.test.jsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BorderingCountries from "../components/BorderingCountries";
import * as api from "../api/countryService"; // Import the module to mock
import { MemoryRouter } from "react-router-dom";

// Mock the getCountryByCode API function
vi.mock("../api/countryService", () => ({
  getCountryByCode: vi.fn(),
}));

const mockBorders = ["FRA", "DEU"];
const mockCountries = [
  {
    cca3: "FRA",
    name: { common: "France" },
    flags: { png: "https://flagcdn.com/w320/fr.png", alt: "France flag" },
  },
  {
    cca3: "DEU",
    name: { common: "Germany" },
    flags: { png: "https://flagcdn.com/w320/de.png", alt: "Germany flag" },
  },
];

describe("BorderingCountries", () => {
  beforeEach(() => {
    // Reset mocks before each test
    api.getCountryByCode.mockReset();
  });

  it("renders nothing if no borders are provided", () => {
    const { container } = render(<BorderingCountries borders={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("shows skeletons while loading", async () => {
    // Make getCountryByCode return a promise that never resolves
    api.getCountryByCode.mockReturnValue(new Promise(() => {}));
    render(<BorderingCountries borders={mockBorders} />);
    // Should render two skeletons (one for each border)
    expect(screen.getAllByTestId("border-skeleton").length).toBe(2);

  });

  it("renders bordering countries after loading", async () => {
    // Mock getCountryByCode to resolve with mock data
    api.getCountryByCode
      .mockResolvedValueOnce({ data: [mockCountries[0]] })
      .mockResolvedValueOnce({ data: [mockCountries[1]] });

    render(
      <MemoryRouter>
        <BorderingCountries borders={mockBorders} />
      </MemoryRouter>
    );

    // Wait for the country buttons to appear
    await waitFor(() =>
      expect(screen.getByText("France")).toBeInTheDocument()
    );
    expect(screen.getByText("Germany")).toBeInTheDocument();

    // Check that flags are rendered
    expect(screen.getByAltText(/France flag/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Germany flag/i)).toBeInTheDocument();
  });
});
