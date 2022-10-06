import { httpService } from './http.service'

export const jobService = {
   query
}

async function query(filter = {}) {
   try {
      return await httpService.get('job/', filter)
   } catch (err) {
      console.log('cant get jobs!')
      throw err
   }
}

