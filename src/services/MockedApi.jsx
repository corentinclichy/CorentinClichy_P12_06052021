import {
  userInfo,
  userActivities,
  userAvgSession,
  userPerformance,
} from '../mocked-data/mockedData';

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

    return {
      firstName: res.userInfos.firstName,
      lastName: res.userInfos.lastName,
      calorieCount: res.keyData.calorieCount,
      carbohydrateCount: res.keyData.carbohydrateCount,
      lipidCount: res.keyData.lipidCount,
      proteinCount: res.keyData.proteinCount,
      todayScore: res.todayScore,
      score: res.score,
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
export const getActivityMockedData = async (userId) => {
  try {
    const res = userActivities.find(
      (user) => user.userId === getUserId(userId),
    );

    return {
      sessions: res.sessions,
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
export const getSessionLengthMockedData = async (userId) => {
  try {
    const res = userAvgSession.find(
      (user) => user.userId === getUserId(userId),
    );

    return {
      sessionsLength: res.sessions,
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
export const getPerformanceMockedData = async (userId) => {
  try {
    console.log(userPerformance);
    const res = userPerformance.find(
      (user) => user.userId === getUserId(userId),
    );

    return {
      performance: res.data,
    };
  } catch (e) {
    return e;
  }
};
