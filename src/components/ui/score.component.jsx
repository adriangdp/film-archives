const Score = ({score}) =>{

    const longScore = Math.floor(score*10)
    return(
            <div className={`w-14 h-14 aspect-square bg-primary rounded-full flex items-center justify-center`}>
                <span className='text-3xl text-secondary font-bold tracking-tighter'>
                    {longScore}            
                </span>                
            </div>
    )
}

export default Score