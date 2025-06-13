import { create } from 'zustand';
import {persist} from 'zustand/middleware'
import { obfuscate, deobfuscate } from './obfuscate';
import { useQueryClient } from '@tanstack/react-query';

const sessionLifetime = 5*60*60*1000 // 5 horas

export const useCredentials = create(
    persist(
        (set, get)=>({          
            sessionId:null,
            setSessionId: (newId)=> {
                const sessionObj = {
                    session: newId,
                    timestamp: Date.now()
                }
                set({sessionId:obfuscate(sessionObj)})
            },
            clearSession: ()=>{                
                set(
                    {
                        sessionId: null,
                        user:null
                    }
                )
                useQueryClient().removeQueries();
            }                
            ,
            
            getValidSession: () =>{
                const data = get().sessionId
                if(!data) return null
                const sessionDeof = deobfuscate(data)
                const isExpired = (Date.now() - sessionDeof.timestamp) > sessionLifetime
                if(isExpired){
                    get().clearSession()
                    return null
                }
                return sessionDeof.session
            },
            user: null,
            setUser: (sessionUser)=>set({user:sessionUser}),
            clearUser:()=>set({user:null}),
         }),
        {
            name:'filmfiles-storage',
        }
    )
)




