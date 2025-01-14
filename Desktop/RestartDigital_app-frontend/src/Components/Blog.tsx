import React from 'react';
import persons from "../assets/images/person4.jpg";


const Blog:React.FunctionComponent = ()=>{
    
    return (
        <section className="w-full h-100vh bg-white flex justify-center items-center gap-4 2xl:p-4 xl:p-4 lg:p-2 md:p-0 sm:p-0 xs:p-0 flex-col">
            <div className='bg-white w-full h-[55%] p-4 gap-4 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center items-center'>
                <div className='w-full h-full '>
                    <img src={persons} alt="person" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full h-full p-4 flex justify-start items-center flex-col gap-4'>
                    <h1 className='font-Poppins text-black 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-md xs:text-sm text-center'>Achieve your goals with Restart Digital</h1>
                    <span className='text-center font-Poppins text-stone-400 2xl:text-md xl:text-md lg:text-md md:text-xl sm:text-md xs:text-xs'>
                        At Restart Digital we believe that everyone should have the opportunity to succeed in the tech
                        industry. Our platform is designed to empower you with the knowledge and skills needed to reach 
                        your career aspirations.Whether you are a beginner looking to explore new fields  or an experienced professional 
                        aiming to upskill , we offer variety of free courses tailored to your needs.
                    </span>
                </div>
            </div>
            <div className='w-full h-[30%] bg-gray-100'>
                <div className='w-full h-full flex justify-center items-center flex-col 2xl:p-4 xl:p-4 lg:p-2 md:p-3 sm:p-0 xs:p-1 '>
                    <span className='font-Poppins 2xl:text-5xl xl:text-4xl lg:text-4xl md:text4-xl sm:text-4xl xs:text-4xl  '>Why choose us?</span>
                    <span className='font-Roboto text-md text-slate-500'>A choose that makes a difference</span>,
                    <div className='2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[90%] sm:w-full xs:w-full h-full flex justify-center items-center gap-4 p-3'>
                        <div className='w-full h-full flex justify-center items-center flex-col'>
                            <svg className='bg-slate-800 text-white p-1 rounded-full' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 89.61L22.486 177.18L256 293.937l111.22-55.61l-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16a16 16 0 0 1 16-16l-2.646 8.602l18.537 5.703l.008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21a16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0c0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627c16.37 10.232 31.703 21.463 44.156 32.36c7.612 6.66 13.977 13.05 19.074 19.337c5.097-6.288 11.462-12.677 19.074-19.337c12.453-10.897 27.785-22.128 44.156-32.36c28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063L125.873 249z" />
                            </svg>
                            <span className='text-center font-Poppins'>Highly Experienced</span>
                        </div>
                        <div className='w-full h-full flex justify-center items-center flex-col'>
                            <svg className='bg-slate-800 text-white p-1 rounded-full' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10" />
                            </svg>
                            <span className='text-center font-Poppins'>Dedicated support</span>
                        </div>
                        <div className='w-full h-full flex justify-center items-center flex-col'>
                            <svg className='bg-slate-800 text-white p-1 rounded-full' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097" clipRule="evenodd" />
                            </svg>
                            <span className='text-center font-Poppins'>Questions and Quizzes</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;