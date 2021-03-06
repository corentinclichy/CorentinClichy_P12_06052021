// Hooks
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import react spinners specific components
import PacmanLoader from 'react-spinners/PacmanLoader';

// Components
import SideBar from '../components/commons/SideBar';
import Content from '../components/commons/Content';

// Utils functions to fetch the data
import { fetchAllDataApi } from '../services/ApiCall';
import { fetchAllMockedDataApi } from '../services/MockedApi';

/**
 * @name UserPage
 * @description This is the user page components.
 * @returns {JSX}
 */
function UserPage() {
  // Get the id from the url using react-router-dom hook
  const { id } = useParams();

  // STATES
  // Create a loading state
  const [loading, setLoading] = useState(true);
  // State to store the user activity data
  const [userData, setUserData] = useState([]);
  // State to store the user activity data
  const [activityData, setActivityData] = useState([]);
  // State to store the sessionLengthData
  const [sessionLengthData, setSessionLenghtData] = useState([]);
  // State to store the performanceData
  const [performanceData, setPerformanceData] = useState([]);

  // HOOKS => UseEffect to fetch the data when the id changes
  useEffect(() => {
    let method;

    if (id.includes('mock')) {
      method = fetchAllMockedDataApi;
    } else {
      method = fetchAllDataApi;
    }

    method(id).then((res) => {
      setUserData(res.userData);
      setActivityData(res.activityData);
      setSessionLenghtData(res.sessionLengthData);
      setPerformanceData(res.performanceData);
      setLoading(false);
    });
  }, [id]);

  // Return the JSX to render specific element if the loading state is true
  if (loading) {
    return (
      <div className="h-80 w-full mt-72 flex item-center justify-center relative">
        <PacmanLoader color="#F50B00" size={60} className="" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex content-container">
        <SideBar />
        <Content
          userData={userData}
          activityData={activityData}
          sessionLengthData={sessionLengthData}
          performanceData={performanceData}
        />
      </div>
    </div>
  );
}

export default UserPage;
