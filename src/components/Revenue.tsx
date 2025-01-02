import { AreaChart, Area, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    date: 'Aug 1',
    revenue: 40000,
  },
  {
    date: 'Aug 10',
    revenue: 30000,
  },
  {
    date: 'Aug 21',
    revenue: 20000,
  },
  {
    date: 'Sep 3',
    revenue: 27800,
  },
  {
    date: 'Sep 21',
    revenue: 18900,
  },
  {
    date: 'Oct 15',
    revenue: 23900,
  },
  {
    date: 'Oct 31',
    revenue: 34900,
  },
];

const Revenue = () => {
  return (
    <div className="flex-1 bg-white">
        <div className="heading flex justify-between items-center py-[16px] px-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485]">
        <p className="font-medium text-[#1D2026] md:text-[16px] text-[14px] md:leading-[22px] leading-[18px]">Revenue</p>
            <select className="text-[#6E7485] border-none outline-none ">
                <option>This month</option>
                <option>Next month</option>
                <option>Prev month</option>
            </select>
        </div>
        <div className="graph w-full max-h-[465px] h-full">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#564FFD" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#564FFD" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="date" axisLine={false} tickLine={false} />
      <YAxis axisLine={false}   tickLine={false} tickFormatter={(value) => `${(value / 1000)}k`}/>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <Tooltip contentStyle={{backgroundColor:"#1D2026",color:"white"}} itemStyle={{color:"#8C94A3"}} />
      <Area
        type="monotone"
        dataKey="revenue"
        stroke="#564FFD"
        strokeWidth={3}
        fill="url(#colorUv)"
      />
    </AreaChart>
    </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Revenue