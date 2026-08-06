import { transition } from '../../../../Data/Data'
const TransActoins = transition
const WidgetLg = () => {
  return (
    <div className=' p-4 flex-2 flex flex-col gap-y-2 shadow-sm'>
      <span className='font-medium text-2xl'>Latest TransActoins</span>
      <div className='overflow-y-scroll max-h-62'>
        <table className='w-full  font-medium text-left'>
          <tbody >
            {TransActoins.map(({ id, amount, date, img, name,status }) => (
              <tr  key={id}>
                <td className='flex p-2 items-center gap-5'>
                  <img className='size-12 rounded-full' src={img} alt={name} />
                  <span className='capitalize'>{name}</span>
                </td>
                <td className=''>{date}</td>
                <td className=''>${amount}</td>
                <td>
                  <button className={`rounded-lg py-1 px-2 ${status ? 'bg-green-400' : 'bg-rose-400'} `}>{status ? 'success' : 'decline'}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WidgetLg