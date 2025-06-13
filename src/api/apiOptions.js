export const accessToken= import.meta.env.VITE_TMDB_TOKEN

export const getOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
    }
}

export const deleteOptions = {
    method: 'DELETE',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
    }
}

export const requestSessionIdOptions = (token) => {

    return {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type':'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({request_token: token})
    }
}

export const deleteSessionId = (sessionId) =>{
    return {
        method: 'DELETE',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,       
        },
        body: JSON.stringify({session_id: sessionId})
      };
}

export const postToListOptions = (filmId) => {

    return {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type':'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({media_id: filmId})
    }
}

export const postCreateListOptions = (listName, brief, listLanguage) => {

    return {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type':'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({name:listName,description:brief,language:listLanguage})
    }
}
