import React, { useState } from 'react'
import { MdOutlineDashboard,MdOutlineSecurity,MdBusinessCenter} from 'react-icons/md';

const DashboardMenus=()=> {

    const [activeMenu,setActiveMenu]=useState('control')
    const activeMenuStyle='roboto-500 text-primary'
    const menuStyle='roboto-400 text-black opacity-70'
    const commonMenuDivStyle='border-l-4 border-primary border-opacity-0 flex h-10 px-2 w-56 cursor-pointer items-center'
    const activeMenuDivStyle='border-opacity-100 bg-primary_lite'


    return (
        <>
          <div className={`${commonMenuDivStyle} mt-5 ${activeMenu==='project'?activeMenuDivStyle:'hover:bg-gray'}`} onClick={()=>{setActiveMenu('project')}}>
                            <MdOutlineDashboard className={`${activeMenu==='project'?activeMenuStyle:menuStyle} mr-5 text-2xl`} />
                            <p className={`${activeMenu==='project'?activeMenuStyle:menuStyle}`}>Projects</p>
                        </div>
                        <div className={`${commonMenuDivStyle} mt-4 mb-4 ${activeMenu==='profile'?activeMenuDivStyle:'hover:bg-gray'}`} onClick={()=>{setActiveMenu('profile')}}>
                            <MdBusinessCenter className={`${activeMenu==='profile'?activeMenuStyle:menuStyle} mr-5 text-2xl `}/>
                            <p className={`${activeMenu==='profile'?activeMenuStyle:menuStyle}`}>Organization Profile</p>
                        </div>
                        <div className={`${commonMenuDivStyle} ${activeMenu==='control'?activeMenuDivStyle:'hover:bg-gray'}`} onClick={()=>{setActiveMenu('control')}}>
                            <MdOutlineSecurity className={`${activeMenu==='control'?activeMenuStyle:menuStyle} mr-5 text-2xl`} />
                            <p className={`${activeMenu==='control'?activeMenuStyle:menuStyle}`}>Access Control</p>
                        </div>  
        </>
    )
}

export default DashboardMenus
