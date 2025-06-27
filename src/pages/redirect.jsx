import { useEffect, useRef } from 'react'
import { uriNewAuth } from '../api/apiRoutes'
import { useCredentials } from '../stores/authStore'
import { requestSessionIdOptions } from '../api/apiOptions'
import { useNavigate, useSearchParams } from 'react-router-dom'


const Redirect = () =>{

    const [searchParams] = useSearchParams()
    const token = searchParams.get('request_token')
    const {sessionId, setSessionId} = useCredentials();
    const navigate = useNavigate(useNavigate);

    //Avoids errors when re-rendering happens while waiting for session ID
    const hasFetched = useRef(false)

useEffect(()=>{

    if(!token || hasFetched.current){
        console.error('didnt find token')
        navigate('/')
    }
    hasFetched.current = true

    const fetchSessionID = async() =>{      
 
        const response = await fetch(uriNewAuth,requestSessionIdOptions(token))
        const sessionData = await response.json()
        await setSessionId(sessionData)          
        window.location.href = window.location.origin
        }

    fetchSessionID();
},[])
}

export default Redirect