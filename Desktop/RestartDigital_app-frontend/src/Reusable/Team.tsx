import React from 'react';


export interface Teams {
    image_path: string;
    name:string;
    linkedin_account?:string;
    position:string;
    info:string;
    
}

const Team:React.FunctionComponent<Teams> =({ name , position , image_path , linkedin_account , info })=>{

    const handleClick = ()=>{
        window.open(`${linkedin_account}`, '_blank' , 'noopener,noreferrer');
    }
    return(
        <div className='w-full h-[490px] m-0 shadow-md shadow-gray-200 bg-white rounded-xl flex justify-start items-center flex-col hover:cursor-pointer' onClick={handleClick}>
            <div className='w-full h-[65%] rounded-t-xl bg-gray-100'>
                <img src={image_path} className='w-full h-full object-cover object-top rounded-t-xl' alt=''/>
            </div>
            <div className='w-full flex justify-start items-start p-2'>
                <span className='font-Poppins text-xl font-bold capitalize'>{name}</span>
            </div>
            <div className='w-full flex justify-center items-start p-2 flex-col'>
                <span className='font-Poppins text-xs capitalize'>
                    {position}
                </span>   
            </div>
            <div className='w-full flex justify-center items-start p-2 flex-col'>
                <span className='font-Poppins text-xs capitalize'>
                    {info}
                </span>   
            </div>  
    </div>
    )
}

export default Team;