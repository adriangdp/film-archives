import { filmDetails } from './apiRoutes'
import { getOptions } from './apiOptions'
import { useQuery } from '@tanstack/react-query'

const fetchFilmData = async(filmId,appended=null) =>{
    let response;
    if(!appended){
        response = await fetch(filmDetails+`/${filmId}`,getOptions)
    }
    else{
        response = await fetch(filmDetails+`/${filmId}?append_to_response=${appended}`,getOptions)
    }
    

    if(!response.ok) throw new Error('Could not fetch film details')
        return await response.json()   
   
}

export const useFetchFilmData = (filmId,appended=null) =>{
    return useQuery(
        {
            queryKey:['film details', filmId,appended],
            queryFn: ({queryKey})=>fetchFilmData(queryKey[1],queryKey[2])
        }
    )
}