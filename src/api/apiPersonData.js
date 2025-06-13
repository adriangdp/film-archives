import { personDetails } from './apiRoutes'
import { getOptions } from './apiOptions'
import { useQuery } from '@tanstack/react-query'

const fetchPersonData = async(id) =>{
    try{
        const response = await fetch(`${personDetails}/${id}`, getOptions)
        if(!response.ok) throw new Error('Error while fetching cast or crew data')
        return await response.json()
    } catch (error){
        console.error('Error fetching person data', error)
        throw error
    }
    
}

export const useGetPersonData = (id) =>{
    return useQuery(
        {
            queryKey:['person details', id],
            queryFn:(queryKey)=>fetchPersonData(id),
            enabled: !!id,
            retry: 2
        }
    )
}