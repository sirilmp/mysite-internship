import React, { useState } from 'react'
import { MdRssFeed, MdCalendarViewMonth, MdSync } from 'react-icons/md';


const HeaderOptions=()=> {

const [activeHeader,setActiveHeader]=useState('permission')
console.log(activeHeader);

    return (
        <div className='mt-9 flex justify-between border-b border-opacity-40 border-gary_dark'>
                    <div className='flex'>
                        <div className='mr-7'>
                            <div className='flex items-center pb-2 cursor-pointer' onClick={()=>setActiveHeader('permission')}>
                                <MdRssFeed className={`mr-1 text-2xl ${activeHeader==='permission'?'text-primary':'text-gary_dark'}`} />
                                <p className={`roboto-400 text-sm ${activeHeader==='permission'?'text-primary':'text-gary_dark'}`}>Permissions</p>
                            </div>
                            {
                             activeHeader==='permission'&&   <div className=' h-1 bg-primary rounded-t-md'></div>
                         }
                        </div>
                        <div className='pl-7 border-l border-gary_dark border-opacity-50'>
                            <div className='flex items-center pb-2 cursor-pointer' onClick={()=>setActiveHeader('approval')}>
                                <MdCalendarViewMonth className={`mr-1 text-2xl ${activeHeader==='approval'?'text-primary':'text-gary_dark'}`} />
                                <p className={`roboto-400 text-sm ${activeHeader==='approval'?'text-primary':'text-gary_dark'}`}>Approval Matrix</p>
                            </div>
                         {
                             activeHeader==='approval'&&   <div className=' h-1 bg-primary rounded-t-md'></div>
                         }
                        </div>
                    </div>
                    <div className='flex'>
                        <MdSync className='text-xl text-gary mr-1'/>
                        <p className='roboto-300 text-gary text-sm'>Last synced 15 mins ago</p>
                    </div>
                </div>
    )
}

export default HeaderOptions
