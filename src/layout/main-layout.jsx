import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { useCredentials } from '../stores/authStore';

import NavBar from '../components/navbar/navbar.component';

const MainLayout = ({children}) =>{

    const{user} = useCredentials();

    return(
        <div className='
        min-h-screen 
        w-full
        flex 
        flex-col
        justify-between
        '>
            <header>
                <NavBar user={user} />
            </header>
            <main className='  
                w-full
                flex-grow-1   
            '> 
                {children || <Outlet />}
            </main>
            <footer className='h-fit mt-6 px-4 md:px-12 py-4 gap-y-5 bg-secondary flex-grow-0 flex flex-wrap justify-between '>
                
                <div className='flex justify-between flex-grow-1 md:w-1/2 gap-4 lg:gap-24'>
                    <ul className='flex-grow-0 w-1/2"'>
                        <li>
                            <Link to='/' className=''>Home</Link> 
                        </li>
                        <li>{ 
                            user !== null &&
                            <Link to='/user/lists' className=''>Collections</Link> 
                        }</li>
                        <li>
                            <Link to='/about' className=''>About</Link> 
                        </li>
                    </ul>
                    <p className='text-end md:text-start w-1/2'>
                        2025 Adrián Gallardo
                    </p>
                </div>
                <p className='text-start text-sm md:text-end md:w-1/2'>This product uses the{' '}
                    <Link className='' to='https://www.themoviedb.org'>
                    TMDB
                    </Link> API but is not endorsed or certified by{' '}
                    <Link className='' to='https://www.themoviedb.org'>
                    TMDB
                    </Link>.
                </p>                
            </footer>
        </div>        
    );
}

export default MainLayout;
