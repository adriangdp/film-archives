import { useNavigate,useLocation } from 'react-router-dom'
import { pathImageOriginal } from '../../api/apiRoutes'
import { useCredentials } from '../../stores/authStore';
import Score from '../ui/score.component';

import posterPlaceholder from '@assets/missing_poster.webp'


const FilmCard = ({data:film, children}) =>{

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {user} = useCredentials();
    return(
        <div className='
            group 
            md:mx-0
            mt-6
            snap-center   
            w-[75vw]
            md:w-[18em]    
            h-fit             
            cursor-pointer     
            flex-none
            relative
            overflow-visible
            z-2
        '> 
            <div className='absolute right-1 -top-6 lg:-top-2 w-0 h-full lg:-translate-y-4 flex flex-col items-center overflow-visible z-20'>
                <Score score={film.vote_average}></Score>
                {children}
            </div>           
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
                        src={film.poster_path === null || film.poster_path.length < 1 ? posterPlaceholder : pathImageOriginal+film.poster_path}
                        className='                            
                            aspect-poster
                            bg-cover
                            bg-center
                            bg-no-repeat
                            rounded-lg
                            object-cover
                            transition-transform
                            group-hover:scale-105
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