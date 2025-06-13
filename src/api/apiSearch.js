import { useQuery } from '@tanstack/react-query';
import { getOptions } from './apiOptions';
import { searchMulti } from './apiRoutes';


const fetchMultiSearch = async(keyword, page) =>{
    const response = await fetch (searchMulti(keyword,page),getOptions)
    if(!response.ok) throw new Error('Error fetching search results')
    return await response.json()
}

export const useMultiSearch = (query, page) =>{

    return useQuery(
        {
            queryKey: ['multi search',query, page],
            queryFn: ({queryKey})=>fetchMultiSearch(queryKey[1], queryKey[2]),
            enabled:!!query,
            keepPreviousData: true,
            staleTime: 5*60*1000,
        }
    )
}