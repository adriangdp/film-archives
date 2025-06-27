import { useEffect } from 'react';
import { useCredentials } from '../stores/authStore';

import UserCollections from '../components/user-lists/user-collections.component';
import MostPopular from '../components/most-popular';
import SearchFilm from '../components/search-movies/search-film';
import { Link } from 'react-router-dom';

const IndexPage = () =>{
        const{user} = useCredentials()
       //check if there is no session 
    return(
        <>
            <div className='
                px-4
                mt-12
                md:mx-auto
                md:my-12
                lg:my-18
                md:w-11/12
                lg:w-10/12
                
            '>
                <h2 className='
                    text-xl
                    md:text-4xl
                    lg:text-5xl
                    md:text-center
                '>Explore and find your favourite films</h2>
                <SearchFilm />
            </div>
            <div className='
            mt-6
            md:mt-8
            lg:mt-18
            '>
                <h2 className='
                    md:w-11/12
                    lg:w-10/12
                    px-4
                    lg:px-0
                    md:mx-auto
                    lg:mb-6                  
                    text-4xl
                    md:text-4xl
                    lg:text-5xl                    
                '>
                    Most Popular
                </h2>
                <MostPopular />
            </div>



            {
                user != null?
                    <div className='px-4
                        mt-6
                        md:mx-auto
                        md:my-8
                        lg:my-18
                        md:w-11/12
                        lg:w-10/12
                    '>
                        <h2 className='
                            text-4xl                            
                        '>
                            Your collections
                        </h2>    
                        
                        <UserCollections />
                    </div>
                    
                :
                <div className='px-4
                    my-6
                    md:mx-auto
                    md:my-8
                    lg:my-18
                    md:w-11/12
                    lg:w-10/12
                '>
                    <h2 className='text-4xl'>Are you a film buff?</h2>
                    <p> To see you collections, you need to log in.
                        You can create an <Link to='https://www.themoviedb.org/signup'>account</Link> if you don't already have one.
                    </p>
                </div>
               
            }

        
                     
        </>
    );
}

export default IndexPage;