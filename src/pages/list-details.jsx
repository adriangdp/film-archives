import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetListDetails } from '../api/apiLists';

import CardListDisplay from '../components/cards/card-list-display';
import FilmCard from '../components/cards/film-card';
import ListRemoverButton from '../components/ui/list-remover-button';
import { useQueryClient } from '@tanstack/react-query';

const ListDetails = () =>{
    
    let {listId} = useParams()
    const queryClient = useQueryClient()
    const[page,setPage] = useState('1')

    const {data,isLoading:detailsLoading,isError:detailsError} = useGetListDetails(listId,page)

    const handleRemove = () =>{
        queryClient.refetchQueries(['listDetails',data.id])
    }

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
                { description !== null && <p>{description}</p>}

                <CardListDisplay 
                    oneLiner={false}
                    className='gap-12'
                >
                    {                    
                    items.map((film, i) =>
                        <FilmCard data={film} key={i}>
                            <ListRemoverButton removeFilm={film} list={data} handleControl={handleRemove} />
                        </FilmCard>
                    )}
                </CardListDisplay>
               
               
                
            </div>
        );
    }
    
}

export default ListDetails;