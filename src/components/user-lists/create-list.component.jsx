import { useEffect, useId, useState } from 'react';
import { useCredentials } from '../../stores/authStore';
import { createList } from '../../api/apiLists';
import { useQueryClient } from '@tanstack/react-query';


import ConfirmationOverlay from '../ui/confirmation-overlay.component';


const CreateList = ({handleRefetch}) =>{
    const { getValidSession } = useCredentials()
    
    const input1Id = useId()
    const input2Id = useId()
    
    const[isOpen,setIsOpen] = useState(false)
    const[correctInput, setCorrectInput] = useState(true)

    const handleSubmit = async(formData) =>{
       
        const collectionName= formData.get("Collection name").trim().replace(/\s+/g,' ')
        const collectionDesc= formData.get("Collection description").trim().replace(/\s+/g,' ')
        if(collectionName === null || collectionName.trim().length === 0){
            setCorrectInput(false)
            return
        }

        await createList(getValidSession()?.session_id,collectionName,collectionDesc)
        setCorrectInput(true)
        setIsOpen(!isOpen)
        handleCreate()

    }

    const handleClose = () =>{
        setCorrectInput(true)
        setIsOpen(!isOpen)
    }

    return(    
            <div className='
                group                   
                w-full
                lg:w-1/6 
                h-fit
                lg:min-h-fit
                lg:h-46
                p-5
                lg:p-8
                bg-velvet-sofa/10                 
                rounded-lg
                cursor-pointer
                no-underline
                border-2
                border-velvet-sofa
                border-dashed
                hover:border-seat-number
                z-10
            '            
            >   
                <div className='
                    w-full 
                    h-full 
                    flex
                    flex-col
                    justify-center
                    items-start '
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    <h3 className='
                        text-3xl
                        text-seat-number
                        no-underline
                        group-hover:underline              
                    '>
                        Create a list
                    </h3> 
                </div>
                    
                 {isOpen && <ConfirmationOverlay title='New collection'>
                <div className='mt-4 flex flex-col items-center justify-center gap-5'>
                    <form action={handleSubmit}>
                        {!correctInput && <p>The list needs a name!</p>}
                        <div className='flex flex-col gap-2'>
                            <label htmlFor={input1Id}>List name</label>
                            <input id={input1Id} name="Collection name" className='w-50 py-1 px-2 bg-bg-dark/50 rounded-lg'></input>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor={input2Id}>Description (optional)</label>
                            <input id={input2Id} name="Collection description" className='w-50 py-1 px-2 bg-bg-dark/50 rounded-lg'></input>
                        </div>
                        <div className='w-full mt-8 flex flex-col md:flex-row gap-5'>
                            <button className='w-full' type="submit">Confirm</button>       
                            <button className='w-full' onClick={handleClose}>Cancel</button> 
                        </div>                                  
                    </form>
                </div>
                
            </ConfirmationOverlay>}  
            </div>
                      
        
    );
}

export default CreateList