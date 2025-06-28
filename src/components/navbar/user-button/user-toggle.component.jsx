import { useEffect, useState } from 'react'
import { getOptions, deleteSessionId } from '@api/apiOptions'
import { uriRequestToken, uriNewAuth, uriDeleteSession, uriAuth } from '@api/apiRoutes'
import { useCredentials } from '@stores/authStore'

import LoginButton from './login-button.component'
import UserImage from './user-image.component'

import menuButton from '@assets/menu-24px.svg'


const UserToggle = () =>{
    
    const[open,setOpen] = useState(false)
    const{getValidSession, clearSession, user, setUser} = useCredentials() 

    const handleToken = async() =>{
        const redirect= encodeURIComponent(`${window.location.origin}/redirect`)
        const response = fetch(uriRequestToken, getOptions)
        .then(data=>data.json())
        .then(token => {window.location.href = `${uriAuth}${token.request_token}?redirect_to=${redirect}`})
        .catch(err=>console.error(`Error while fetching token: ${err}`)) 
    }

    const handleLogOut = async() =>{
        fetch(uriDeleteSession,deleteSessionId(getValidSession().session_id))
        clearSession();
    }

    const isUserSession = () =>{
        return getValidSession() != null && getValidSession().success && user != null && user.username
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

    return(
        <div className='grow-0 relative w-3/12 md:w-2/12 lg:w-18 h-full lg:mr-[5px] overflow-visible z-8'>
            <button 
                className='w-full h-full py-2 text-secondary bg-transparent text-primary-1 rounded-none flex justify-center ' 
                onClick={()=>setOpen(!open)}
            >
                {
                    !isUserSession() ? 
                    
                        open ? <img src={menuButton} className='transition-transform rotate-[-90deg]'/>:<img src={menuButton} className='rotate-[0deg]'/>
                    :
                    <UserImage user={user} includeUsername={false}/>
                    
                }            

            </button>
            { open && 
                <div className='absolute right-0 lg:-right-[5px] bg-primary min-w-40 w-fit py-0 px-5 flex flex-col items-center'>
                    
                    {
                        isUserSession() &&
                        <div className='px-3 py-3 w-full border-b-1 border-t-1 border-secondary text-center '>
                            <p className='text-secondary'>{user.username}</p>
                        </div>
                    }
                    <div className='px-3 py-3 w-full text-center'>
                        <LoginButton isUserSession={isUserSession} handleToken={handleToken} handleLogOut={handleLogOut} />
                    </div>

                </div>
            }
        </div>
       
    )
}

export default UserToggle