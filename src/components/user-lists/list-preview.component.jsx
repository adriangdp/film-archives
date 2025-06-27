import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';


import DeleteList from './delete-list.component';

const ListPreview = ({list}) =>{
    const queryData = useQueryClient()
    
    const handleRefetch = () =>{
        queryData.refetchQueries(["userLists"])
    }

    return(
        <div className='
                    w-full
                    lg:w-1/6 
                    h-fit
                    lg:min-h-fit
                    lg:h-46
                    relative
                    '

                    >
                        <Link to={`/user/lists/${list.id}`}
                            className='
                            group
                            w-full
                            h-full 
                            p-5
                            lg:p-8          
                            rounded-lg          
                            flex
                            flex-col
                            justify-center
                            items-start                    
                            bg-accent-2               
                            no-underline
                            border-2
                            border-transparent
                        '
                        >
                        
                       
                        <h3 className='
                            text-3xl
                            group-hover:underline
                            
                        '>
                            {list.name}
                        </h3>

                        {
                            list.item_count === 0 && <p>No films yet!</p>
                        }
                        {
                            list.item_count === 1 && <p>1 film</p>
                        }
                        {
                            list.item_count > 1 && <p>{list.item_count} films</p>
                        }

                         </Link>
                        <DeleteList list={list} handleRefetch={handleRefetch}/>
                    </div>
    )
}

export default ListPreview