import { Link } from 'react-router-dom';

const NavBarLink = ({to:uri, children}) =>{
    return(
        <Link to={uri} 
            className='py-2 mx-3 text-center md:text-start hover:decoration-seat-number hover:underline'
        >
            {children}
        </Link>
    );
}

export default NavBarLink