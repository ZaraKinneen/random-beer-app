import { CORS, BASE_URL, API_KEY } from "../utils/constants";

export const getRandomBeer = async () => {
  const URL = `${CORS}/${BASE_URL}/beer/random/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`;
  const body = await fetch(URL);
  const data = await body.json();
  return data.data;
};

export const getBeerById = async (id) => {
  const URL = `${CORS}/${BASE_URL}/beer/${id}/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`;
  let response = await fetch(URL);
  const data = await response.json();
  return data.data;
};

export const getBreweryById = async (id) => {
  const URL = `${CORS}/${BASE_URL}/brewery/${id}/?hasLabels=Y&key=${API_KEY}`;
  let response = await fetch(URL);
  const data = await response.json();
  return data.data;
};
