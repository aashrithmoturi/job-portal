import React from 'react'
import { Route, createBrowserRouter,  createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import NotFoundPage from './pages/NotFoundPage'
import EditJobPage from './pages/EditJobPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// used (navLink, isActive) for highlighting the active tab.
// use props as an argument, if it is not a prop keep in mind to use braces {job}
// used mainLayout to avoid re-using of some particular component
// use state hook is used in the homepage to show description (less or more)
// using json server from npm package for mock api.(npm i json-server)

const App = () => {
  const addJobHandler = async(newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }
  const editJobHandler = async(updatedJob) => {
    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedJob),
    });
    return;
  }
  const deleteJobHandler = async(id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      // mainlayout is fixed for all the pages and 
      // "Outlet" is used in MainLayout to serve the inner "Homepage"
      <Route path='/' element={<MainLayout/>}>
        <Route index element={ <HomePage /> } />
        <Route path='/jobs' element={ <JobsPage /> } />
        <Route path='/jobs/:id' element={ <JobPage deletedJob={ deleteJobHandler }/> } loader={jobLoader}/>
        <Route path='/jobs/edit/:id' element={ <EditJobPage editJob={ editJobHandler }/> } loader={jobLoader}/>
        <Route path='/add-job/' element={<AddJobPage addJobToJobspage={ addJobHandler }/> } />
        {/* the bottom code will lead to custom not found page */}
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )

  return (
    <>
      <ToastContainer />
      <RouterProvider router = {router}/>
    </>
  )
}

export default App