import removeIcon from "@assets/delete-24px.svg"

const RoundRemover = ({item, handler, arialabel='', classes=''}) => {

    return(
        <button className={`w-8 h-8 p-1 rounded-full bg-no-repeat bg-center bg-[url(@assets/delete-24px.svg)] ${classes}`}
            onClick={()=>{handler(item)}}
        ></button>
    )
}

export default RoundRemover