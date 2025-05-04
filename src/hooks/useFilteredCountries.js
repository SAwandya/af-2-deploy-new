import { useState, useEffect } from "react";
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
  getCountriesByLanguage,
} from "../api/countryService";
import useCountryFilterStore from "../store/useCountryFilterStore";

export default function useFilteredCountries() {
  const { search, region, language } = useCountryFilterStore();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let fetchPromise;

    // 1. Choose the most restrictive API endpoint first
    if (search) {
      fetchPromise = getCountryByName(search);
    } else if (region) {
      fetchPromise = getCountriesByRegion(region);
    } else if (language) {
      fetchPromise = getCountriesByLanguage(language);
    } else {
      fetchPromise = getAllCountries();
    }

    setLoading(true);
    setError(null);

    fetchPromise
      .then((res) => {
        let filtered = res.data;

        // 2. Further filter in JS if other filters are set
        if (
          region &&
          (!search || fetchPromise !== getCountriesByRegion(region))
        ) {
          filtered = filtered.filter(
            (c) => c.region?.toLowerCase() === region.toLowerCase()
          );
        }
        if (
          language &&
          (!search || fetchPromise !== getCountriesByLanguage(language))
        ) {
          // Some countries have languages as object: { eng: "English", ... }
          filtered = filtered.filter(
            (c) =>
              c.languages &&
              Object.values(c.languages).some((l) =>
                l.toLowerCase().includes(language.toLowerCase())
              )
          );
        }

        setCountries(filtered);
      })
      .catch((err) => {
        setError(err);
        setCountries([]);
      })
      .finally(() => setLoading(false));
  }, [search, region, language]);

  return { countries, loading, error };
}
