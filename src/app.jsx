import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './style/main.scss'

import { AppJob } from './page/app-job'
import { loadJobs, loadDemoJobs } from './store/job/job.action'

export function App() {

   const dispatch = useDispatch()

   useEffect(() => {
      getJobList()
   }, [])

   const getJobList = async () => {
      await dispatch(loadJobs())
      // await dispatch(loadDemoJobs())
   }

   return (
      <div className='app'>
         <Routes>
            <Route path="/" element={<AppJob />} />
            {/* <Route path="/departure" element={<AppJob board={'D'} />} /> */}
         </Routes>
      </div>
   )
}
