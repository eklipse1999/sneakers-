/* eslint-disable react/jsx-no-undef */
import React , { useRef , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "../Reusable/Grid";
import { Fade } from "react-awesome-reveal";
import Pic from "../assets/images/collaboration.jpg";
import Boy from "../assets/images/boy_code.jpg";
import learn from "../assets/images/learn.jpg";
import code from "../assets/images/code.jpg";
import person from "../assets/images/persons1.jpg";
import person2 from "../assets/images/persons2.jpg";
import person3 from "../assets/images/persons3.jpg";
import PieWithCircles from "../Reusable/Pie";
import Learning1 from "../assets/gifs/learnning1.gif";
import Learning2 from "../assets/gifs/learning2.gif";

const Home:React.FunctionComponent = ()=>{
    const inputRef: any = useRef(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        console.log(token);
        if(token){
            sessionStorage.setItem("authToken", token)
            navigate("/course/details");
        }
    },[navigate])

    const handleSearch = (event:React.MouseEvent<HTMLButtonElement>):void=>{
        event.preventDefault();
        const result = inputRef.current?.value;
        console.log(result);
    }

    const handleExplore = ():void=>{
        window.location.href = "/courses";
    }

    const handleFirstCourse =()=>{
        window.location.href = '/course/details';
    }

    return (
        <section className="w-full h-full flex justify-start items-center flex-col overflow-x-hidden">
            <div className="relative w-full 2xl:h-50vh xl:h-40vh lg:h-50vh md:h-50vh sm:h-50vh xs:h-50vh justify-center items-center flex">
                <Grid/>
                    <div className="w-full p-3 2xl:h-[100%] xl:h-[100%] lg:h-[90%] md:h-full sm:h-full xs:h-full flex justify-center items-center absolute bottom-0 left-0 bg-gradient-to-t from-white to-white/25 gap-3">
                        <div className="w-full h-full flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col xs:flex-col justify-center items-center">
                            <div className='w-full'>
                                <div className='2xL:w-[50%] xl:w-[50%] lg:w-[80%] md:w-full sm:w-full xs:w-full border-2 border-black rounded-full flex justify-center items-center mb-4'>
                                    <span className='font-Poppins'>The place where newbie meets masters</span>
                                </div>
                                <div className='w-full'>
                                    <Fade className="w-full" direction='up' triggerOnce>
                                        <div className='w-full'>
                                            <span className='capitalize font-Poppins 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl'>Transform your learning experience with restart digital🧐</span>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className='2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full  xs:w-full flex justify-center items-center flex-col'>
                                <form className='w-full flex justify-center items-center flex-col p-3 gap-4'>
                                    <input type="text" ref={inputRef} placeholder='Search courses' className="font-Poppins p-2 w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full rounded-lg bg-gray-200"/>
                                    <button type='submit' className='font-Poppins bg-black text-white p-3 2xl:w-[70%] rounded-lg shadow-sm shadow-black xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full' onClick={handleSearch}>Search</button>
                                </form>
                                <div className='w-[70%] flex justify-center items-center gap-4'>
                                    <svg className="text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M10 17l-3.5-3.5l1.41-1.41L10 14.17L15.18 9l1.41 1.41z" />
                                    </svg>
                                    <span className='font-Poppins text-neutral-400'>Explore our well-structured IT courses.</span>
                                </div>
                            </div>
                        </div> 
                    </div>     
            </div>
            <div className="w-full h-40vh  flex justify-center items-center p-4">
                <div className='group w-full h-full  flex justify-center items-center gap-4 p-3 overflow-x-scroll scroll-smooth '>
                    <div className="flex justify-center items-center w-full animate-slide gap-4 h-full hover:animate-pulse">
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={Pic} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full flex shadow-sm shadow-gray-300 rounded-md space-x-4 p-2 justify-start items-center flex-col">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Camel Adrinna</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className="w-full h-full font-Poppins text-black text-xs">
                                This app has been a game-changer for me! As someone who relies heavily on tech for productivity, I’ve tried countless tools, but nothing comes close to this. 
                                It’s intuitive, packed with powerful features, and has made my workflow so much smoother. Setting it up was straightforward, and their support team was there to help with any questions I had along the way. 
                                
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4 ">
                            <img src={code} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full shadow-sm shadow-gray-300 rounded-md flex justify-start items-center flex-col space-x-4 p-2">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person2} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Blakeson</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className="w-full h-full font-Poppins text-black text-xs">
                                I’ve never experienced such professionalism and attention to detail. 
                                Their dedication to excellence is unmatched!
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={Boy} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full  shadow-sm shadow-gray-300 rounded-md flex space-x-4 p-2 flex-col justify-start items-center">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person3} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Camel Adrinna</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className="w-full h-full font-Poppins text-black text-xs">
                                Outstanding service from start to finish! I approached the team with a complex project, and they not only delivered but far exceeded my expectations.
                                Their professionalism, attention to detail, and commitment to ensuring customer satisfaction were evident at every step.
                                Communication was seamless, timelines were met, and the results speak for themselves.
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={learn} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full  shadow-sm shadow-gray-400 rounded-lg flex space-x-4 p-2 justify-start items-center flex-col">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Camel Adrinna</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className='w-full h-full font-Poppins text-black text-xs'>
                                This company offers a perfect combination of quality, reliability, and value. 
                                I was initially hesitant, but their friendly and knowledgeable team put my mind at ease. 
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={Pic} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full flex shadow-sm shadow-gray-300 rounded-md space-x-4 p-2 justify-start items-center flex-col">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Camel Adrinna</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className="w-full font-Poppins text-black text-xs">
                                I’ve been searching for a reliable online store, and I’m so glad I found this one! The entire shopping process was a breeze, from browsing their well-organized website to checking out and receiving my order.
                                The items were exactly as described, arrived on time, and were packaged with care. What really stood out was their customer service—prompt, friendly, and genuinely helpful.
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4 ">
                            <img src={code} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full shadow-sm shadow-gray-300 rounded-md flex justify-start items-center flex-col space-x-4 p-2">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person2} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Blakeson</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className="w-full text-black text-xs font-Poppins">
                                I’ve never experienced such professionalism and attention to detail. 
                                Their dedication to excellence is unmatched!
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={Boy} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full shadow-sm shadow-gray-300 rounded-md flex space-x-4 p-2 flex-col justify-start items-center">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person3} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Camel Adrinna</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className="w-full font-Poppins text-xs text-black">
                                Outstanding service from start to finish! I approached the team with a complex project, and they not only delivered but far exceeded my expectations.
                                Their professionalism, attention to detail, and commitment to ensuring customer satisfaction were evident at every step. 
                                Communication was seamless, timelines were met, and the results speak for themselves. It’s rare to find a service provider that genuinely cares about the client’s needs as much as they do.
                            </span>
                        </div>
                        <div className="min-w-[300px] h-full flex space-x-4">
                            <img src={learn} className='w-full h-full object-fill rounded-md' alt=""/>
                        </div>
                        <div className="min-w-[300px] h-full  shadow-sm shadow-gray-400 rounded-lg flex space-x-4 p-2 justify-start items-center flex-col">
                            <div className="w-full h-[30%] p-3 gap-4 flex justify-center items-center">
                                <img className="w-[20%] h-[100%] rounded-full object-cover object-top" src={person} alt=''/>
                                <div className='w-full h-full flex justify-center items-start flex-col'>
                                    <span className="font-Poppins">Camel Adrinna</span>
                                    <span className='underline font-RobotoCondensed text-slate-500'>Co-Founder of Restart</span>
                                </div> 
                            </div>
                            <span className='w-full h-full font-Poppins text-black text-xs'>
                                I’ve been searching for a reliable online store, and I’m so glad I found this one! The entire shopping process was a breeze, from browsing their well-organized website to checking out and receiving my order. 
                                The items were exactly as described, arrived on time, and were packaged with care. What really stood out was their customer service—prompt, friendly, and genuinely helpful.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second stage */}
            <div className='w-full 2xl:h-40vh xl:h-40vh lg:h-30vh md:h-30vh sm:h-30vh xs:h-30vh flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center items-center gap-4 p-4' >
                <div className='w-full h-full flex justify-center items-center'>
                    <span className='font-Lexend 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl'>There is nothing stopping you from becoming a master</span>
                </div>
                <div className='2xl:w-[30%] xl:w-[30%] lg:w-[50%] md:w-full sm:w-full xs:w-full h-full flex justify-center items-center'>
                    <button className='border-2 border-black font-Poppins text-black rounded-md p-3' onClick={handleExplore}>Explore our courses</button>
                </div>
            </div>

            {/* Third section */}
            <div className='w-full 2xl:h-60vh xl:h-60vh lg:h-60vh md:h-100vh sm:h-100vh xs:h-100vh 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-0 xs:p-0 flex justify-center items-center'>
                <div className="w-full h-full bg-customFirst rounded-md p-4 flex justify-center items-center gap-4 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col overflow-hidden">
                    <div className='w-full h-full gap-4 flex justify-center items-center 2xl:p-0 xl:p-0 lg:p-0 md:p-4 sm:p-4 xs:pl-96 2xl:overflow-hidden xl:overflow-hidden lg:overflow-hidden md:overflow-x-scroll sm:overflow-x-scroll xs:overflow-scroll space-x-4'>
                        <div className="2xl:w-full 2xl:bg-inherit xl:bg-inherit lg:bg-inherit md:bg-inherit sm:bg-white xs:bg-white xl:w-full lg:w-full md:w-full sm:min-w-[200px] xs:min-w-[200px] h-full flex justify-center items-center flex-col">
                            <div className="w-full h-[20%] flex justify-center items-center text-center">
                                <svg className='text-orange-400 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden p-3' xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z"/>
                                    <path fill="currentColor" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" opacity="0.5"/>
                                </svg>
                                <span className="text-center text-xl capitalize font-Poppins text-orange-400">restart digital category. </span>
                            </div>
                            <div className='w-full h-full flex justify-center items-center'>
                                <span className="w-full font-Poppins text-center text-black 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl xs:text-xl capitalize">find the course you are most interested in, just today!</span>
                            </div>
                            <div className="w-full h-[50%]  flex justify-center items-center">
                                <button className="w-[90%] p-3 bg-black text-white font-Poppins rounded-xl" onClick={handleFirstCourse}>Join our first course</button>
                            </div>
                        </div>
                        <div className="2xl:w-full xl:w-full lg:w-full md:w-full sm:min-w-[200px] xs:min-w-[200px] bg-white h-full flex justify-center items-center flex-col p-2 rounded-md">
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="font-Lexend text-black text-xl  text-center capitalize">Become a good developer</span>
                            </div>
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="text-xs font-Poppins text-center">
                                    Master foundational programming concepts, write clean, maintainable code, and embrace best practices
                                </span>
                            </div>
                            <div className='w-full h-[80%]'>
                               <img src={Learning1} className="w-full h-full" alt=''/> 
                            </div>
                            
                        </div>
                        <div className="2xl:w-full xl:w-full lg:w-full md:w-full sm:min-w-[200px] xs:min-w-[200px] bg-white h-full flex justify-center items-center flex-col p-2 rounded-md">
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="font-Lexend text-black text-xl  text-center capitalize">Become a problem solver</span>
                            </div>
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="text-xs font-Poppins text-center">
                                    Becoming a good developer requires continuous learning, problem-solving skills, and adaptability.
                                </span>
                            </div>
                            <div className='w-full h-[80%]'>
                               <img src={Learning2} className="w-full h-full" alt=''/> 
                            </div>
                        </div>
                    </div>
                    <div className='2xl:w-[50%] xl:w-[50%] lg:w-[70%] md:w-full sm:w-full xs:w-full h-full flex justify-centeritems-center flex-col '>
                        <PieWithCircles/>
                        
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Home;