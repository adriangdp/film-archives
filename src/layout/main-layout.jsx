import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { useCredentials } from '../stores/authStore';

import LoginButton from '../components/login-button.component';

const MainLayout = ({children}) =>{

    const[dark,darkmode] = useState(false)
    const{user} = useCredentials();

    return(
        <div className='
        bg-bg-dark 
        min-h-screen 
        w-full
        flex 
        flex-col
        justify-between
        '>
            <header className={`
                h-14
                px-0
                md:px-4                
                bg-velvet-sofa
                ${dark? 'dark':''}
                flex
                flex-grow-0
                items-center
                justify-between
                md:justify-start
                gap-3
                md:gap-6
                text-entry-faded        
                `                
            }>   
                <Link to='/' 
                    className='
                        w-1/3
                        md:w-fit
                        py-2 
                        px-2
                        text-center
                        md:text-start
                        hover:decoration-seat-number 
                        hover:decoration-2 
                        hover:underline 
                        hover:underline-offset-6
                '>
                    Home
                </Link>         
                { 
                    user !== null &&
                    <Link to='/user/lists' className='py-2 px-2 w-1/3 text-center sm:text-start md:w-fit hover:decoration-seat-number hover:decoration-2 hover:underline hover:underline-offset-6'>Collections</Link> 
                }
                <Link to='/about' 
                    className='
                        py-2 
                        px-2
                        w-1/3
                        md:w-fit
                        text-center
                        md:text-start
                        hover:decoration-seat-number 
                        hover:decoration-2 
                        hover:underline 
                        hover:underline-offset-6
                '>
                    About
                </Link>           
                <LoginButton />

            </header>
            <main className='  
                w-full
                text-entry-faded 
                flex-grow-1   
            '> 
                {children || <Outlet />}
            </main>
            <footer className='h-fit mt-6 px-4 md:px-12 py-4 gap-y-5 bg-seat-number flex-grow-0 flex flex-wrap justify-between '>
                
                <div className='flex justify-between flex-grow-1 md:w-1/2 gap-4 lg:gap-24'>
                    <ul className='flex-grow-0 w-1/2"'>
                        <li>
                            <Link to='/' className='underline underline-offset-4 decoration-1 hover:font-bold hover:decoration-2'>Home</Link> 
                        </li>
                        <li>{ 
                            user !== null &&
                            <Link to='/user/lists' className='underline underline-offset-4 decoration-1 hover:font-bold hover:decoration-2'>Collections</Link> 
                        }</li>
                        <li>
                            <Link to='/about' className='underline underline-offset-4 decoration-1 hover:font-bold hover:decoration-2'>About</Link> 
                        </li>
                    </ul>
                    <p className='text-end md:text-start w-1/2'>
                        2025 Adrián Gallardo
                    </p>
                </div>
                <p className='text-start text-sm md:text-end md:w-1/2'>This product uses the{' '}
                    <Link className='underline underline-offset-4 decoration-1 hover:font-bold hover:decoration-2' to='https://www.themoviedb.org'>
                    TMDB
                    </Link> API but is not endorsed or certified by{' '}
                    <Link className='underline underline-offset-4 decoration-1 hover:font-bold hover:decoration-2' to='https://www.themoviedb.org'>
                    TMDB
                    </Link>.
                </p>
                
            </footer>
        </div>        
    );
}

export default MainLayout;
