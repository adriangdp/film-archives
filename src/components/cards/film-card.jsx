import { useNavigate,useLocation } from 'react-router-dom'
import { pathImageOriginal } from '../../api/apiRoutes'
import { useCredentials } from '../../stores/authStore';
import Score from '../ui/score.component';


const FilmCard = ({data:film, children}) =>{

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {user} = useCredentials();
    return(
        <div className='
            group
            mx-[12.5vw]  
            md:mx-0
            mt-5
            snap-center   
            w-[75vw]
            md:w-[18em]     
            h-fit             
            cursor-pointer     
            flex-none
            relative
            overflow-y-visible
        '>  
            <Score score={film.vote_average} className='translate-x-10/12 -translate-y-5 lg:-translate-y-4 '></Score>
            {children}
            <div onClick={() => {
                navigate(
                    `/films/${film.id}`,
                    {
                        state:{from: pathname}
                    }
                )}}
                className='
                    flex
                    flex-col                
                '
            >                     
                    <img 
                        src={pathImageOriginal+film.poster_path}
                        className='                            
                            aspect-poster
                            bg-cover
                            bg-center
                            bg-no-repeat
                            rounded-lg
                            object-cover
                            border-3
                            border-transparent
                            group-hover:border-seat-number
                            '
                            title={`${film.title} film poster`}
                    />
                
            </div>
                <p className=' 
                    mt-3                                                                 
                    text-3xl
                    lg:text-4xl 
                    font-headers                                    
                '>
                    {film.title}
                </p>
        </div>      
    )
}

export default FilmCard