import React, { useEffect, useState } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner';

// use json-server, take care of homePage and jobPage
// adding proxy instead of localhost 
// add spinner

const JobListings = ({isHomePage = false}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // [] when this is used it means that it hits only on the first rendering
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = !isHomePage ? '/api/jobs' : '/api/jobs?_limit=3'
        const res = await fetch(apiUrl);
        // this is wrong dont know the reason 
        // console.log(res);
        // setJobs(res.json());

        const data = await res.json();
        console.log("fetched data from json-server: ", data)
        setJobs(data);
      }
      catch(err) {
        console.log('Error fetching data', err);
      }
      finally {
        setLoading(false);
      }
    }

    // make sure to call fetchJobs
    fetchJobs();
  }, [])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHomePage ? 'Recent Jobs' : 'Browse Jobs'} 
        </h2>
        { loading ? 
          <Spinner/> : 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        }
      </div>
    </section>
  )
}

export default JobListings