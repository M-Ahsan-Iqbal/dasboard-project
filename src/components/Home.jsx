import calendar from '../assets/icons/calendar.png';
import Button from '../components/Button';
import Card from '../components/card';
import userIcon from '../assets/icons/userIcon.png';
import { columns, data } from '../userTableData';
import Table from '../components/table';



function Home(){   
    return(
        <>
          {/* header */}
          <div className="flex flex-wrap justify-between mt-1 mb-4 flex-1 p-2">
            <div>
                <div className="flex items-center text-sm gap-1 text-[#6D6D6D] font-medium"><img src={calendar} alt="" /> 01-01-2025</div>
                <h1 className="text-[28px] font-semibold text-[#3D3D3D] my-0.5"><span className="font-light">Hey,</span> Ali</h1>
                <span className="text-[15px] font-normal leading-1.5">Track, manage, and forecast your customers and orders with ease.</span>
            </div>
            <div className="flex items-center gap-2 py-4">
                <Button variant='outlined'>
                   Pending Orders | 03
                </Button>
                <Button variant='filled'>
                   Start New Visit
                </Button>
            </div>
          </div>

          {/* cards */}
          <div className='px-3 lg:p-6 bg-white rounded-2xl'>
            <h4 className='text-h4 text-[#3D3D3D] capitalize'>Today’s Summary</h4>
            <div className='mt-3'>
                <div className='flex flex-col md:flex-row gap-5'>
                        <Card title="Visits Today" value="05" icon={<img src={userIcon} />}/>
                        <Card title="Completed" value="02" icon={<img src={userIcon} />}/>
                        <Card title="Orders Taken" value="02" icon={<img src={userIcon} />}/>
                </div>
            </div>
          </div>

          {/* table  */}

          <div className='my-4'>
            <div className="px-3 lg:p-6 bg-white rounded-2xl">
               <h4 className='text-h4 capitalize text-[#3D3D3D]'>Today’s Route overview</h4>
               <div className='lg:w-full w-full my-3'>
                  <Table columns={columns} data={data} />
               </div>
            </div>
          </div>
        </>
    )
}

export default Home;