import axios from 'axios';

/**
 * Variable: baseUrl - The base url for the API
 */
const BASE_URL = 'http://localhost:4000/';

/**
 * @param {string} url
 * Create a new instance of axios
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

/**
 * @param {Integer} userId
 * @returns {Object} Return a object with the user data (name, todayScore, and key number (calorie, protein, fat, carbs))
 */
export const getUserData = async (userId) => {
  try {
    const res = await axiosInstance.get(`user/${userId}`);
    return {
      firstName: res.data.data.userInfos.firstName,
      lastName: res.data.data.userInfos.lastName,
      calorieCount: res.data.data.keyData.calorieCount,
      carbohydrateCount: res.data.data.keyData.carbohydrateCount,
      lipidCount: res.data.data.keyData.lipidCount,
      proteinCount: res.data.data.keyData.proteinCount,
      todayScore: res.data.data.todayScore,
      score: res.data.data.score,
    };
  } catch (e) {
    return e;
  }
};

/**
 * @name getActivityData
 * @param {integer} userId - Id of a specific user
 * @returns {Object} - Object containing the user's activity data
 */
export const getActivityData = async (userId) => {
  try {
    const res = await axiosInstance.get(`user/${userId}/activity`);

    return {
      sessions: res.data.data.sessions,
    };
  } catch (e) {
    return e;
  }
};

/**
 * @name getSessionLengthData
 * @param {integer} userId - Id of a specific user
 * @returns {Object} - Object containing the user's session Length data
 */
export const getSessionLengthData = async (userId) => {
  try {
    const res = await axiosInstance.get(`user/${userId}/average-sessions`);

    return {
      sessionsLength: res.data.data.sessions,
    };
  } catch (e) {
    return e;
  }
};

/**
 * @name getPerformanceData
 * @param {integer} userId - Id of a specific user
 * @returns {Object} - Object containing the user's performance level
 */
export const getPerformanceData = async (userId) => {
  try {
    const res = await axiosInstance.get(`user/${userId}/performance`);

    return {
      performance: res.data.data.data,
    };
  } catch (e) {
    return e;
  }
};
