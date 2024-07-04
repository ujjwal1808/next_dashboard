"use client"
import React from 'react'
import customers from './data'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faArrowLeft, faArrowRight, faUserCheck, faArrowUp, faArrowDown, faSearch, faChevronDown, faComputer } from '@fortawesome/free-solid-svg-icons'


const Customer = () => {
    const [search, setSearch] = useState('')
    const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCustomers = filteredCustomers.sort((a, b) => {
    if (sortOrder === 'Newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });
    
    const profiles = [
        'https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y',
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1881',
        'https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y',
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1881',
        'https://media.licdn.com/dms/image/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=CJY6IY9Bsqc2kiES7HZmnMo1_uf11zHc9DQ1tyk7R7Y',
        'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1881',
        
    ];

    const entriesPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalEntries = customers.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage);

    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const getVisiblePages = () => {
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    const startEntryIndex = (currentPage - 1) * entriesPerPage;


    return (
        <div className="p-4">
    <div className='mt-7 flex flex-wrap'>
        <div className="bg-white gap-5 shadow-sm rounded-lg p-6 flex flex-wrap items-center justify-between space-x-6">
            <div className="bg-green-100 rounded-full p-4">
                <FontAwesomeIcon icon={faUsers} className="text-green-500 size-12 text-xl" />
            </div>
            <div>
                <h3 className="text-gray-500">Total Customers</h3>
                <p className="text-3xl font-bold text-gray-800">5,423</p>
                <div className="flex items-center text-green-500 mt-2">
                    <FontAwesomeIcon icon={faArrowUp} className=" size-5 mr-1" />
                    <span className="text-sm">16% this month</span>
                </div>
            </div>
            <hr className='h-full bg-black w-0 sm:w-px sm:h-auto' />
            <div className="bg-green-100 rounded-full p-4">
                <FontAwesomeIcon icon={faUserCheck} className="text-green-500 size-12 text-xl" />
            </div>
            <div>
                <h3 className="text-gray-500">Member</h3>
                <p className="text-3xl font-bold text-gray-800">1,893</p>
                <div className="flex items-center text-red-500 mt-2">
                    <FontAwesomeIcon icon={faArrowDown} className=" size-3 mr-1" />
                    <span className="text-sm">1% this month</span>
                </div>
            </div>
            <hr className='h-full bg-black w-0 sm:w-px sm:h-auto' />
            <div className="bg-green-100 rounded-full p-4">
                <FontAwesomeIcon icon={faComputer} className="text-green-500 size-12 text-xl" />
            </div>
            <div>
                <h3 className="text-gray-500">Active Now</h3>
                <p className="text-3xl font-bold text-gray-800">189</p>
                <div className="flex items-center text-green-500 mt-2">
                    <div className="flex -space-x-4">
                        {profiles.map((profile, index) => (
                            <img
                                key={index}
                                src={profile}
                                alt={`Profile ${index + 1}`}
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="p-4 mt-5 bg-white rounded-lg shadow-sm">
        <div>
      <div className="flex flex-wrap justify-between">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">All Customers</h1>
          <p className="text-green-500">Active Members</p>
        </div>
        <div className="flex flex-wrap justify-end gap-5 items-center mb-4">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute top-3 left-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="relative border">
            <label htmlFor="sort" className="p-3">Sort by:</label>
            <select
              id="sort"
              className="appearance-none rounded-lg py-2 font-bold pr-8 focus:outline-none"
              value={sortOrder}
              onChange={handleSortChange}
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} className="absolute top-2 right-2 text-gray-400" />
          </div>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 font-medium opacity-50 text-gray-500">Customer Name</th>
            <th className="py-2 font-medium opacity-50 text-gray-500">Company</th>
            <th className="py-2 font-medium opacity-50 text-gray-500">Phone Number</th>
            <th className="py-2 font-medium opacity-50 text-gray-500">Email</th>
            <th className="py-2 font-medium opacity-50 text-gray-500">Country</th>
            <th className="py-2 font-medium opacity-50 text-gray-500">Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedCustomers.slice(startEntryIndex, startEntryIndex + entriesPerPage).map((customer, index) => (
            <tr key={index} className="border-t text-black">
              <td className="py-2">{customer.name}</td>
              <td className="py-2">{customer.company}</td>
              <td className="py-2">{customer.phone}</td>
              <td className="py-2">{customer.email}</td>
              <td className="py-2">{customer.country}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${customer.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                >
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        <div className="flex flex-wrap justify-between items-center mt-4">
            <span className="text-gray-500 mb-2">
                Showing data {startEntryIndex + 1} to {Math.min(currentPage * entriesPerPage, totalEntries)} of {totalEntries} entries
            </span>
            <div className="flex items-center space-x-2">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 border rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'}`}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                {getVisiblePages().map((page, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && page - getVisiblePages()[index - 1] > 1 && (
                            <span className="px-3 py-1">...</span>
                        )}
                        <button
                            onClick={() => handlePageClick(page)}
                            className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-purple-600 text-white' : 'text-gray-600'}`}
                        >
                            {page}
                        </button>
                    </React.Fragment>
                ))}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'}`}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    </div>
</div>

    )
}

export default Customer