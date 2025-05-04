// // CountryDetails.test.jsx
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import CountryDetails from "../components/CountryDetails";
// import "@testing-library/jest-dom";

// const mockCountry = {
//   name: { common: "Sri Lanka" },
//   continents: ["Asia"],
//   unMember: true,
//   independent: true,
//   landlocked: false,
//   cca2: "LK",
//   cca3: "LKA",
//   ccn3: "144",
//   cioc: "SRI",
//   car: {
//     side: "left",
//     signs: ["CL"],
//   },
//   timezones: ["UTC+05:30"],
//   startOfWeek: "monday",
//   coatOfArms: {
//     png: "https://mainfacts.com/media/images/coats_of_arms/lk.png",
//   },
// };

// describe("CountryDetails Component", () => {
//   test("renders section titles correctly", () => {
//     render(<CountryDetails country={mockCountry} />);
//     expect(screen.getByText(/Additional Information/i)).toBeInTheDocument();
//     expect(screen.getByText(/Continental Information/i)).toBeInTheDocument();
//     expect(screen.getByText(/Country Codes/i)).toBeInTheDocument();
//     expect(screen.getByText(/Driving Information/i)).toBeInTheDocument();
//     expect(screen.getByText(/Time & Week/i)).toBeInTheDocument();
//     expect(screen.getByText(/Coat of Arms/i)).toBeInTheDocument();
//   });

//   test("renders correct country info values", () => {
//     render(<CountryDetails country={mockCountry} />);
//     expect(screen.getByText(/Continent:/i)).toHaveTextContent(
//       "Continent: Asia"
//     );
//     expect(screen.getByText(/UN Member:/i)).toHaveTextContent("UN Member: Yes");
//     expect(screen.getByText(/Independent:/i)).toHaveTextContent(
//       "Independent: Yes"
//     );
//     expect(screen.getByText(/Landlocked:/i)).toHaveTextContent(
//       "Landlocked: No"
//     );
//     expect(screen.getByText(/Alpha-2 Code:/i)).toHaveTextContent(
//       "Alpha-2 Code: LK"
//     );
//     expect(screen.getByText(/Alpha-3 Code:/i)).toHaveTextContent(
//       "Alpha-3 Code: LKA"
//     );
//     expect(screen.getByText(/Numeric Code:/i)).toHaveTextContent(
//       "Numeric Code: 144"
//     );
//     expect(screen.getByText(/IOC Code:/i)).toHaveTextContent("IOC Code: SRI");
//     expect(screen.getByText(/Driving Side:/i)).toHaveTextContent(
//       "Driving Side: left"
//     );
//     expect(screen.getByText(/Car Signs:/i)).toHaveTextContent("Car Signs: CL");
//     expect(screen.getByText(/Timezones:/i)).toHaveTextContent(
//       "Timezones: UTC+05:30"
//     );
//     expect(screen.getByText(/Start of Week:/i)).toHaveTextContent(
//       "Start of Week: monday"
//     );
//   });

//   test("renders coat of arms image with correct alt and src", () => {
//     render(<CountryDetails country={mockCountry} />);
//     const coatOfArmsImg = screen.getByAltText(/Coat of Arms of Sri Lanka/i);
//     expect(coatOfArmsImg).toBeInTheDocument();
//     expect(coatOfArmsImg).toHaveAttribute("src", mockCountry.coatOfArms.png);
//   });

//   test("renders without IOC code and coat of arms if missing", () => {
//     const partialCountry = {
//       ...mockCountry,
//       cioc: undefined,
//       coatOfArms: { png: "" },
//     };
//     render(<CountryDetails country={partialCountry} />);
//     // Should not find IOC code
//     expect(screen.queryByText(/IOC Code:/i)).not.toBeInTheDocument();
//     // Should not find coat of arms image
//     expect(
//       screen.queryByAltText(/Coat of Arms of Sri Lanka/i)
//     ).not.toBeInTheDocument();
//   });

//   test("renders N/A or fallback for missing optional fields", () => {
//     const minimalCountry = {
//       name: { common: "Testland" },
//       continents: [],
//       unMember: false,
//       independent: false,
//       landlocked: false,
//       cca2: "",
//       cca3: "",
//       ccn3: "",
//       car: { side: "", signs: [] },
//       timezones: [],
//       startOfWeek: "",
//       coatOfArms: { png: "" },
//     };
//     render(<CountryDetails country={minimalCountry} />);
//     expect(screen.getByText(/Continent:/i)).toHaveTextContent("Continent: N/A");
//     expect(screen.getByText(/UN Member:/i)).toHaveTextContent("UN Member: No");
//     expect(screen.getByText(/Independent:/i)).toHaveTextContent(
//       "Independent: No"
//     );
//     expect(screen.getByText(/Landlocked:/i)).toHaveTextContent(
//       "Landlocked: No"
//     );
//     expect(screen.getByText(/Alpha-2 Code:/i)).toHaveTextContent(
//       "Alpha-2 Code: N/A"
//     );
//     expect(screen.getByText(/Alpha-3 Code:/i)).toHaveTextContent(
//       "Alpha-3 Code: N/A"
//     );
//     expect(screen.getByText(/Numeric Code:/i)).toHaveTextContent(
//       "Numeric Code: N/A"
//     );
//     expect(screen.getByText(/Driving Side:/i)).toHaveTextContent(
//       "Driving Side: N/A"
//     );
//     expect(screen.getByText(/Car Signs:/i)).toHaveTextContent("Car Signs: N/A");
//     expect(screen.getByText(/Timezones:/i)).toHaveTextContent("Timezones: N/A");
//     expect(screen.getByText(/Start of Week:/i)).toHaveTextContent(
//       "Start of Week: N/A"
//     );
//     // No coat of arms image
//     expect(
//       screen.queryByAltText(/Coat of Arms of Testland/i)
//     ).not.toBeInTheDocument();
//   });
// });
