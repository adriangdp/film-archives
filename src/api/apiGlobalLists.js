import { getOptions } from './apiOptions';
import { uriPopularList } from './apiRoutes';
import { useQuery } from '@tanstack/react-query';

const fetchMostPopular = async() =>{
    const response = await fetch(uriPopularList,getOptions)
    if(!response.ok) throw new Error('Could not fetch list: Most popular')
    return await response.json()
}

export const useFetchMostPopular = () =>{
    return useQuery(
        {
            queryKey:['MostPopularList'],
            queryFn:fetchMostPopular
        }
    )
}