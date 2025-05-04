// src/components/CallToActionSection.test.jsx
import { render, screen } from "@testing-library/react";
import CallToActionSection from "../components/CallToActionSection";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Helper to wrap with MUI theme (since useTheme is used)
function renderWithTheme(ui) {
  const theme = createTheme();
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("CallToActionSection", () => {
  it("renders heading, description, and button correctly", () => {
    renderWithTheme(<CallToActionSection />);
    // Heading
    expect(
      screen.getByRole("heading", { name: /ready to explore/i })
    ).toBeInTheDocument();
    // Description
    expect(
      screen.getByText(/discover detailed information about countries/i)
    ).toBeInTheDocument();
    // Button
    const button = screen.getByRole("link", { name: /get started/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/countries");
  });
});
