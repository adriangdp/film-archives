import { useCredentials } from '../stores/authStore';
import UserCollections from '../components/user-lists/user-collections.component';


const UserLists = () =>{

    const { user } = useCredentials()

    return(
        <div className='
        min-h-screen
        px-4
        mt-12
        md:mx-auto
        md:my-12
        lg:my-18
        md:w-11/12
        lg:w-10/12
        '>
         
            {
                !user ?
                <h3 className='text-4xl lg:text-5xl'> Please, log in your TMDB account</h3>
                :
                
                <div>
                    <h2 className='text-4xl lg:text-5xl'>Your collections</h2>         
                    <UserCollections />
                </div>
                
            }

        </div>   
    );
    
   
}

export default UserLists