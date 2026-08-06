import VisibilityIcon from '@mui/icons-material/Visibility';
import { newJoin } from '../../../../Data/Data';
const data = newJoin
const WidgetSm = () => {
  return (
    <div className="flex-1 h-auto flex flex-col gap-y-4 p-4 shadow-2xl">
      <span className="text-2xl font-semibold">New Join User</span>
      <ul className="flex flex-col font-semibold gap-y-5">
        {data.map(({id,job,name,img}) => (
          <li key={id} className="flex px-2 justify-between items-center w-full h-full">
            <div className="size-12"><img className="rounded-full" src={img} alt="" /></div>
            <div className='flex flex-col text-center'>
              <span className='capitalize'>{name}</span>
              <span className='opacity-70 capitalize'>{job}</span>
            </div>
            <button className=' py-1 px-2 text-white bg-slate-400 rounded-lg'>
              <VisibilityIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSm