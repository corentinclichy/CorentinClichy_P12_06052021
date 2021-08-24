import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

function StrenghtMap() {
  const data = [
    {
      subject: 'Intensité',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Vitesse',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Force',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Endurance',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Energie',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Cardio',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  //   const CustomTooltip = ({ active, payload }) => {
  //     if (active && payload && payload.length) {
  //       return (
  //         <div className="bg-white p-4 flex flex-col justify-around">
  //           <p className="text-xs text-black text-center">{`${payload[0].value} min`}</p>
  //         </div>
  //       );
  //     }

  //     return null;
  //   };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          stroke="rgba(255, 255, 255)"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 14, dy: -2 }}
          tickMargin={25}
        />
        <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default StrenghtMap;
