import { useNavigate,useLocation } from 'react-router-dom'
import { pathImageOriginal } from '../../api/apiRoutes'
import Score from '../ui/score.component';

import posterPlaceholder from '@assets/missing_poster.webp'


const FilmCard = ({data, children}) =>{

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {id,vote_average,poster_path,title} = {...data}
    return(
        <button className='plainbtn relative group md:mx-0 mt-6 snap-center w-[75vw] md:w-[18em] h-fit cursor-pointer flex-none overflow-visible'> 
            <div className='z-2 absolute right-1 -top-6 lg:-top-2 w-0 h-full lg:-translate-y-4 flex flex-col items-center overflow-visible'>
                <Score score={vote_average}></Score>
                {children}
            </div>           
            <div onClick={() => {1 
                navigate(
                    `/films/${id}`,
                    {
                        state:{from: pathname}
                    }
                )}}
                className='flex flex-col                
                '
            >                     
                    <img 
                        src={poster_path === null || poster_path.length < 1 ? posterPlaceholder : pathImageOriginal+poster_path}
                        className='aspect-poster bg-cover bg-center bg-no-repeat rounded-lg object-cover transition-transform group-hover:scale-105'
                            title={`${title} film poster`}
                    />
                
            </div>
            <p className='mt-3 text-2xl lg:text-4xl font-headers text-start line-clamp-2'>
                {title}
            </p>
        </button>      
    )
}

export default FilmCard