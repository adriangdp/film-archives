import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetListDetails } from '../api/apiLists';
import { useQueryClient } from '@tanstack/react-query';
import { useCredentials } from '../stores/authStore';
import { removeFromUserList } from '../api/apiLists';

import CardListDisplay from '../components/cards/card-list-display';
import FilmCard from '../components/cards/film-card';
import RoundRemover from '../components/ui/round-remover-collection.component';


const ListDetails = () =>{
    
    let {listId} = useParams()
    const {getValidSession} = useCredentials()
    const queryClient = useQueryClient()
    const[page,setPage] = useState('1')


    const handleRemoveFromList = async(removeFilm) =>{
        await removeFromUserList(removeFilm.id,getValidSession()?.session_id,listId)
        queryClient.refetchQueries(['listDetails',data.id])
    }


    const {data,isLoading:detailsLoading,isError:detailsError} = useGetListDetails(listId,page)


    if(data){
        const {name,description,items} = data;
        return(
            <div className='
                md:w-11/12
                lg:w-10/12 
                min-h-screen
                mx-auto 
                mt-12
                md:mt-12
                lg:mt-18
                px-4
                md:px-0               
                '>
                <h2 className='         
                    text-5xl 
                    lg:text-5xl
                '>{name}</h2>
                { description != null && description.length > 0 && <p>{description}</p>}
                
                <CardListDisplay 
                    oneLiner={false}
                >
                    {                    
                    items.map((film, i) =>
                        <FilmCard data={film} key={i}>
                            <RoundRemover item={film} handler={handleRemoveFromList} />
                        </FilmCard>
                    )}
                </CardListDisplay>
               
               
                
            </div>
        );
    }
    
}

export default ListDetails;