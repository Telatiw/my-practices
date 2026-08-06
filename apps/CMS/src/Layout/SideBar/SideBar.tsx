import ShowChartIcon from '@mui/icons-material/ShowChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { NavLink } from 'react-router';
const SideBar = () => {
  const listItems = {
    dashboard: {
      home: { icon: <HomeOutlinedIcon />,path:'/'},
      analytics: { icon: <ShowChartIcon />,path:'analytics'},
      sales: { icon: <PieChartOutlineOutlinedIcon />,path:'sales'},
    },
    QuickMeny: {
      users: { icon: <GroupOutlinedIcon /> ,path:'users'},
      newUser: { icon: <PermIdentityOutlinedIcon /> ,path:'newuser'},
      products: { icon: <StorefrontIcon /> ,path:'products'},
      transition: { icon: <AttachMoneyOutlinedIcon /> ,path:'transition'},
      reports: { icon: <InsertChartOutlinedIcon /> ,path:'reports'},
    },
    notifications: {
      mail: { icon: <EmailOutlinedIcon />,path:'mail' },
      feedback: { icon: <TextsmsOutlinedIcon />,path:'feedback' },
      message: { icon: <MessageOutlinedIcon />,path:'message' },
    },
    staff: {
      manage: { icon: <WorkOutlineOutlinedIcon /> ,path:'manage'},
      analytics: { icon: <ReportGmailerrorredOutlinedIcon /> ,path:'analytics'},
      reports: { icon: <TimelineIcon /> ,path:'reports'},
    },
  }
  return (
    <div className=" w-2/12 h-screen sticky top-0  ">
      <ul className='w-full h-full flex flex-col  '>
        {Object.entries(listItems).map(([key, value]) => (
          <li className='pl-2' key={key}>
            <span className="font-semibold text-sm">{key}</span>
            <ul>
              {Object.entries(value).map(([key, value]) => (
                <NavLink key={key} to={value.path}>
                  {({ isActive }) => (
                    <li key={key} className={`flex p-1 gap-x-1 items-center capitalize font-semibold ${isActive ? 'bg-slate-300/50 rounded-lg' : ''} `}> {value.icon}{key} </li>
                  )}
                </NavLink>
              ))}
            </ul>
          </li>
        ))
        }
      </ul>
    </div>
  )
}
export default SideBar