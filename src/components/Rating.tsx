import { AreaChart, Area, XAxis, YAxis,  Tooltip, ResponsiveContainer } from 'recharts';
import Stars from './Stars';

const data = [
  {
    user: 'user 1',
    rating: 4,
  },
  {
    user: 'user 2',
    rating: 3,
  },
  {
    user: 'user 3',
    rating: 2,
  },
  {
    user: 'user 4',
    rating: 1,
  },
  {
    user: 'user 5',
    rating: 5,
  },
  {
    user: 'user 6',
    rating: 4.5,
  },
  {
    user: 'user 7',
    rating: 3,
  },
  {
    user: 'user 8',
    rating: 2.5,
  },
  {
    user: 'user 9',
    rating: 4,
  },
  {
    user: 'user 10',
    rating: 5,
  },
  {
    user: 'user 11',
    rating: 3.5,
  },
  {
    user: 'user 12',
    rating: 4.2,
  },
  {
    user: 'user 13',
    rating: 2.8,
  },
  {
    user: 'user 14',
    rating: 3.7,
  },
  {
    user: 'user 15',
    rating: 4.8,
  },
  {
    user: 'user 16',
    rating: 1.5,
  },
  {
    user: 'user 17',
    rating: 2,
  },
  {
    user: 'user 18',
    rating: 3,
  },
  {
    user: 'user 19',
    rating: 5,
  },
  {
    user: 'user 20',
    rating: 4.3,
  },
  {
    user: 'user 21',
    rating: 2.4,
  },
  {
    user: 'user 22',
    rating: 4.1,
  },
  {
    user: 'user 23',
    rating: 1.8,
  },
  {
    user: 'user 24',
    rating: 3.9,
  },
  {
    user: 'user 25',
    rating: 4.6,
  }
];


const Rating = () => {
  return (
    <div className="flex-1 bg-white">
      <div className="heading flex justify-between items-center py-[16px] px-[20px] border-b-[2px] border-opacity-30 border-b-[#6E7485] ">
        <p className="font-medium text-[#1D2026] md:text-[16px] text-[14px] md:leading-[22px] leading-[18px]">Overall Course Rating</p>
            <select className="text-[#6E7485] border-none outline-none ">
                <option>This week</option>
                <option>Next week</option>
                <option>Prev week</option>
            </select>
        </div>
        <div className="middle my-[22px] mx-[20px] flex ">
          <div className="flex-1 bg-[#FFF2E5] py-[34px] flex justify-center items-center gap-[16px] flex-col">
            <p className="text-[#1D2026] md:text-[40px] text-[32px] font-semibold md:leading-[48px] leading-[40px]">4.6</p>
            <div className='text-center'>
              <Stars stars={4.6}/>
            <p className="text-[#1D2026] md:text-[14px] text-[12px] font-medium md:leading-[20px] leading-[15px]">Overall Rating</p>
            </div>
          </div>
          <div className="flex-2 ml-[24px] ">
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
                  <XAxis dataKey="user" axisLine={false} tickLine={false} hide={true} />
                  <YAxis axisLine={false}   tickLine={false} hide={true}/>
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <Tooltip contentStyle={{backgroundColor:"#1D2026",color:"white"}} itemStyle={{color:"#8C94A3"}} />
                  <Area
                    type="monotone"
                    dataKey="rating"
                    stroke="#FD8E1F"
                    strokeWidth={3}
                    fill="#FFF2E5"
                  />
                </AreaChart>
                </ResponsiveContainer>
          </div>
        </div>
        <div className="bottom border-t-[2px] border-opacity-30 border-b-[#6E7485]  py-[22px] px-[20px] flex flex-col justify-center gap-[16px]">
          {/* 5 star  */}
          <div className='flex gap-[16px] items-center '>
          <div className='flex gap-[10px] items-center justify-center'>
            <Stars stars={5}/>
            <p className='text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]'>5 Star</p>
          </div>
          <div className='flex items-center gap-[5px] flex-1'>
            <div className='flex-1 h-[8px] bg-[#E9EAF0] relative'>
              <div className='absolute bg-[#FD8E1F] top-0 w-[56%] h-full'/>
            </div>
            <p className='md:text-[14px] text-[12px] text-[#1D2026] font-medium'>56%</p>
          </div>
          </div>

          {/* 4 star  */}

          <div className='flex gap-[16px] items-center '>
          <div className='flex gap-[10px] items-center justify-center'>
            <Stars stars={4}/>
            <p className='text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]'>4 Star</p>
          </div>
          <div className='flex items-center gap-[5px] flex-1'>
            <div className='w-full h-[8px] bg-[#E9EAF0] relative'>
              <div className='absolute bg-[#FD8E1F] top-0 w-[56%] h-full'/>
            </div>
            <p className='md:text-[14px] text-[12px] text-[#1D2026] font-medium'>37%</p>
          </div>
          </div>


          {/* 3 star  */}

          <div className='flex gap-[16px] items-center '>
          <div className='flex gap-[10px] items-center justify-center'>
            <Stars stars={3}/>
            <p className='text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]'>3 Star</p>
          </div>
          <div className='flex items-center gap-[5px] flex-1'>
            <div className='w-full h-[8px] bg-[#E9EAF0] relative'>
              <div className='absolute bg-[#FD8E1F] top-0 w-[8%] h-full'/>
            </div>
            <p className='md:text-[14px] text-[12px] text-[#1D2026] font-medium'>8%</p>
          </div>
          </div>


          {/* 2 star  */}

          <div className='flex gap-[16px] items-center '>
          <div className='flex gap-[10px] items-center justify-center'>
            <Stars stars={2}/>
            <p className='text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]'>2 Star</p>
          </div>
          <div className='flex items-center gap-[5px] flex-1'>
            <div className='w-full h-[8px] bg-[#E9EAF0] relative'>
              <div className='absolute bg-[#FD8E1F] top-0 w-[1%] h-full'/>
            </div>
            <p className='md:text-[14px] text-[12px] text-[#1D2026] font-medium'>1%</p>
          </div>
          </div>


          {/* 1 star  */}


          <div className='flex gap-[16px] items-center '>
          <div className='flex gap-[10px] items-center justify-center'>
            <Stars stars={1}/>
            <p className='text-[#4E5566] md:text-[14px] text-[12px] md:leading-[22px] leading-[20px]'>1 Star</p>
          </div>
          <div className='flex items-center gap-[5px] flex-1'>
            <div className='w-full h-[8px] bg-[#E9EAF0] relative'>
              <div className='absolute bg-[#FD8E1F] top-0 w-[0.1%] h-full'/>
            </div>
            <p className='md:text-[14px] text-[12px] text-[#1D2026] font-medium'>1%</p>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Rating