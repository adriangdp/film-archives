import { Link } from 'react-router-dom';
import MainLayout from '../layout/main-layout';
const NotFound = () =>{

    return(
        <MainLayout>
                <div className='w-full h-full text-center'>
                    <h2 className='text-seat-number text-[14em] my-2 h-[1.5em]'>404</h2>
                    <em className='text-velvet-sofa text-3xl'> Page Not found </em>
                    <p className='my-7'>Maybe this was removed from the director's cut?</p>
                <Link to='/' className='text-seat-number text-3xl'> Return home </Link>
             </div>
        </MainLayout>
        
    );
}

export default NotFound