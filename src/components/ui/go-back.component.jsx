import chevronLeft from '@assets/chevron-left-24px.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GoBack = () =>{
    const from = useLocation().state?.from || '/';
    const navigate = useNavigate();
    return(
        <Link      
            onClick={
                ()=>{
                    navigate(-1);
                }
            }
            className='w-full'
        >
                <img className='inline' src={chevronLeft}/>
            Go back
        </Link>
    );
}

export default GoBack;