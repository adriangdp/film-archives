import { useState, useEffect } from 'react'
import { isInList,addToUserList } from '../../api/apiLists'
import { useCredentials } from '../../stores/authStore'

import ListAdderButton from './list-adder-button'
import ListRemoverButton from './list-remover-button'
import { useQueryClient } from '@tanstack/react-query'

const ListFilmController = ({film, list}) =>{

    const queryClient = useQueryClient();
    const {getValidSession} = useCredentials()
    const [isAdded, setIsAdded] = useState(null)

    const handleControl= () =>{
        queryClient.refetchQueries(['listDetails', list.id])
    }

    useEffect(()=>{

        const setState = async() =>{
            setIsAdded(
                await isInList(film.id, list.id)
            )
        }

        setState()
        
    },[])

    
    return( 
        
        isAdded !== null?
            isAdded ?
            (<ListRemoverButton removeFilm={film} list={list} handleControl={setIsAdded}/>)
            :
            (<ListAdderButton addFilm={film} list={list} handleControl={setIsAdded}/>)
        :
        <p>{list.name}</p>       
    )
   
}

export default ListFilmController