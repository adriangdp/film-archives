import { useEffect } from 'react'
import { getOptions, deleteSessionId } from '@api/apiOptions'
import { uriRequestToken, uriNewAuth, uriDeleteSession, uriAuth } from '@api/apiRoutes'
import { useCredentials } from '@stores/authStore'




const LoginButton = ({isUserSession,handleToken, handleLogOut}) =>{

    return(
        <div className='text-nowrap'>
            {isUserSession()?
                <button onClick={handleLogOut} className='bg-transparent text-accent-1'>Log Out</button>
                :
                <button onClick={handleToken} className='bg-transparent text-accent-1'>Log In</button>
            }
        </div>
    )
}

export default LoginButton;