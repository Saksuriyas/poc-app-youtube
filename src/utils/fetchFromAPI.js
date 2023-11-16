import axios from 'axios';

export const BASE_URL = 'https://youtube-v311.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '303c6b435fmsh8daac86483aa3cbp1110bcjsneaebd757f134',
    'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
