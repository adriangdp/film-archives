const CardListDisplay = ({children, oneLiner=true}) => {
    return(
        <div className={`
            flex
            ${
                oneLiner ?
                    "overflow-x-scroll overflow-y-visible scroll-smooth snap-x lg:snap-none lg:w-10/12 lg:mx-auto md:pl-4 lg:pl-0 py-1 lg:px-4 md:gap-8 lg:gap-x-9 lg:scrollbar-show"
        
                    :
                    "md:w-11/12 lg:w-11/12 h-fit mx-auto md:mx-0 overflow-x-hidden overflow-y-hidden flex-wrap items-start justify-start lg:justify-start gap-x-1 md:gap-x-12 gap-y-12 md:gap-y-10"
            }
        `}
        >
                {children}          
            
        </div>
    );
}

export default CardListDisplay