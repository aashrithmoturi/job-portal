import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card description="Browse our React jobs and start your career today" btnContent="Browse Jobs" bg="bg-gray-100" href="/jobs" btnBg="bg-black" btnHoverBg="bg-gray-700" whoIsConcerned="For Developers" />
          <Card description="List your job to find the perfect developer for the role" btnContent="Add Job" bg="bg-indigo-100" href="/add-job" btnBg="bg-indigo-500" btnHoverBg="bg-indigo-600" whoIsConcerned="For Employers" />
          
          {/* <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Add Job
            </a>
          </div> */}

        </div>
      </div>
    </section>
  )
}

export default Cards