import { useState, useEffect } from "react";
import { getCountryByName } from "../api/countryService";

export function useCountryByName(name) {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }

    setLoading(true);
    getCountryByName(name)
      .then((response) => {
        setCountry(response.data[0]);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setCountry(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  return { country, loading, error };
}
