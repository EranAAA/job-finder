import { jobService } from '../../services/job.service.js'

export function loadJobs() {
   try {
      return async (dispatch) => {
         const jobs = await jobService.query()
         console.log('Got Jobs')
         dispatch({ type: 'SET_JOBS', jobs })
      }
   } catch (err) {
      console.log('cannot load jobs', err)
   }
}