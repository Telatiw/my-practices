import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import type React from 'react';

interface IBadgeNav {
    icon: React.ReactNode
    notif: number

}


const NavBar = () => {
    return (
        <nav className="w-full flex justify-between px-2 mt-2">
            <div className="w-1/6 flex items-center "><span className="uppercase font-medium text-5xl">mohim</span> <FavoriteIcon color="secondary" fontSize="large" /> </div>
            <div className="h-full w-1/6 flex items-center justify-between">
                <Badge className='cursor-pointer' sx={{ fontSize: '4px' }} max={99} badgeContent={50} color="primary">
                    <SettingsIcon />
                </Badge>
                <Badge className='cursor-pointer' badgeContent={4}  color="primary">
                    <NotificationsIcon />
                </Badge>
                <Badge className='cursor-pointer' badgeContent={4} color="primary">
                    <LanguageIcon />
                </Badge>
                <div className="h-full w-1/4">
                    <img className="h-full rounded-full w-full" src="/Avatars/me.jpg" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar