import {
  userInfo,
  userActivities,
  userAvgSession,
  userPerformance,
} from '../mocked-data/mockedData';
import DataFormatter from '../model/dataFormatter';

const getUserId = (userIdWithMock) => {
  return +userIdWithMock.split('-')[0];
};

/**
 * @param {Integer} userId
 * @returns {Object} Return a object with the user data (name, todayScore, and key number (calorie, protein, fat, carbs))
 */
export const getUserMockedData = async (userId) => {
  try {
    // find element in userInfo where userId === getUserId(userId)
    const res = userInfo.find((user) => user.id === getUserId(userId));

    return new DataFormatter(res).formatUserData();
  } catch (e) {
    return e;
  }
};

/**
 * @name getActivityData
 * @param {integer} userId - Id of a specific user
 * @returns {Object} - Object containing the user's activity data
 */
export const getActivityMockedData = async (userId) => {
  try {
    const res = userActivities.find(
      (user) => user.userId === getUserId(userId),
    );

    return new DataFormatter(res).formatActivityData();
  } catch (e) {
    return e;
  }
};

/**
 * @name getSessionLengthData
 * @param {integer} userId - Id of a specific user
 * @returns {Object} - Object containing the user's session Length data
 */
export const getSessionLengthMockedData = async (userId) => {
  try {
    const res = userAvgSession.find(
      (user) => user.userId === getUserId(userId),
    );

    return new DataFormatter(res).formatSessionLengthData();
  } catch (e) {
    return e;
  }
};

/**
 * @name getPerformanceData
 * @param {integer} userId - Id of a specific user
 * @returns {Object} - Object containing the user's performance level
 */
export const getPerformanceMockedData = async (userId) => {
  try {
    const res = userPerformance.find(
      (user) => user.userId === getUserId(userId),
    );

    return new DataFormatter(res).formatPerformanceData();
  } catch (e) {
    return e;
  }
};

export const fetchAllMockedDataApi = async (userId) => {
  return {
    userData: await getUserMockedData(userId),
    activityData: await getActivityMockedData(userId),
    sessionLengthData: await getSessionLengthMockedData(userId),
    performanceData: await getPerformanceMockedData(userId),
  };
};
