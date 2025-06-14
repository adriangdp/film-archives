import { 
    uriUserLists,
    uriListDetails, 
    uriAddToList,
    uriCheckItemList,
    uriRemoveFromList,
    uriList, 
    uriDeleteList 
} from './apiRoutes'
import { getOptions, deleteOptions ,postToListOptions,postCreateListOptions } from './apiOptions'
import { useQuery } from '@tanstack/react-query'

//#region Func & Fetch

//Crear lista
export const createList = async(sessionId, nameList, brief='', listLanguage='en') =>{
    
    try{
        if(!sessionId || sessionId === null) throw new Error('Auth error')
        const response = await fetch(`${uriList}?session_id=${sessionId}`,postCreateListOptions(nameList,brief,listLanguage))
        if(!response.ok) throw new Error(response.status)
        return await response.json()
    }
    catch(error){
        console.error('Error while creating a list',error)
        return null;
    }
}

//Eliminar lista
export const deleteList = async(sessionId, listId) =>{

    try{
        if(!sessionId || sessionId === null) throw new Error('Auth error')
        const response = await fetch(uriDeleteList(sessionId,listId), deleteOptions)
        if(!response.ok) throw new Error(response.status)
        return await response.json()
    }
    catch(error){
        console.error('Error while deleting a list',error)
        return null;
    }
}

//Recibir listas de usuario

const fetchLists = async(userId, validSession, page) =>{
    try{
        const response = await fetch(uriUserLists(userId,validSession,page),getOptions)
        if(!response.ok) throw new Error('Error while fetching lists',response.status)   
        return await response.json()
    }catch(err){
        return console.log(err)
    }    
}

//Detalles de una lista

const fetchListDetails = async(listId, page)=>{
    try{
        const response = await fetch(uriListDetails(listId,page), getOptions)
        if(!response.ok) throw new Error('Error while fetching list details',response.status)
        return await response.json()  
    }catch(err){
        return console.log(err)
    }
}

//Añadir a lista

export const addToUserList = async(filmId, sessionId, listId) =>{

    const response = await fetch(
        uriAddToList(sessionId,listId),
        postToListOptions(filmId)
    )

    if(!response.ok) {
        throw new Error ('Error while posting: Could not add to list')
        return false
    }
    return true
}

//Añadir de lista
export const removeFromUserList = async(filmId, sessionId, listId) =>{
    console.log(`Film_id:${filmId},sessionId:${sessionId},listId:${listId}`)
    const response = await fetch(
        uriRemoveFromList(sessionId,listId),
        postToListOptions(filmId)
    )

    if(!response.ok) {
        throw new Error ('Error while posting: Could not remove from list')
        return false
    }
    return true
}

// Comprobar si la película está en la lista
/*NOTA: En caso de error, devuelve TRUE para bloquear 
la posibilidad de añadir a la lista*/

export const isInList = async(filmId,listId) =>{
    const response = await fetch(uriCheckItemList(listId,filmId),getOptions)
    if(!response.ok) {
        throw new Error('Error while checking if film' + filmId + 'is in list:' + listId)
        return true
    }
    const json = await response.json()
    return json.item_present

}
//#endregion

//#region Hooks


//Recibir listas de usuario

export const useGetUserLists = (userId, validSession = null,page = '1', open = false) =>{
    return useQuery(
        {
            queryKey:['userLists',userId,validSession,page],
            queryFn: ({queryKey})=>fetchLists(queryKey[1],queryKey[2],queryKey[3]),
            enabled: open,
        }
    )
}


//Detalles de una lista

export const useGetListDetails = (listId, page='1') =>{
    return useQuery(
        {
            queryKey:['listDetails', listId, page],
            queryFn:({queryKey})=>fetchListDetails(queryKey[1],queryKey[2])
        }
    )
}

export const useAddToList = (filmId, listId, sessionId) =>{
    return useQuery(
        {
            queryKey:['Add To List', filmId, listId, sessionId],
            queryFn:({queryKey})=>AddToUserList(queryKey[1],queryKey[2],queryKey[3])
        }
    )
}
//#endregion