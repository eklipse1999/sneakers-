import React from 'react';
import logo from "../assets/images/logo.jpg";
import Preview from "../Reusable/Preview";

const Header:React.FunctionComponent = ()=>{
    const [ display , setDisplay ] = React.useState<boolean>(false);

     const registerHandler = ()=>{
        window.location.href="/register/user";
     }
     const handleClick = ()=>{
        setDisplay(!display);
     }

    return (
        <section className='w-full h-10vh bg-white flex 2xl:justify-center z-30 xl:justify-center lg:justify-center md:justify-between xs:justify-between xx:justify-between items-center gap-5  p-1 overflow-x-hidden'>
            <div className="w-full h-full flex justify-center items-center">       
                <ul className='w-full h-full flex justify-start items-center 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-1 xs:p-0 xx:p-0'>
                    <div className="2xl:w-[10%] xl:w-[10%] lg:w-[15%] md:w-[20%] sm:w-[25%] xs:[30%] h-full flex justify-center items-center">
                        <img className='w-full h-full object-cover mix-blend-luminosity' src={logo} alt="logo-picture"/>
                    </div>
                    <li><a href="/" className='p-4 font-Poppins active:text-orange-400 active:underline 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden'>Home</a></li>
                    <li><a href="/courses" className='p-4 font-Poppins 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden'>Courses</a></li>
                    <li><a href="/about/team" className="p-4 font-Poppins 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden">About Us</a></li>
                    <li><a href="/blog" className='p-4 font-Poppins 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden'>Blog</a></li>
                    
                </ul>
            </div>
            <div className="2xl:w-[40%] xl:w-[70%] lg:w-[60%] md:w-[70%] sm:w-[90%] xs:w-[90%] xx:w-[90%] h-full flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-between sm:justify-center xs:justify-between items-center 2xl:p-2 xl:p-2 lg:p-2 md:p-0 sm:p-0 xs:p-0">
                <div className='w-[50%] h-full flex justify-center items-center 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden p-3'>
                    <a href="/login/user" className='p-4 font-Poppins'>Log in</a>
                </div>
                <div className='w-full h-full 2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden xx:hidden justify-center items-center p-2'>
                    <button className='group bg-black hover:bg-white hover:border transition ease-in-out duration-300 delay-150 hover:border-black hover:text-black 2xl:p-3 xl:p-3 lg:p-3 md:p-3 sm:p-3 xs:p-1  2xl:w-[90%] xl:w-[50%] lg:w-[50%] md:w-[70%] sm:w-[70%] xs:w-[100%]  ml-4 rounded-xl flex justify-center items-center text-white' onClick={registerHandler}>Register Now
                        <svg className='text-white group-hover:text-black' xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 64 64">
                            <path fill="currentColor" d="M53.213 10.786c-11.715-11.715-30.711-11.715-42.426 0c-11.716 11.717-11.716 30.711 0 42.428c11.715 11.715 30.711 11.715 42.426 0c11.716-11.717 11.716-30.711 0-42.428M45 41.132l-7.585-7.414l-13.458 13.281L17 39.954l13.218-13.391l-7.343-7.564H45z" />
                        </svg>
                    </button>
                </div> 
                
            </div>
                <div className='w-full h-full 2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex xx:flex justify-end items-center p-2'>
                    <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 28">
                        <path fill="currentColor" d="M3 6.75A.75.75 0 0 1 3.75 6h18.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75m0 14a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M3.75 13a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5z"/>
                    </svg>
                </div>

                {
                    display && (<Preview/>) 
                }
        </section>
    )
}

export default Header;