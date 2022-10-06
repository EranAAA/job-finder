import React from 'react'

import { JobPreview } from './jobs-preview'

export const JobList = ({ jobs, updateDate }) => {

   // console.table(jobs)

   return (
      <section className="job-list" >
         <div className="header-container">
            <div className="title">Jobs Finder</div>
            <div className="refresh-date">Last Update: {updateDate }</div>
         </div>
         <div className="job-container">
            {jobs.length && jobs.map(job => <JobPreview job={job} key={job._id} />)}
         </div>
      </section>
   )
}

