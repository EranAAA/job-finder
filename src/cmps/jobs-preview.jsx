import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

export const JobPreview = ({ job }) => {

   const sourceColor = () => {
      if (job.source === 'Linkedin') return '#0a66c2'
      else if (job.source === 'Glassdoor') return '#0caa41'
      else if (job.source === 'Drushim') return '#ff7100'
   }

   const sourceImg = () => {
      if (job.source === 'Linkedin') return 'linkedin'
      else if (job.source === 'Glassdoor') return 'glassdoor'
      else if (job.source === 'Drushim') return 'drushim'
   }

   // if (job.source === 'Drushim')console.log(job.jobLocation.replace('\n', '').replace('|', '').trim())

   return (
      <section className="job-preview" >

         <div className="job-preview-container">
            <div className="img">
               {job.companyImg && <img src={job.companyImg} alt={job.source} />}
               {!job.companyImg && <img src={require(`../style/imgs/${sourceImg()}.png`)} alt="" />}
            </div>

            <div className="data">
               <div className="title">{job.jobTitle}</div>
               <div className="publisher">{job.jobPublisher}</div>
               <div className="location">{job.jobLocation}</div>

               <div className="date"></div>
               <div className="date">{`${new Date(job.jobDate).toLocaleDateString('en-GB')} (${job.jobRealtiveDate})`}</div>
            </div>

         </div>

         <div className="source" style={{ '--c': sourceColor() }}>{job.source}</div>

         <div className="link"><a href={job.linkPage} target="_blank">Apply<FiExternalLink /></a></div>
      </section>
   )
}

