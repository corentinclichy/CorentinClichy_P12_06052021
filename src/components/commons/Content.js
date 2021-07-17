import StatCard from './StatCard';

function Content() {
  return (
    <main className="flex-1 p-7 pl-20">
      <div className="header">
        <h1 className="text-4xl">
          Bonjour <span className="text-red-500">Thomas</span>
        </h1>
        <p className="mt-3">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <section className="user-stats flex gap-10 mt-5">
        <div className="left-wrapper flex-1 flex flex-col gap-5">
          <div className="row">
            <div className="dailyActivities-container bg-gray-50 h-64">
              <p>daily activities</p>
            </div>
          </div>
          <div className="row flex w-100 justify-between">
            <div className="dailyActivities-container bg-gray-50 h-72 w-72 ">
              <p>daily activities</p>
            </div>
            <div className="dailyActivities-container bg-gray-50 h-72 w-72">
              <p>daily activities</p>
            </div>
            <div className="dailyActivities-container bg-gray-50 h-72 w-72">
              <p>daily activities</p>
            </div>
          </div>
        </div>
        <div className="right-wrapper flex flex-col justify-between">
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
      </section>
    </main>
  );
}
export default Content;
