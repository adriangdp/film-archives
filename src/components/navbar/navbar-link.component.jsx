import { Link } from 'react-router-dom';

const NavBarLink = ({to:uri, children}) =>{
    return(
        <Link to={uri} 
                    className='
                        w-1/3
                        md:w-fit
                        py-2 
                        px-2
                        text-center
                        md:text-start
                        decoration-dotted
                        hover:decoration-seat-number 
                        hover:decoration-2 
                        hover:underline 
                        hover:underline-offset-6
                '>
                    {children}
                </Link>
    );
}

export default NavBarLink