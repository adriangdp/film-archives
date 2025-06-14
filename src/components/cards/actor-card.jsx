import { Link, useLocation } from 'react-router-dom'
import { pathImageOriginal } from '../../api/apiRoutes'
import photoPlaceholder from '@assets/missing_photo.webp'

const ActorCard = ({data:actor}) =>{

    const {pathname} = useLocation()

    return(
        <Link 
            to={`/people/${actor.id}`}
            state={{from:pathname}}
            className='
                h-fit 
                w-28
                md:w-40
                lg:w-[12em]
                mx-4
                md:mx-1      
                content-end
                scroll-smooth
                cursor-pointer
                snap-center         
                flex-none
                no-underline
                text-inherit
                hover:underline
                decoration-seat-number
        '>
            {
                actor.profile_path != null ?
                <img className='
                    rounded-md 
                    aspect-poster'                
                    src={`${pathImageOriginal}${actor.profile_path}`}
                    alt={`A picture of ${actor.name}`}
                />
                        
            
                :
                <img className='rounded-md bg-spotlight-blue aspect-poster' src={photoPlaceholder} alt='A placeholder for a missing picture of a person'/>
            }
            
            <p className='mt-1 font-headers text-lg/5 text-seat-number'>{actor.name}</p>
            <p className='text-sm'>{actor.character}</p>
        </Link>
    )
}

export default ActorCard