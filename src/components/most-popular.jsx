import { useFetchMostPopular } from '../api/apiGlobalLists';
import { pathImageOriginal } from '../api/apiRoutes';

import CardListDisplay from './cards/card-list-display';
import FilmCard from './cards/film-card';
import AddToList from './ui/add-to-list.component';


const MostPopular = () =>{
    
    const{data,isLoading,error} = useFetchMostPopular()
    
    if(error){
        console.error('Error while fetching list of most popular films: ', error.message)
        return <></>
    }
    if(isLoading){
        return <></>
    }
    if(data){
        return(

            <CardListDisplay>

                { data.results.map((film, i) =>
                        <FilmCard key={i} data={film}>
                            <AddToList film={film}/>
                        </FilmCard>
                 )}
            </CardListDisplay>            
        )
    }
}

export default MostPopular