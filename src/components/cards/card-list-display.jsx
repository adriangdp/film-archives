const CardListDisplay = ({children, oneLiner=true}) => {
    return(
        <div className={`
            flex
            ${
                oneLiner ?
                    "lg:w-10/12 lg:mx-auto md:pl-4 lg:pl-2 py-1 px-[12.5vw] md:px-4 overflow-x-scroll overflow-y-visible scroll-smooth snap-x lg:snap-none gap-[25vw]  md:gap-14  lg:scrollbar-show"
                    :
                    "w-full h-fit mx-auto md:mx-0 flex-col flex-wrap items-center justify-start md:items-start md:justify-items-center gap-x-1 gap-y-12 md:gap-y-8  md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            }
        `}
        >
                {children}          
            
        </div>
    );
}

export default CardListDisplay