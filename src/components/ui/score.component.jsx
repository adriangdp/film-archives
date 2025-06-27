const Score = ({score, className}) =>{

    const longScore = Math.floor(score*10)
    return(
            <div className={`
                w-[60px]
                h-[60px]
                aspect-square
                p-2
                bg-primary
                rounded-full
                flex
                items-center
                justify-center
                ${className}`}>
                <p className='
                    text-3xl
                    text-secondary
                    font-bold 
                    tracking-tighter           
                '>
                    {longScore}            
                </p>                
            </div>
            

    )
}

export default Score