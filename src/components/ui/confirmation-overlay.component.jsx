

const ConfirmationOverlay = ({title, children}) =>{
    return(
        <div className='fixed top-0 left-0 w-screen h-screen bg-background/90 flex justify-center items-center z-10'>
            <div className='
                w-full 
                h-fit 
                md:w-1/2 
                md:h-fit
                p-10 
                border-3
              border-accent-2
              bg-secondary
                flex 
                flex-col 
                justify-center 
                items-center
                rounded-2xl
            '>
                <h3 className='text-3xl md:text-5xl'>{title}</h3>
                    {children}
                
            </div>
        </div>
    );
}

export default ConfirmationOverlay