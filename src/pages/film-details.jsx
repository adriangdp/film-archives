import { useParams,useNavigate } from 'react-router-dom';
import { useFetchFilmData } from '../api/apiFilmData';
import { pathImageOriginal } from '../api/apiRoutes';
import GoBack from '../components/ui/go-back.component';

import Score from '../components/ui/score.component';
import CardListDisplay from '../components/cards/card-list-display';
import ActorCard from '../components/cards/actor-card';


const FilmDetails = () =>{
    const navigate = useNavigate()
    let params = useParams()
    const{data, isLoading, error} = useFetchFilmData(params.filmId,'videos,credits,watch/providers')

    if(error){
        navigate('/404')
    }


    if(isLoading){
        return(
            <>
                <h1 className='text-5xl'>LOADING</h1>
            </>
        );
    }

    if(data){
        return(
            <div className='                
                w-full
                lg:w-10/12    
                mt-12
                md:mx-auto
                md:my-12
                lg:my-18
                flex
                flex-col
                flex-wrap
                md:overflow-x-visible

            '>                
                <GoBack />
                <div className=' 
                    w-full
                    mt-7
                    px-4
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    lg:items-start
                    md:justify-start
                    md:gap-8
                '>
                    <img 
                        src={`${pathImageOriginal}${data.poster_path}`}
                        alt={`${data.title} film poster`}
                        className='
                            rounded-md
                            md:rounded-xl
                            w-full
                            md:w-1/2
                            lg:w-3/12
                            md:mx-auto
                            lg:mx-0                            
                            h-auto                           
                            aspect-poster
                            
                    '/>
                    
                    <div className='                    
                        mx-auto
                        md:mx-0
                        lg:mt-0
                        mt-6
                        md:mt-0                                        
                    '>
                        {/* Title + Score*/}
                        <div className='flex justify-between md:justify-start md:gap-8 items-center'>
                            <div>
                                <h1 className='
                                    text-5xl                   
                                '>{data.title}</h1>
                                {data.title !== data.original_title ?
                                    <h1 className='
                                        text-2xl
                                        text-seat-number                  
                                    '>{data.original_title}</h1>
                                :
                                    <></>
                                }
                            </div>
                           
                            <Score score={data.vote_average}/> 
                        </div>

                        {/* Director and writerS*/}

                        <div className='md:mx-0 my-8 flex flex-wrap gap-y-3 md:gap-x-6'>
                            {data.credits?.crew?.filter(crew => (crew.job == 'Director'))?.map((p,i)=> (
                            <div key={i} className='w-1/2 md:w-fit'>
                                                        
                                <p className='
                                        font-headers
                                        text-xl
                                '>
                                    {p.job}
                                </p>
                                <p className='
                                    text-seat-number
                                '>{p.name}</p>
                            </div>
                            )
                        )}
                        {data.credits?.crew?.filter(crew => (crew.job == 'Writer' || crew.job== 'Screenplay'))?.map((p,i)=> (
                            <div key={i} className='w-1/2 md:w-fit'>
                                                        
                                <p className='
                                    font-headers
                                    text-xl
                                '>{p.job}</p>
                                <p className='
                                    text-seat-number
                                '>{p.name}</p>
                            </div>
                            )
                        )}
                        </div>                    
                        {/* Overview */}
                        <div className='my-8'>
                            <h3 className='text-seat-number text-3xl'>Overview</h3>
                            <p className='my-3'>{data.overview}</p>
                        </div>
                        {/* Production */}
                        <div className='mt-8'>
                            <h3 className='text-seat-number text-3xl'>Production</h3>
                            <div className='flex flex-col flex-wrap'>
                                
                                <div className='my-2 mr-5'>
                                    <p className='text-seat-number inline mr-2'>Country:</p>
                                    {
                                        data.origin_country?.map((c,i)=>
                                            <p key={i} className='inline mr-2'>{c}</p>
                                        )
                                    }
                                </div>
                                <div className='my-2 flex flex-wrap justify-start'>
                                    <p className=' mr-2 inline text-seat-number'>Spoken languages:</p>
                                    {
                                        data.spoken_languages?.map((l,i)=>
                                            <p key={i} className='inline mr-2'>{l.english_name}{i+1!==data.spoken_languages.length && "," || "."}</p>
                                        )
                                    }
                                </div>
                                <div className='my-2'>
                                    <p className='text-seat-number inline'>Release date:</p>
                                    <p className='inline mx-3'>{data.release_date && data.release_date.split('-').reverse().join('-')}</p>
                                </div>
                            { 
                                data.revenue != '0' ?
                                <div className='my-2'>
                                    <p className='text-seat-number inline'>Revenue:</p>
                                    <p className='inline mx-3'>{Intl.NumberFormat().format(Number(data.revenue))} $</p>
                                </div>
                                :
                                <></>
                                
                                }
                                { 
                                data.budget != '0' &&
                                <div className='my-2'>
                                    <p className='text-seat-number inline'>Budget:</p>
                                    <p className='inline mx-3'>{Intl.NumberFormat().format(Number(data.budget))} $</p>
                                </div>                    
                                }
                                <div className='my-2'>
                                    <p className='text-seat-number inline'>Run time:</p>
                                    <p className='inline mx-3'>{data.runtime && `${(data.runtime/60).toFixed()}h ${data.runtime%60}m`}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* Actors*/}
                <div className='w-full my-10 md:overflow-x-visible'>
                    <CardListDisplay data={data.credits.cast} component={ActorCard}> 
                        {
                            data.credits?.cast?.map((a,i) =>
                                <ActorCard data={a} key={i} />
                            )
                        }

                    </CardListDisplay>
                </div>
                    
                

                
                
               { /*<div>
                    {                        
                            data["watch/providers"]?.results?.ES?.buy.map((it,i)=> (<p className='text-velvet-sofa'>{it.provider_name}</p>))

                    }
                </div>*/}
                {/*<div>
                    {
                        data.videos?.results?.map((it,i) =>
                            <div key={i}>
                                <p>
                                    {it.name}
                                </p>
                                <iframe className='
                                    w-full
                                    md:max-w-1/3                                    
                                    aspect-video
                                ' src={`https://www.youtube.com/embed/${it.key}`}></iframe>
                            </div>
                        )
                    }
                </div>*/}
               
            </div>
        );
    }
    
}

export default FilmDetails;