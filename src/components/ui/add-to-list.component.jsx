import { useState } from 'react'
import { useGetUserLists } from '../../api/apiLists';
import { useCredentials } from '../../stores/authStore';

import ListFilmController from './list-film-controller,component';

import ListIcon from "@assets/list-24px.svg"

const AddToList = ({film,positioning}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const {user, getValidSession} = useCredentials();

    const {data, isLoading, isError} = useGetUserLists(user?.id,getValidSession()?.session_id,1,isOpen);

    if(data && getValidSession()?.session_id){
        return(
            
            <div className={`my-2 flex flex-col items-end overflow-visible w-8 h-8 ${positioning}`}>
                <button onClick={()=>{setIsOpen(!isOpen)}}
                    className='w-full h-full p-1 rounded-full flex place-content-center-safe'>
                        <img src={ListIcon} />
                </button>
                <div className={`relative top-0 py-2 bg-accent-2 rounded-xl text-sm ${isOpen? "block":"hidden"}`}>
                    <ul className='flex flex-col gap-2'>
                    {
                        data.results.map((l,i) =>
                            <li key={i} className='px-3 min-w-fit text-nowrap'>
                                <ListFilmController film={film} list={l}/>
                            </li>
                                                            
                        )
                    }
                    </ul>
                </div>                
            </div>              
                   
        );
    }
    return(<></>)

    
}

export default AddToList