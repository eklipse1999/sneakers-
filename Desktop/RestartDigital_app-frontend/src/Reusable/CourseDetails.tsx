import React from 'react';
import { Data } from '../Components/Courses';



const CourseDetails:React.FunctionComponent<Data> = ({ course_name , image_path , course_description })=>{
    return(
        <div className='w-full h-[590px] m-0 shadow-md shadow-gray-200 bg-white rounded-xl flex justify-start items-center flex-col'>
            <div className='w-full 2xl:h-[45%] xl:h-[45%] lg:h-[45%] md:h-[35%] sm:h-[35%] xs:h-[35%]  rounded-t-xl'>
                <img src={image_path} className='w-full h-full object-cover rounded-t-xl' alt=''/>
            </div>
            <div className='w-full flex justify-center items-center p-2'>
                <span className='font-Poppins text-xl font-bold capitalize'>{course_name}</span>
            </div>
            <div className='w-full flex justify-center items-center p-2 flex-col'>
                <span className='font-Poppins text-xs capitalize'>
                    {course_description.course_info1}
                </span>
                
            </div>
            <div className='w-full p-2 flex justify-between items-center'>
                <span className='font-Poppins'>By: {course_description.author}</span>
                <div className='flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m4.24 16L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23z"/>
                    </svg>
                    <span className='font-Poppins'>{course_description.course_starred}</span>
                </div>
                
            </div>
            <div className='w-full p-2 flex justify-start items-start'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m3.8 13.4L13 11.667V7h-2v5.333l3.2 4.266z"/>
                </svg>
                <span className='font-Poppins text-slate-400'>Lesson Time: About {course_description.hours} hrs</span>
            </div>
        <div className='flex justify-start items-start p-2 gap-3 w-full'>
            <div className='w-full border-2 border-black flex justify-center items-center'>
                <span className='font-Poppins uppercase'>free</span>
            </div>
            <div className='w-full border-2 border-black flex justify-center items-center'>
                <span className='font-Poppins uppercase'>course</span>
            </div>
            <div className='w-full border-2 border-black bg-black flex justify-center items-center'>
                <span className='font-Poppins uppercase text-white'>beginner</span>
            </div>
        </div>
    </div>
    )
}

export default CourseDetails;