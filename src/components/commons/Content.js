// Components
import DailyActivities from './DailyActivities';
import SessionLength from './SessionLength';
import StrenghtMap from './StrenghtMap';
import Completion from './Completion';
import StatsCards from './StatsCards';

/**
 * @name Content
 * @description This is the component that will be rendered in the main content of the app(dashboard)
 * @returns {JSX}
 */
function Content({
  userData: {
    firstName,
    calorieCount,
    carbohydrateCount,
    lipidCount,
    proteinCount,
    todayScore,
    score,
  },
  activityData: { sessions },
  sessionLengthData: { sessionsLength },
  performanceData: { performance },
}) {
  return (
    <main className=" p-7 pr-0 h-full flex flex-col ">
      <div className="header mb-7">
        <h1 className="text-4xl ">
          Bonjour <span className="text-red-500">{firstName}</span>
        </h1>
        <p className="mt-3">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <section className="user-stats flex gap-5 mr-3 flex-1 ">
        <div className="left-wrapper flex-1 flex flex-col gap-5">
          <div className="row ">
            <div className="dailyActivities-container bg-gray-50 p-7 pb-3 rounded">
              <DailyActivities sessions={sessions} />
            </div>
          </div>
          <div className="row flex w-100 justify-between gap-6">
            <div className="sessionLength-container h-full flex-1 rounded relative flex fle-col justify-end items-end">
              <h3 className="absolute top-10 left-10 w-36 text-white text-base opacity-50">
                Durée moyenne des sessions
              </h3>
              <SessionLength sessionsLength={sessionsLength} />
            </div>
            <div className="strenghtMap-container h-full flex-1 rounded">
              <StrenghtMap performance={performance} />
            </div>
            <div className="completion-container bg-gray-50 h-full flex-1 rounded">
              <Completion todayScore={todayScore} score={score} />
            </div>
          </div>
        </div>
        <StatsCards
          caloriecalorieCount={calorieCount}
          carbohydrateCount={carbohydrateCount}
          lipidCount={lipidCount}
          proteinCount={proteinCount}
        />
      </section>
    </main>
  );
}
export default Content;
