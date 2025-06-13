import { useQueryClient } from '@tanstack/react-query';

import { useCredentials } from '../../stores/authStore';
import { deleteList } from '../../api/apiLists';
import deleteIcon from '@assets/delete-24px.svg'

const DeleteList = ({list,handleRefetch}) =>{
    const queryClient = useQueryClient()
    const {getValidSession} = useCredentials()

    const handleDelete = async() =>{
        await deleteList(getValidSession()?.session_id,list.id)
        handleRefetch()
    }
    
    return(
        <button className='absolute bottom-1 right-1 w-8 h-8 p-1 rounded-full flex place-content-center-safe'
            onClick={handleDelete}
        >
                <img src={deleteIcon} />
        </button>
    );
}

export default DeleteList