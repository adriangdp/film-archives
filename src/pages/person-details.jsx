import { useParams } from 'react-router-dom'
import { useGetPersonData } from '../api/apiPersonData'
import { pathImageOriginal } from '../api/apiRoutes'


import GoBack from '../components/ui/go-back.component'

import photoPlaceholder from '@assets/missing_photo.webp'

const PersonDetails = () =>{

    const {personId} = useParams()
    const {data, isLoading, isError} = useGetPersonData(personId)

    if(isError) {return (<p>Error</p>);}
    if(isLoading) {return (<p>Loading...</p>);}
    if(data) {
        return(
            <div className='
                w-full
                md:w-11/12
                lg:w-10/12    
                mt-12
                md:mx-auto
                md:my-12
                lg:my-18
                flex
                flex-col
                flex-wrap
                items-start
                '>
                <GoBack />
                <div className='w-full mt-7 px-4 md:px-0 flex flex-col md:flex-row items-start gap-3 '>
                    {data.profile_path ? 
                        <img className='
                            rounded-md
                            md:rounded-xl
                            w-full
                            md:w-1/3
                            lg:w-3/12
                            md:mx-auto
                            lg:mx-0                            
                            h-auto
                            flex-grow-0                           
                            aspect-poster' 
                            src={`${pathImageOriginal}/${data.profile_path}`}
                            alt={`A picture of ${data.name}`}
                        />
                        :
                        <img className='
                            rounded-md
                            md:rounded-xl
                            w-1/2
                            md:w-1/3
                            lg:w-3/12
                            mx-auto
                            lg:mx-0                            
                            h-auto
                            flex-grow-0                           
                            aspect-poster' 
                            src={`${photoPlaceholder}`}
                            alt='A placeholder for a missing picture of a person'
                        />

                    }
                    <div className='md:w-2/3 mt-6 md:mt-0 flex flex-col'>
                        <h2 className='text-5xl'>{data.name}</h2>
                        {/* Personal Information*/}

                        <div className='w-full'>
                            <h3>Personal information</h3>
                            <div className='flex flex-col'>
                            <div className=''>
                                    <p className='font-body text-accent-2 inline'>Known for:</p>
                                    <p className='inline mx-3'>{data.known_for_department}</p>
                                </div>
                                <div className=''>
                                    <p className='font-body text-accent-2 inline'>Birthday:</p>
                                    <p className='inline mx-3'>{data.birthday && data.birthday.split('-').reverse().join('-')}</p>
                                </div>
                                {
                                    data.deathday &&
                                    <div className=''>
                                        <p className='font-body text-accent-2 inline'>Death:</p>
                                        <p className='inline mx-3'>{data.deathday && data.deathday.split('-').reverse().join('-')}</p>
                                    </div>
                                }
                                <div className=''>
                                    <p className='font-body text-accent-2 inline'>Place of birth:</p>
                                    <p className='inline mx-3'>{data.place_of_birth}</p>
                                </div>
                            </div>
                        </div>
                        <p className='mt-6'>{data.biography}</p>
                    </div>
                </div>        
            </div>

        
    );}
}

export default PersonDetails