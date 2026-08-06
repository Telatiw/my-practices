import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
interface IChart {
    grid?: boolean
    title:string
}
const Charts = ({title}:IChart) => {
    const data = [
        {
            name: 'Feb',
            sales: 400,
            // profit: 2400,
            // amt: 2400,
        },
        {
            name: 'Jen',
            sales: 300,
            // profit: 4567,
            // amt: 2400,
        },
        {
            name: 'Mar',
            sales: 320,
            // profit: 1398,
            // amt: 2400,
        },
        {
            name: 'Apr',
            sales: 200,
            // profit: 9800,
            // amt: 2400,
        },
        {
            name: 'May',
            sales: 278,
            // profit: 3908,
            // amt: 2400,
        },
        {
            name: 'Jun',
            sales: 189,
            // profit: 4800,
            // amt: 2400,
        },
        {
            name: 'Jul',
            sales: 189,
            // profit: 4800,
            // amt: 2400,
        },
        {
            name: 'Aug',
            sales: 189,
            // profit: 4800,
            // amt: 2400,
        },
        {
            name: 'Set',
            sales: 189,
            // profit: 4800,
            // amt: 2400,
        },
        {
            name: 'Oct',
            sales: 189,
            // profit: 4800,
            // amt: 2400,
        },
        {
            name: 'Nov',
            sales: 189,
            // profit: 4800,
            // amt: 2400,
        },
        {
            name: 'Dec',
            sales: 189,
            // profit: 4800,
            // amt: 2400,
        },
    ];
    return (
        <div className=' shadow-md bg-white rounded-lg w-full flex flex-col h-auto'>
            <h2 className='p-2 capitalize text-4xl font-medium'>{title}</h2>
            <ResponsiveContainer width='100%' height={300}>
                <LineChart  data={data}>
                    <Line type="monotone" dataKey="sales" />
                    <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="sales" width="auto" scale="linear" label={{position:'left'}}  />
                    {/* <Legend /> */}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts