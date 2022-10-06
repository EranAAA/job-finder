import React from 'react'

import { JobPreview } from './jobs-preview'

export const JobList = ({ jobs, updateDate }) => {

   return (
      <section className="job-list" >

         <div className="header-container">
            <div className="title">Jobs Finder</div>
            <div className="refresh-date">Key search: Frontend | Date: Last 2 weeks</div>
            <div className="refresh-date">Last Update: {updateDate}</div>
         </div>

         <div className="job-container">
            {jobs.length && jobs.map(job => <JobPreview job={job} key={job._id} />)}
         </div>

         {/* <div className="footer-container">
            <a href="https://linkedin.com/in/eran-avichzer" target="_blank" ><img align="center"
               src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
               alt="eran-avichzer" height="70" width="40" /></a>

            <a href="https://github.com/EranAAA" target="_blank" className='github'><img align="center"
               src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
               alt="eran-avichzer" height="60" width="40" /></a>
         </div> */}

      </section>
   )
}

