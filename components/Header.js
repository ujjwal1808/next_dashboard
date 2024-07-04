import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const header = () => {
    return (
        <div className='mt-8 '>
            <div className='flex gap-96 '>
                <div className='text-xl font-light'>
                    Hello Evano 👋🏻,
                </div>

                <div className=" ml-28 ">
                <span className="absolute ml-3 mt-3 ">
                        <FontAwesomeIcon className=' opacity-50 size-5 text-black-700' icon={faSearch} />
                    </span>
                    <input
                        type="text"
                        className="w-full  rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-sm"
                        placeholder="Search..."
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default header