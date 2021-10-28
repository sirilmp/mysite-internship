import Logo from '../components/Logo'
import DashboardMenus from '../components/DashboardMenus';
import HeaderMenus from '../components/HeaderMenus';
import { MdAdd, MdDeleteOutline, MdEdit } from 'react-icons/md';
import HeaderOptions from '../components/HeaderOptions';

const Dashboard = () => {



    return (
        <div className='py-3 grid grid-cols-5 w-full pr-6'>
            <div className='px-4'>
                <Logo />
                <DashboardMenus />
            </div>
            <div className='col-span-4'>
                <HeaderMenus />
                <HeaderOptions />
                <div className='w-full px-10 pt-6'>
                    <div className='flex items-center'>
                        <button className='flex items-center bg-primary hover:bg-primary_lite duration-200 rounded-md py-1.5 px-6 text-white hover:text-primary roboto-400 mr-4'>
                            <MdAdd className='text-xl mr-3'/>
                            Add Role
                        </button>
                        <MdEdit className=' cursor-pointer hover:bg-gray duration-200 w-8 h-8 rounded-full p-1 text-gary_dark ml-3 mr-3'/>
                        <MdDeleteOutline className=' cursor-pointer hover:bg-gray duration-200 w-8 h-8 rounded-full p-1 text-gary_dark ml-3 mr-3'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
