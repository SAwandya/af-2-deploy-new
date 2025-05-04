// src/hooks/useCountries.js
import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countryService";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllCountries()
      .then((res) => setCountries(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading, error };
}
