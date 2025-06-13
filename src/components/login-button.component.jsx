import { useEffect } from 'react'
import { getOptions, deleteSessionId } from '../api/apiOptions'
import { uriRequestToken, uriNewAuth, uriDeleteSession, uriAuth } from '../api/apiRoutes'
import { useCredentials } from '../stores/authStore'




const LoginButton = () =>{

    const{getValidSession, clearSession, user, setUser} = useCredentials() 
    const handleToken = async() =>{
        const redirect= encodeURIComponent(`${window.location.origin}/redirect`)
        const response = fetch(uriRequestToken, getOptions)
        .then(data=>data.json())
        .then(token => {window.location.href = `${uriAuth}${token.request_token}?redirect_to=${redirect}`})
        .catch(err=>console.log(`Error while fetching token: ${err}`)) 
    }

    const handleLogOut = async() =>{
        fetch(uriDeleteSession,deleteSessionId(getValidSession().session_id))
        clearSession();
    }
    useEffect(()=>{

        const validSession = getValidSession()

        const getUserDetes = async() =>{
            
            const userDetes = fetch(`https://api.themoviedb.org/3/account?session_id=${validSession.session_id}`,getOptions)
            .then(data=>data.json())
            .then(json =>setUser(json))
        }
        
        

        if(validSession!= null && validSession.success && user == null) {
            getUserDetes()
        }

    },[user])



    if(getValidSession() != null && getValidSession().success){

        if(user != null && user.username){
            return(
                <button 
                className='w-fit h-full bg-seat-number hover:bg-seat-number/80 text-velvet-sofa p-2 rounded-none' 
                onClick={handleLogOut}
            >
                Log Out {user.username}

            </button>
            );
        }
        return(
            
            <button 
                className='w-fit h-full bg-seat-number text-velvet-sofa p-2 rounded-none' 
                onClick={handleLogOut}
            >
                Log out

            </button>
        );
        
    }
    else{
        return(
            <button 
                className='w-fit h-full bg-seat-number text-velvet-sofa px-4 rounded-none' 
                onClick={handleToken}
            >
                Log in TMDB

            </button>  
        );          
    }
}

export default LoginButton;