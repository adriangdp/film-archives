import { removeFromUserList } from '../../api/apiLists'
import { useCredentials } from '../../stores/authStore'
import { useQueryClient } from '@tanstack/react-query';

const ListRemoverButton = ( {removeFilm, list, handleControl=null}) =>{


    const {getValidSession} = useCredentials();

    const handleRemoveFromList = async() =>{
            await removeFromUserList(removeFilm.id,getValidSession()?.session_id,list.id)
            handleControl(false)  
    }

    return(
        <button 
            className='disabled:text-slate-500 disabled:italic'                                        
            onClick={()=>{handleRemoveFromList()
        }}>
           {list.name} -- Remove
        </button>
    )
}

export default ListRemoverButton