import { useState,useEffect } from 'react';
import { useMultiSearch } from '../../api/apiSearch';
import { Link } from 'react-router-dom';

const SearchFilm = () =>{

    const[page, setPage] = useState('1')
    const[query, setQuery] = useState('')
    const[input, setInput] = useState('')
    const {data, isLoading, error} = useMultiSearch(query, page)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setQuery(input)
            setPage(1)
        }, 500)
    })

    return(
        <div className='
            w-full
            lg:w-3/4
            lg:mx-auto
            my-2
            relative
        '>
            <input 
                onChange ={(e)=>{setInput(e.target.value)}}
                className='
                    w-full
                    h-10
                    p-3
                    bg-bg-dark
                    outline-seat-number/60
                    outline-3
                    text-entry-faded
                    rounded-md
                    md:rounded-xl
            '>
            
            </input>

            
            {data &&            
                <div className='
                    absolute          
                    w-full
                    max-h-58
                    overflow-y-scroll                   
                    bg-bg-dark
                    rounded-md
                    md:rounded-xl
                    z-20 
                    p-3 
                    border-3
                    border-seat-number/60
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
                                    <Link to={`/films/${item.id}`} className='w-full flex justify-between'>
                                        <p>{item.title} {item.release_date && `(${item.release_date.substring(0,4)})`}</p>                           
                                        <p className='text-entry-faded'>Film</p>
                                    </Link>
                                )
                                case 'person': return(
                                    <Link to={`/people/${item.id}`} state={{from: location.pathname}} className='w-full flex justify-between'>
                                        <p>{item.name}</p>
                                        <p className='text-entry-faded'>Department: {item.known_for_department}</p>
                                    </Link>
                                )
                        }
                    })}
                </div>
            }       
        </div>
     
    );
}

export default SearchFilm;