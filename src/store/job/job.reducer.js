const initialState = {
   jobs: [],
   updateDate: ''
}

export function jobReducer(state = initialState, action) {
   var newState = state

   switch (action.type) {
      case 'SET_JOBS':
         let updateDate = action.jobs[0].updateDate
         updateDate = new Date(updateDate).toLocaleDateString('en-GB') + ' ' + new Date(updateDate).toLocaleTimeString('en-GB')
         const jobs = action.jobs.sort((a, b) => new Date(b.jobDate) - new Date(a.jobDate))
         newState = { ...state, jobs, updateDate }
         break
      default:
   }
   // For debug:
   window.jobState = newState
   return newState
}
