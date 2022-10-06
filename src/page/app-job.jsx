import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { JobList } from '../cmps/jobs-list'
import { JobsSideFilter } from '../cmps/jobs-side-filter'

export const AppJob = () => {

   const { jobs, updateDate } = useSelector(({ jobModule }) => jobModule)
   const [filterdJobs, setFilterdJobs] = useState('')

   const getFilterdJobs = (list) => {

      if (!list.length) return setFilterdJobs('')

      const transformList = {}
      for (let i = 0; i < list.length; i++) {
         if (!transformList[list[i].field]) transformList[list[i].field] = [list[i].value]
         else if (transformList[list[i].field]) transformList[list[i].field] = [...transformList[list[i].field], list[i].value]
      }

      const filterdJobs = jobs.filter(job => {
         if (transformList?.source?.length && transformList?.jobLocation?.length) {
            if (
               transformList.jobLocation.some(item => job.jobLocation.indexOf(item) !== -1) &&
               transformList.source.some(item => job.source.indexOf(item) !== -1)) {
               return true
            }
         } else if (transformList?.source?.length) {
            if (transformList.source.some(item => job.source.indexOf(item) !== -1)) {
               return true
            }
         } else {
            if (transformList.jobLocation.some(item => job.jobLocation.indexOf(item) !== -1)) {
               return true
            }
         }
      })

      setFilterdJobs(filterdJobs)
   }

   if (!jobs?.length) return (<div className="loader"></div>)

   return (
      <section className="app-job" >
         <JobsSideFilter jobs={jobs} getFilterdJobs={getFilterdJobs} />
         <JobList jobs={filterdJobs ? filterdJobs : jobs} updateDate={updateDate} />
      </section>
   )
}

