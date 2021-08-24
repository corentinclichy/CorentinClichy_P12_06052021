import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';

function Completion() {
  const data = [
    {
      name: 'userCompletion',
      value: 12,
      fill: '#FF0000',
    },
  ];

  return (
    <div className="relative w-full h-full">
      <ResponsiveContainer width="100%" height="100%" className="z-50">
        <RadialBarChart
          innerRadius={400}
          outerRadius={110}
          barSize={12}
          data={data}
          startAngle={90}
          endAngle={-270}
          background="#FF0000">
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
            fill="#FF0000"
          />
          <RadialBar
            background={{ fill: 'rgba(249, 250, 251)' }}
            clockWise
            dataKey="value"
            cornerRadius={10}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-base">
        <p className="text-gray-400 text-1xl">
          <strong className="text-4xl text-black">{data[0].value}%</strong>
          <br />
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
}

export default Completion;
