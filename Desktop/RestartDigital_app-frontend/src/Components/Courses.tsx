import React , { useEffect , useState } from 'react';
import Backend from "../assets/images/backend.jpg";
import Design from "../assets/images/design.jpg";
import { Fade } from 'react-awesome-reveal';
import axios from 'axios';
import CourseDetails from '../Reusable/CourseDetails';


export type Inner ={
    course_info1: string;
    course_info2:string;
    course_starred:number;
    author:string;
    hours:number;
}

export interface Data {
    course_name: string;
    image_path:string;
    course_description: Inner
}
const Course:React.FunctionComponent = ()=>{
    const [ data , setData ] = useState<Data[]>([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get("/jsons/courses.json");
                console.log(response.data);
                setData(response.data);
            }catch(error){
                console.log(error);
            }
        }

        fetchData();
    },[])
    

    const handleClicks = ()=>{
        console.log("Explore button clicked");
    }


    return (
       <section className='w-full h-full flex justify-center items-center p-4 flex-col'>
            <div className='2xl:w-full xl:w-full lg:w-[90%] md:w-[90%] sm:w-full xs:w-full 2xl:h-80vh xl:h-80vh lg:h-80vh  md:h-full sm:h-full xs:h-full flex 2x:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center items-center gap-4'>
                <div className='relative w-full h-full flex justify-center items-center p-6 gap-4 2x:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col'>
                    <div className='absolute top-40 left-0 bg-pink-300 rounded-full w-[60%] h-[80%]'></div>
                    <div className='absolute top-0 right-0 bg-violet-300 rounded-full w-[60%] h-[80%]'></div>
                    <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-full sm:w-full xs:w-full  h-full bg-gray-100 rounded-xl flex justify-start itetms-center flex-col -rotate-6'>
                        <div className='w-full h-[40%] rounded-t-xl'>
                            <img src={Backend} className='w-full h-full object-cover rounded-t-xl' alt=''/>
                        </div>
                        <div className='w-full flex justify-center items-center p-2'>
                            <span className='font-Poppins text-xl font-bold capitalize'>Build a secure backend application tailored to real world software principles</span>
                        </div>
                        <div className='w-full flex justify-center items-center p-2'>
                            <span className='font-Poppins text-xs capitalize'>
                                Build a secure backend application tailored to real world software principles.
                                Implementing micro-services to improve the functionality of servers and making servers 
                                more performant.
                            </span>
                        </div>
                        <div className='w-full p-2'>
                            <span className='font-Poppins'>By: Samuel</span>
                        </div>
                        <div className='w-full p-2 flex justify-start items-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m3.8 13.4L13 11.667V7h-2v5.333l3.2 4.266z"/>
                            </svg>
                            <span className='font-Poppins text-slate-400'>Lesson Time: About 6hrs</span>
                        </div>
                        <div className='flex justify-start items-start p-2 gap-3'>
                            <div className='w-full border-2 border-black flex justify-center items-center'>
                                <span className='font-Poppins uppercase'>free</span>
                            </div>
                            <div className='w-full border-2 border-black flex justify-center items-center'>
                                <span className='font-Poppins uppercase'>course</span>
                            </div>
                            <div className='w-full border-2 border-black flex justify-center items-center'>
                                <span className='font-Poppins uppercase'>beginner</span>
                            </div>
                        </div>
                    </div>

                    {/* Next rotate */}
                    <div className='2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-full sm:w-full xs:w-full h-full bg-gray-100 rounded-xl flex justify-start items-center flex-col rotate-6'>
                        <div className='w-full h-[40%] rounded-t-xl'>
                            <img src={Design} className='w-full h-full object-cover rounded-t-xl' alt=''/>
                        </div>
                        <div className='w-full flex justify-center items-center p-2'>
                            <span className='font-Poppins text-xl font-bold capitalize'>memorable UI design for interactive experiences.</span>
                        </div>
                        <div className='w-full flex justify-center items-center p-2'>
                            <span className='font-Poppins text-xs capitalize'>
                                Build an interactive UI/UX design with figma or adobe photoshop for cultured to industrial standards and 
                                improve the user interface and user experience of modern applications from our professionals.And gain more
                                experience.
                            </span>
                        </div>
                        <div className='w-full p-2'>
                            <span className='font-Poppins'>By: Zadock</span>
                        </div>
                        <div className='w-full p-2 flex justify-start items-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m3.8 13.4L13 11.667V7h-2v5.333l3.2 4.266z"/>
                            </svg>
                            <span className='font-Poppins text-slate-400'>Lesson Time: About 6hrs</span>
                        </div>
                        <div className='flex justify-start items-start p-2 gap-3'>
                            <div className='w-full border-2 border-black flex justify-center items-center'>
                                <span className='font-Poppins uppercase'>free</span>
                            </div>
                            <div className='w-full border-2 border-black flex justify-center items-center'>
                                <span className='font-Poppins uppercase'>course</span>
                            </div>
                            <div className='w-full border-2 border-black flex justify-center items-center'>
                                <span className='font-Poppins uppercase'>beginner</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-full flex justify-start items-start flex-col p-5 gap-6'>
                    <div className='2xl:w-[40%] xl:w-[40%] lg:w-[60%] md:w-full sm:w-full xs:w-full h-[10%] border-2 border-black rounded-3xl p-2 flex justify-center items-center'>
                        <span className='font-Poppins'>Why you need restart digital</span>
                    </div>
                    <div className='w-full'>
                        <span className='font-Lexend text-4xl'>Courses and bootcamps are available in restart digital, choose what you like</span>
                    </div>
                    <div className='w-full'>
                        <span className='font-Poppins text-black'>
                            Explore wide range of courses and bootcamps on Restart Digital. Whatever you are looking to develop now skills or advance your career,we have something for everyone.
                            choose what you like and start learning to do.
                        </span>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-start gap-2 items-start'>
                            <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z" clipRule="evenodd"/>
                            </svg>
                            <span className='font-Poppins'>100+ Courses Categories (Design , Coding, etc)</span>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex justify-start gap-2 items-start'>
                            <svg className='text-green-500' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01z" clipRule="evenodd"/>
                            </svg>
                            <span className='font-Poppins'>Online or Offline Event you can join</span>
                        </div>
                    </div>
                    <div>
                        <button className='font-Poppins p-4 rounded-2xl text-white bg-black' onClick={handleClicks}>Explore restart</button>
                    </div>
                </div>
            </div>
            <div className='w-full 2xl:h-30vh 2xl:mt-0 xl:mt-0 xl:h-40vh lg:h-40vh lg:mt-48 md:30vh sm:h-30vh xs:h-30vh flex justify-center items-center p-4'>
                <Fade className='w-full h-full flex justify-center items-center' direction='left' triggerOnce>
                    <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full  h-full flex justify-center items-center'>
                        <span className='2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl font-Poppins text-center'>There is nothing that limits you from wanting to learn whatever you want</span>
                    </div>
                </Fade>
            </div>
            <div className='w-full p-4 flex justify-center items-center overflow-hidden'>
                <div className='container 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-auto gap-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]  p-4'>
                    {
                        data.map((item)=>(
                            <CourseDetails 
                            course_name={item.course_name} 
                            image_path={item.image_path} 
                            course_description={item.course_description}
                            />
                        ))
                    }
                </div>
            </div>
       </section>
    )
}

export default Course;