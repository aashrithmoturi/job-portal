import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero title = "Become a React Developer" subTitle="by giving your best" />
        <Cards/>
        <JobListings isHomePage={true} />
        <ViewAllJobs/>
    </>
  )
}

export default HomePage