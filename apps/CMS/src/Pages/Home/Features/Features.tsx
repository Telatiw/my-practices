import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Features = () => {
    const data = [
        { title: 'revanue', dollar: '2,415', increase: false, percent: '2.4' },
        { title: 'sales', dollar: '4,415', increase: false, percent: '2.4' },
        { title: 'cost', dollar: '2,225', increase: true, percent: '2.4' },
    ]
    return (
        <div className='flex w-full gap-5 justify-around'>
            {data.map(({ title, dollar, increase, percent }) => (
                <Card className='w-full' key={title} >
                    <CardContent>
                        <div>
                            <h4 className='font-semibold text-4xl capitalize'>{title}</h4>
                            <div className='flex items-center '>
                                <h6 className='font-semibold text-2xl'>${dollar}</h6>
                                <div className='flex ml-5'>
                                    <span> {increase ? "-" : "+"}{percent}</span>
                                    {increase ? <ArrowUpwardIcon className='text-green-400' /> : <ArrowDownwardIcon className='text-red-400' />}
                                </div>
                            </div>
                            <h5>compared to last month</h5>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Features