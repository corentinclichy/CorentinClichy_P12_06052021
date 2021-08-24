import DailyActivities from './DailyActivities';
import SessionLength from './SessionLength';
import StrenghtMap from './StrenghtMap';
import Completion from './Completion';
import StatsCards from './StatsCards';

function Content() {
  const handleMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    console.log(x); // has value for clientX, etc
  };

  return (
    <main className="flex-1 p-7 pl-20 pr-0">
      <div className="header mb-7">
        <h1 className="text-4xl ">
          Bonjour <span className="text-red-500">Thomas</span>
        </h1>
        <p className="mt-3">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <section className="user-stats flex  gap-5">
        <div className="left-wrapper flex-1 max-w-4xl flex flex-col gap-5">
          <div className="row">
            <div className="dailyActivities-container bg-gray-50 h-64 p-7 pb-3 rounded">
              <DailyActivities />
            </div>
          </div>
          <div className="row flex w-100 justify-between">
            <div
              className="sessionLength-container h-72 w-72 rounded relative flex fle-col justify-end items-end"
              onMouseMove={(e) => handleMove(e)}>
              <h3 className="absolute top-10 left-10 w-36 text-white text-base opacity-50">
                Durée moyenne des sessions
              </h3>
              <SessionLength />
            </div>
            <div className="strenghtMap-container h-72 w-72 rounded">
              <StrenghtMap />
            </div>
            <div className="completion-container bg-gray-50 h-72 w-72 rounded">
              <Completion />
            </div>
          </div>
        </div>
        <StatsCards />
      </section>
    </main>
  );
}
export default Content;
