import React from "react";
import HeroSection from "../components/HeroSection";
import SearchFilterSection from "../components/SearchFilterSection";
import FeaturedCountriesSection from "../components/FeaturedCountriesSection";
import StatisticsSection from "../components/StatisticsSection";
import CallToActionSection from "../components/CallToActionSection";
import { useCountries } from "../hooks/useCountries";
import useFilteredCountries from "../hooks/useFilteredCountries";

const HomePage = () => {
  const { countries, loading, error } = useFilteredCountries();

  return (
    <>
      <HeroSection />
      <SearchFilterSection />
      <FeaturedCountriesSection countries={countries} loading={loading} />
      <StatisticsSection />
      <CallToActionSection />
    </>
  );
};

export default HomePage;
