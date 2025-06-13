import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useCredentials } from '../../stores/authStore';
import { getOptions } from '../../api/apiOptions';
import { useGetUserLists } from '../../api/apiLists';

import ListPreview from './list-preview.component';
import CreateList from './create-list.component';



const UserCollections = ()=>{

    const navigate = useNavigate();
    const { user, getValidSession} = useCredentials();
    const{data, isLoading, error} = useGetUserLists(user.id,getValidSession()?.session_id,1,true);
    const queryData = useQueryClient()

    const handleRefetch = () =>{
        
        queryData.refetchQueries(["userLists"])
       
    }
    



    if(isLoading){
        return(
            <h3>LOADING......</h3>
        );
    }
    if(error){
        return(
            <div>
                <h3>Could not fetch lists</h3>
                <p>{error.message}</p>
            </div>            
        );
    }

    if(data)
    {
        return(
            <div className='
                flex 
                w-full 
                h-fit 
                flex-wrap 
                gap-5
                lg:gap-10
                py-5      
            '>
                <CreateList handleRefetch={handleRefetch}/>
                {
                    data.results?.map((list,i) => 
                        <ListPreview key={i} list={list} />
                    )
                }
            </div>
        );
    }
    
}

export default UserCollections;