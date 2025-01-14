import React , { useEffect , useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import Team, { Teams } from "../Reusable/Team";
import Person1 from "../assets/images/group2.jpg";
import Person2 from "../assets/images/group3.jpg";
import Person4 from "../assets/images/group4.jpg";

const About:React.FC = ()=>{
    const [ data , setData ] = useState<Teams[]>([]);

    const style: React.CSSProperties = {
        clipPath: 'polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)',
      };
      
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get('/jsons/team.json');
                setData(response.data)
               
            }catch(error:any){
                console.log(error);
                return;
            }
            
        }

        fetchData();
    },[])

    return(
        <section className='w-full h-full flex justify-start items-start flex-col'> 
            <div className="w-full 2xl:h-50vh xl:h-50vh lg:h-50vh md:h-40vh sm:h-40vh xs:h-40vh flex justify-center items-center">
                <Fade className='w-full h-full flex justify-center items-center' direction='up' triggerOnce>
                    <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-full flex justify-center items-center p-4 flex-col gap-4">
                        <span className='2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-3xl xs:text-4xl font-Lexend text-center'>We are the people who make up Restart Digital</span>
                        <span className='font-Poppins text-center 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-full sm:w-full xs:w-full'>
                            Our philossphy is simple, provide you with the applicable skills and give you the best resources and assist 
                            you on your journey.
                        </span>
                    </div>                  
                </Fade>
            </div>
            <div className='w-full p-4 flex justify-center items-center overflow-hidden mb-5'>
                <div className='container 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-auto gap-4 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]  p-4'>
                    {
                        data.map((item)=>(
                            <Team 
                            name={item.name} 
                            image_path={item.image_path} 
                            position={item.position}
                            linkedin_account={item.linkedin_account}
                            info={item.info}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="w-full 2xl:h-15vh xl:h-15vh p-2 flex justify-center items-center">
                <div className="w-[100%] h-full  flex justify-start items-start flex-col">
                    <span className="font-Lexend text-black 2xl:text-7xl xl:text-7xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl">Mentorship Programs</span>
                </div>
            </div>
            <div className="w-full 2xl:h-20vh xl:h-20vh lg:h-30vh md:h-full sm:h-full xs:h-full p-2 flex justify-start items-start">
                <div className="2xl:w-[90%] xl:w-[90%] h-full flex justify-start items-start flex-col">
                    <span className="font-Poppins text-black text-sm ">
                        Mentorship in the tech industry fosters growth, innovation, and collaboration. 
                        By sharing expertise, mentors guide mentees through challenges, empowering them to excel. 
                        This exchange nurtures talent, bridges knowledge gaps, and drives career development.
                        Companies benefit from stronger teams, increased retention, and a culture of learning, making mentorship a cornerstone of success.
                        <span className='text-orange-500'>Contact any member of our team.</span>
                    </span>
                </div>
            </div>
            <div className="w-full 2xl:h-30vh xl:h-30vh lg:h-30vh md:h-20vh sm:h-20vh xs:h-20vh flex justify-center items-center  p-4">
                    <div className='w-full h-full flex justify-start items-center'>
                        <span className='2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl sm:text-4xl xs:text-4xl font-Lexend capitalize'>Previous years of restart digital</span>
                    </div>
            </div>
            <div className='w-full h-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col justify-center items-center 2xl:p-4 xl:p-4 lg:p-4 md:p-0 sm:p-0 xs:p-0 gap-4- bg-gray-100'>
                <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full h-full  rounded-lg flex justify-center items-center flex-col 2xl:p-4 xl:p-4 lg:p-4 md:p-0 sm:p-0 xs:p-0 ">
                    <div className='w-full flex justify-start items-center p-4'>
                        <span className='font-Poppins font-bold text-2xl'>Restart Digital events in the years</span>
                    </div>
                    <div className='w-full flex justify-start items-center p-4'>
                        <span className='font-Poppins text-sm'>
                            The TECH Event, hosted by Restart Digital last year, was a groundbreaking gathering of technology enthusiasts, industry leaders, and innovators. 
                            Focused on fostering collaboration and knowledge sharing, the event featured interactive workshops, panel discussions, and keynote speeches by renowned tech pioneers. 
                            Attendees explored cutting-edge trends in AI, blockchain, and software development, gaining insights into future technological advancements. 
                            Networking sessions provided a platform to connect with like-minded professionals and forge valuable partnerships.
                            Restart Digital’s commitment to innovation shone through its seamless organization and vibrant atmosphere. 
                            The TECH Event not only inspired participants but also strengthened the company’s reputation as a digital leader.
                        </span>
                    </div>
                </div>
                <div className="w-full h-full  rounded-lg flex justify-center items-center gap-4 p-3">
                    <div className="w-full h-full rounded-lg" style={style}>
                        <img src={Person1} alt="" className='w-full h-full object-cover relative rounded-lg'/>
                    </div>
                    <div className='w-full h-full flex justify-center items-center flex-col gap-4'>
                        <div className="w-full h-full rounded-lg" style={style}>
                            <img src={Person2} alt="" className='w-full h-full object-cover relative rounded-lg'/>
                        </div>
                        <div className="w-full h-full rounded-lg" style={style}>
                            <img src={Person4} alt="" className='w-full h-full object-cover relative rounded-lg'/>
                        </div>
                    </div>
                    
                </div>  
            </div>
        </section>
    )
}

export default About;