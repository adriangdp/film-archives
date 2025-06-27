import { useState } from 'react';
import { useMultiSearch } from '../../api/apiSearch';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';


const SearchFilm = () =>{

    const[query, setQuery] = useState('')
    const[page, setPage] = useState('1')
    const {data, isLoading, error} = useMultiSearch(query, page)
    const queryClient = useQueryClient()


    const handleChange = (e) =>{       
        if(e.length != 0){
            setQuery(e)
            queryClient.refetchQueries(['multi search'])
            return
        }
        setQuery('')
        queryClient.clear(['multi search'])
    }

    return(
        <form             
            className='
                w-full
                md:w-10/12
                lg:w-7/12
                md:mx-auto
                my-2
                relative
                z-3
            '
        >
            <div className='
                    w-full
                    h-10
                    flex
                    justify-center
                    items-center'>
            <input 
                onChange ={e=>handleChange(e.target.value)}
                value={query}
                placeholder='Search for films, directors, actors, crew...'
                className='
                    w-full
                    h-full
                    grow-1
                    pt-3
                    pl-3
                    pb-3
                    pr-10
                    bg-background
                    outline-primary/60
                    outline-3
                    text-entry-faded
                    rounded-md
                    md:rounded-xl
                    text-ellipsis
            '>            
            </input>
            {
              data && 
                <button 
                    onClick={()=>handleChange('')}
                    className='absolute right-3 w-5 h-5 m-0 p-0 aspect-square rounded-full text-primary text-center text-base leading-0'
                >
                        x
                </button>  
            }
            
            </div>
            
            {data &&            
                <div className='
                    absolute          
                    w-full
                    max-h-58
                    overflow-y-scroll                   
                    bg-background
                    rounded-md
                    md:rounded-xl
                    p-3 
                    border-3
                    border-primary/60
                    flex 
                    flex-col 
                    gap-2
                    scrollbar-show
                '>
                    {
                        data.results.map((item, idx)=>{
                            const mediaType = item.media_type
                            switch(mediaType){
                                case 'movie': return(
                                    <Link key={idx} to={`/films/${item.id}`} className='w-full flex justify-between'>
                                        <p>{item.title}{item.release_date && `(${item.release_date.substring(0,4)})`}</p>                           
                                        <p>Film</p>
                                    </Link>
                                )
                                case 'person': return(
                                    <Link key={idx} to={`/people/${item.id}`} state={{from: location.pathname}} className='w-full flex justify-between'>
                                        <p>{item.name}</p>
                                        <p>Department: {item.known_for_department}</p>
                                    </Link>
                                )
                        }
                    })}
                </div>
            }       
        </form>
     
    );
}

export default SearchFilm;