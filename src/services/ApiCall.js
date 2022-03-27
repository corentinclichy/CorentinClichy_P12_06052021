import axios from 'axios';
import DataFormatter from '../model/dataFormatter';

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

    return new DataFormatter(res.data.data).formatUserData();
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
    return new DataFormatter(res.data.data).formatActivityData();
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
    return new DataFormatter(res.data.data).formatSessionLengthData();
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
    return new DataFormatter(res.data.data).formatPerformanceData();
  } catch (e) {
    return e;
  }
};

export const fetchAllDataApi = async (userId) => {
  return {
    userData: await getUserData(userId),
    activityData: await getActivityData(userId),
    sessionLengthData: await getSessionLengthData(userId),
    performanceData: await getPerformanceData(userId),
  };
};
