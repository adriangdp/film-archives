const UserImage = ({user, includeUsername=true}) =>{
    return(
        <div className='flex items-center gap-3'>
             <div className='rounded-full bg-accent-2 p-2 w-10 h-10 md:w-12 md:h-12'>
                {
                    user.avatar.tmdb.avatar_path !== null ? 
                    <img src={user.avatar.tmdb.avatar_path} className='w-full h-full rounded-full' />
                    :
                    <p className='w-full h-full flex items-center justify-center text-2xl md:text-3xl'>{user.username.slice(0,1)}</p>
                }
            </div>
            {includeUsername && <p>{user.username}</p>}
        </div>
       
    );
}

export default UserImage