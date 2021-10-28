import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const HeaderMenus = () => {
    return (
        <div className='right-0 flex justify-end w-full'>
            <div className='w-6 h-6 rounded-full bg-gray mr-2'></div>
            <p className='text-black roboto-400 text-sm mr-6'>Kishore</p>
            <IoIosNotificationsOutline className='text-black text-xl ml-2 mr-2' />
            <AiOutlineQuestionCircle className='text-black text-xl ml-2 mr-2' />
        </div>
    )
}

export default HeaderMenus
