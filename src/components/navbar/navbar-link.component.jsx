import { Link } from 'react-router-dom';

const NavBarLink = ({to:uri, children}) =>{
    return(
        <Link to={uri} 
                    className='  
                        py-2                   
                        mx-3
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