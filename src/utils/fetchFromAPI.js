// import axios from "axios";

// const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// export const fetchFromAPI = async (endpoint, params = {}) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/${endpoint}`, {
//       params: {
//         key: process.env.REACT_APP_YOUTUBE_API_KEY,
//         ...params,
//       },
//     });
//     return data;
//   } catch (error) {
//     if (error.response) {
//       console.error("YouTube API Error:", {
//         status: error.response.status,
//         statusText: error.response.statusText,
//         data: error.response.data,
//       });
//     } else {
//       console.error("YouTube API Request Error:", error.message);
//     }
//     throw error;
//   }
// };


// // ### IMPORTANT : Rapid API Limit over so I used Google's official API.
// //Axios code for RAPID API

// // import axios from 'axios';

// // export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// // const options = {
// //   params: {
// //     maxResults: 50,
// //   },
// //   headers: {
// //     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
// //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
// //   },
// // };

// // export const fetchFromAPI = async (url) => {
// //   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

// //   return data;
// // };

import axios from "axios";



const API_KEY = "AIzaSyCFUnkDJcTHKO_maBcScg5NEkditAJGST0"; // <-- paste your actual key here

export const fetchFromAPI = async (endpoint, params = {}) => {
  try {
    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/${endpoint}`, {
      params: {
        key: API_KEY, // use hardcoded key
        ...params,
      },
    });
    return data;
  } catch (error) {
    if (error.response) {
      console.error("YouTube API Error:", {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data,
      });
    } else {
      console.error("YouTube API Request Error:", error.message);
    }
    throw error;
  }
};
