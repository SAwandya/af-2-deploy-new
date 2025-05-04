// src/api/countryService.js
import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = () => axios.get(`${BASE_URL}/all`);

export const getCountryByName = (name) =>
  axios.get(`${BASE_URL}/name/${encodeURIComponent(name)}`);

export const getCountriesByRegion = (region) =>
  axios.get(`${BASE_URL}/region/${encodeURIComponent(region)}`);

export const getCountryByCode = (code) =>
  axios.get(`${BASE_URL}/alpha/${encodeURIComponent(code)}`);

export const getCountriesByLanguage = (lang) =>
  axios.get(`${BASE_URL}/lang/${encodeURIComponent(lang)}`);

// Add more endpoints as needed
