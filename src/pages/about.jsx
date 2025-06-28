const About = () =>{
    return(
        <div className=' px-4
                mt-12
                md:mx-auto
                md:my-12
                lg:my-18
                md:w-11/12
                lg:w-10/12'>
            <h2 className='                             
                my-3
                text-4xl
                md:text-4xl
                lg:text-5xl                    
                text-seat-number
            '>About</h2>
            <p className='my-3'>Film Archives is designed to simplify film collection creation and manangement. Do you want to create a themed collection?
                    Maybe another one with films suggested by a friend? Film Archives tries to simplify the work and focuses exclusively on:
            </p>
            <ul className='my-3 list-disc pl-5'>
                <li><b>Discovery and Search</b> of films, shows and the people in their cast and crew.</li>
                <li><b>Collection manangement</b> using TMDB lists effortlessly.</li>
                <li><b>Quick Access</b> to basic information to help you decide if you want to add the film to the collection.</li>
            </ul>
            <p>
                Uses <a href='https://www.themoviedb.org/'>TMDB</a>'s API, built with with the effort of an open community of cinephiles.
            </p>
            <h3 className='my-3 text-3xl mt-10'>TMDB Account</h3>
            <p className='my-3'>Collections usage requires a <a href='https://www.themoviedb.org/'>TMDB</a> account. The application will 
                request third-party access to read and modify user data. 
            </p>
            <h3 className='my-3 text-3xl mt-10'>Security</h3>
            <p>
                Film Archives uses localstorage to store your sessionID and user data in order to work.
                This data is stored exclusively in your browser (and nowhere else!), and it does it through a extremely
                simple obfuscation proccess to protect it from prying eyes.
            </p>
            <p className='my-3'>
                <a href='https://www.themoviedb.org/'>TMDB</a> SessionID gives access to some of your user 
                information, and allows certain actions such as adding or removing films and TV Shows from your collections. For that reason, every 4 hours the application logs out and removes any data locally stored.
            </p>

            <h3 className='my-3 text-3xl mt-10'>Attribution</h3>
            <p className='my-3'>
                Film Archives uses the TMDB API, but is not endorsed or certified by <a href='https://www.themoviedb.org/'>TMDB</a>.
                All film data and images are sourced from TMDB.
            </p> 
        </div>
    );
}

export default About