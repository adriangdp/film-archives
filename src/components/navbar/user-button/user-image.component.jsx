const UserImage = ({user}) =>{
    return(
        <div className='flex items-center gap-3'>
             <div className='rounded-full bg-accent-2 p-2 w-10 h-10 md:w-14 md:h-14'>
                {
                    user.avatar.tmdb.avatar_path !== null ? 
                    <img src={user.avatar.tmdb.avatar_path} className='w-full h-full rounded-full' />
                    :
                    <p className='w-full h-full flex items-center justify-center text-2xl md:text-4xl'>{user.username.slice(0,1)}</p>
                }
            </div>
            <p>{user.username}</p>
        </div>
       
    );
}

export default UserImage