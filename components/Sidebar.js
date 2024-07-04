import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faUsers, faDollarSign, faBullhorn, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const sidebar = () => {

  
  return (
    <div className='bg-gray-100 min-h-screen'>
  <div className="flex flex-col lg:flex-row">
    <div className="w-full lg:w-72 bg-white h-full lg:h-screen flex flex-col justify-between">
      <div className="p-4">
        <ul>
          <li className="mb-10">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-2 size-7" />
              <div>
                <span className='text-2xl font-bold'>Dashboard</span>
                <span className='text-xs ml-1 opacity-60'>v 0.1</span>
              </div>
            </a>
          </li>

          <div className='ml-5'>

            <li className="mb-4">
              <a href="#" class="flex items-center active:text-white p-4 active:bg-violet-700 active:rounded-2xl justify-between text-gray-700 hover:text-gray-900">
                <div className="flex items-center w-full">
                  <FontAwesomeIcon icon={faBox} className="size-5 mr-3" />
                  <span>Product</span>
                </div>
                <span className='opacity-40 hover:text-gray-900'>{'>'}</span>
              </a>
            </li>

            <li className="mb-4">
              <div class="flex items-center text-white p-4 bg-violet-700 rounded-2xl justify-between">
                <Link href='./customer' />
                <div className="flex items-center w-full">
                  <FontAwesomeIcon icon={faUsers} className="size-5 mr-3" />
                  <span>Customer</span>
                </div>
                <span className='text-white'>{'>'}</span>
              </div>
            </li>

            <li class="mb-4">
              <a href="#" className="flex items-center active:text-white p-4 active:bg-violet-700 active:rounded-2xl justify-between text-gray-700 hover:text-gray-900">
                <div class="flex items-center w-full">
                  <FontAwesomeIcon icon={faDollarSign} className="size-5 mr-3" />
                  <span>Income</span>
                </div>
                <span className='opacity-40 hover:text-gray-900'>{'>'}</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center active:text-white p-4 active:bg-violet-700 active:rounded-2xl justify-between text-gray-700 hover:text-gray-900">
                <div className="flex items-center w-full">
                  <FontAwesomeIcon icon={faBullhorn} className="mr-3 size-5" />
                  <span>Promote</span>
                </div>
                <span className='opacity-40 hover:text-gray-900'>{'>'}</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center active:text-white p-4 active:bg-violet-700 active:rounded-2xl justify-between text-gray-700 hover:text-gray-900">
                <div className="flex items-center w-full">
                  <FontAwesomeIcon icon={faQuestionCircle} className="mr-3 size-5" />
                  <span>Help</span>
                </div>
                <span className='opacity-40 hover:text-gray-900'>{'>'}</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="container size-60 items-center mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl shadow-md p-4 flex flex-col items-center justify-center">
          <h3 className="text-lg font-bold mb-2 text-center">Upgrade to PRO to get access all Features!</h3>
          <button className="bg-white text-blue-600 font-bold shadow-xl py-2 px-4 rounded-full focus:outline-none hover:bg-opacity-75">
            Get Pro Now!
          </button>
        </div>
      </div>
      <div className="p-4 border-t">
        <a href="#" className="flex items-center text-gray-700 hover:text-gray-900">
          <img src='https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1881' alt="Profile" width={10} height={10} className="w-10 h-10 rounded-full mr-3" />
          <span>Profile</span>
        </a>
      </div>
    </div>
  </div>
</div>

  )
}
export default sidebar