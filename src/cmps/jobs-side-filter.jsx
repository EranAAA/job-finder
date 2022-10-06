import { divide } from "lodash";
import React, { useState, useEffect } from "react";
import { FiFilter } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

export const Card = ({ listSource, handleSelect, title, field }) => {
   return (
      <div className="card">
         <label>{title}</label>
         <div className="card-body">
            {listSource.map(item => {
               return (
                  <div key={item.idx} className="checkbox-container">
                     <input type="checkbox" name={field} id={item.id} value={item.id} onChange={handleSelect} />
                     <label htmlFor={item.id}>{item.id}<div className="count">{item.value}</div></label>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export const JobsSideFilter = ({ jobs, getFilterdJobs }) => {

   const [checkedList, setCheckedList] = useState([])
   const [isHidden, setIsHidden] = useState(() => window.innerWidth <= 700 ? true : false)
   const [isFullScreen, setIsFullScreen] = useState(false)
   const [dimensions, setDimensions] = useState({ width: window.innerWidth })

   useEffect(() => {
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])

   const handleResize = () => {
      if (window.innerWidth <= 700) {
         // console.log(window.innerWidth)
         if (!isFullScreen) {
            setIsFullScreen(true)
         }
         setIsHidden(true)

      } else {
         setIsHidden(false)
         setIsFullScreen(false)
      }
      setDimensions({ width: window.innerWidth })
   }

   const getJobList = (field) => {
      const result = {}

      if (field === 'jobLocation') {
         const list = jobs.map(job => { return job[field].substring(0, job[field].search(",")) || job[field] })
         list.forEach(location => { result[location] = (result[location] || 0) + 1 })
         const ResultToList = Object.keys(result).map((k, idx) => ({ id: k, value: result[k], idx })).sort((a, b) => b.value - a.value)
         return ResultToList
      } else if (field === 'jobDate') {
         const list = jobs.map(job => job[field])
         list.forEach(location => { result[location] = (result[location] || 0) + 1 })
         const ResultToList = Object.keys(result)
            .map((k, idx) => ({ id: new Date(k).toLocaleDateString('en-GB'), value: result[k], idx }))
            .sort((a, b) => new Date(b.id) - new Date(a.id))
         return ResultToList
      } else if (field === 'source') {
         const list = jobs.map(job => job[field])
         list.forEach(location => { result[location] = (result[location] || 0) + 1 })
         const ResultToList = Object.keys(result)
            .map((k, idx) => ({ id: k, value: result[k], idx }))
            .sort((a, b) => b.id - a.id)
         return ResultToList
      }
   }

   const handleSelect = ({ target }) => {
      const item = { field: target.name, value: target.value }
      const isChecked = target.checked

      if (isChecked) {
         setCheckedList([...checkedList, item])
         getFilterdJobs([...checkedList, item])

      } else {
         const filteredList = checkedList.filter(a => a.value !== item.value);
         setCheckedList(filteredList)
         getFilterdJobs(filteredList)
      }
   }

   const onOpenMenu = () => {
      setIsHidden(false)
      setIsFullScreen(true)
   }

   const onCloseMenu = () => {
      setIsHidden(true)
      setIsFullScreen(false)
   }

   return (
      <div className={`jobs-side-filter`}>

         {isHidden && <div className="side-btn" onClick={onOpenMenu}><FiFilter /></div>}

         <div className={`container ${isHidden ? 'hidden' : ''} ${isFullScreen ? 'full-screen' : ''}`} >

            {isFullScreen && <div className="side-cls-btn" onClick={onCloseMenu}><IoMdClose /></div>}

            <div className="links">
               <a href="https://linkedin.com/in/eran-avichzer" target="_blank" ><img align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="eran-avichzer" height="70" width="40" /></a>

               <a href="https://github.com/EranAAA" target="_blank" className='github'><img align="center"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="eran-avichzer" height="60" width="40" /></a>
            </div>

            <Card listSource={getJobList('source')} handleSelect={handleSelect} title={'Source:'} field={'source'} />
            <Card listSource={getJobList('jobDate')} handleSelect={handleSelect} title={'Job Date:'} field={'jobDate'} />
            <Card listSource={getJobList('jobLocation')} handleSelect={handleSelect} title={'Location:'} field={'jobLocation'} />
         </div>

      </div>
   )
}
