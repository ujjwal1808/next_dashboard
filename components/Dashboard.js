import React from 'react';
import Sidebar from './Sidebar';
import Customer from './Customer'
import Header from './Header';

const Dashboard = () => {
  return (
    <div className='flex bg-gray-100 gap-9 h-full'>
      <div className='fixed'>
        <Sidebar />
      </div>
      <div className='ml-96 mb-5 h-full' >
        <div>
          <Header />
        </div>
        <div>

        <Customer  />
        </div>
      </div>
    </div>
  )
}

export default Dashboard