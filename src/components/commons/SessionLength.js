import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  YAxis,
} from 'recharts';

function SessionLength() {
  const data = [
    {
      day: 'L',
      minute: 30,
    },
    {
      day: 'M',
      minute: 40,
    },
    {
      day: 'M',
      minute: 64,
    },
    {
      day: 'J',
      minute: 32,
    },
    {
      day: 'V',
      minute: 48,
    },
    {
      day: 'S',
      minute: 40,
    },
    {
      day: 'D',
      minute: 20,
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 flex flex-col justify-around">
          <p className="text-xs text-black text-center">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="60%">
      <LineChart
        width={250}
        height={186}
        data={data}
        margin={{
          top: 30,
          right: 10,
          left: 10,
          bottom: 5,
        }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="1%" stopColor="#cccccc" stopOpacity={0.3} />
            <stop offset="60%" stopColor="white" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.5)"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 12 }}
        />
        <YAxis hide domain={[30, 60]} />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: 'rgba(0, 0, 0, 0.1)',
            strokeWidth: 0,
            fill: 'blue',
          }}
        />
        <Line
          type="monotone"
          dataKey="minute"
          stroke="url(#colorUv)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: 'rgba(255, 253, 253, 0.1)',
            fill: 'white',
            strokeWidth: 10,
            r: 5,
          }}
          margin={{
            top: 100,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SessionLength;
