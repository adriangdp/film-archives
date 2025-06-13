const Score = ({score, className}) =>{

    return(
            <div className={`overflow-visible h-0 w-full ${className}`}>
                <p className='
                    text-center 
                    text-xl
                    bg-seat-number
                    rounded-full
                    text-velvet-sofa
                    font-bold
                    content-center                
                    aspect-square
                    w-15
                    h-15
                    p-2
                '>
                    {(score*10).toFixed(1)}            
                </p>
            </div>
            

    )
}

export default Score