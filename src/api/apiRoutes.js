export const uri = 'https://api.themoviedb.org/3/'

export const uriAuth = 'https://www.themoviedb.org/authenticate/'
export const uriRequestToken = uri+'authentication/token/new'
export const uriNewAuth = uri+'authentication/session/new'
export const uriDeleteSession = uri+'authentication/session'

export const uriPopularList= uri+'movie/popular'
export const uriRatedList = uri+'movie/top_rated'

export const filmDetails = uri+'movie'
export const personDetails = uri+'person'

export const uriList = uri + 'list'


export const pathImageOriginal = 'https://image.tmdb.org/t/p/original'

export const uriUserLists = (accountId,validSession=null,page='1') =>{

    const session = validSession !== null ? `&session_id=${validSession}` : '' 
    
    return uri+`account/${accountId}/lists?page=${page}${session}`
}

export const uriListDetails = (listId,page='1') => {
    return uriList+`/${listId}?&page=${page}`
}

export const uriAddToList = (sessionId, listId) =>{
    return uriList+`/${listId}/add_item?session_id=${sessionId}`
}

export const uriRemoveFromList = (sessionId, listId) =>{
    return uriList+`/${listId}/remove_item?session_id=${sessionId}`
}

export const uriDeleteList = (sessionId, listId) =>{
    return uriList+`/${listId}?session_id=${sessionId}`
}

export const uriCheckItemList = (listId, filmId) =>{
    return uriList+`/${listId}/item_status?movie_id=${filmId}`
}

export const searchMulti = (query, page='1') =>{
    return uri+`search/multi?query=${query}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
}