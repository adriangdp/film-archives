import { addToUserList } from '../../api/apiLists'
import { useCredentials } from '../../stores/authStore'

const ListAdderButton = ( {addFilm, list, handleControl}) =>{

    const {getValidSession} = useCredentials();



    const handleAddToList = async() =>{
        await addToUserList(addFilm.id,getValidSession()?.session_id,list.id) 
        handleControl(true) 
    }

    return(
        <button 
            className=''                                        
            onClick={()=>{handleAddToList()
        }}>

            {list.name} -- Add        
            
        </button>
    )
}

export default ListAdderButton