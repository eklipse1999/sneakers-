import React , { useState } from 'react';
import axios from "axios";
import { Toaster , toast } from "react-hot-toast";


interface User {
    firstName:string;
    middleName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    password:string;
    confirmPassword?:string;
    agreed:boolean;
    dateOfBirth:string
}

const Register:React.FunctionComponent = ()=>{
    const [ error , setError ] = useState<string>('');
    const [ formData , setFormData ] = useState<User>(
        {
            firstName:"", // minimum of 3 and maximum of 20 required
            middleName:"", // optional
            lastName:"",// minimum of 3 and maximum of 20 required
            email:"", 
            phoneNumber:"", //max of 13 and min of 10
            password:"",
            confirmPassword:"",
            agreed:false,
            dateOfBirth:""
        }
    )

   
    const len = 8;
    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        try{
            const day = new Date();
            const convert: number = day.getFullYear() - new Date(formData.dateOfBirth).getFullYear()
            const tele = formData.phoneNumber.length < 13 ? setError('Must include country code ') : null;
            const first = formData.firstName.length > 3 && formData.firstName.length <= 20 ? formData.firstName : toast.error("Name length must greater than 3 characters");
            if (formData.password !== formData.confirmPassword){
                toast.error("Passwords do not match");
            }else if(convert < 18){
                toast.error("Must be 18 or above")
            }else{
                const response = await axios.post("https://web-dev-learning.onrender.com/app/signup" , formData,{ withCredentials: true }) //insert backend url here
               if(response.data.status === false){
                    toast.error(response.data.state)
               }else{
                toast.success("Registration successfull")
               }
            }
        }catch(err:any){
            toast.error(err.response.data.message)
        }
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value, 
        });
       
      };

    return(
        
        <section className="w-full h-full flex justify-center items-center p-3">
            <Toaster position="top-right"/>
            <div className="2xl:w-[40%] xl:w-[40%] lg:w-full md:w-full sm:w-full xs:w-full h-full  flex justify-center items-center 2xl:flex-row xl:flex-row lg:flex-row md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse">
                <div className='w-full rounded-md 2xl:h-full xl:h-full lg:h-full md:h-full sm:h-full xs:h-full flex justify-center items-center'>
                    <form className="w-full h-full flex-col p-3 flex justify-center items-center  gap-4" onSubmit={handleSubmit}>
                        <h1 className='font-Poppins text-3xl font-bold text-center'>Register Account</h1>
                        <span className='text-red-500 font-Poppins text-center'>{error}</span>
                        <div className="w-full h-[8%] flex justify-between items-center flex-col">
                            <label className='font-Poppins'>First Name:</label>
                            <input type='text' value={formData.firstName} name="firstName" onChange={handleChange} placeholder="Type your first name" className="w-[70%] p-4 font-Poppins outline-green-400 outline-1" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center flex-col">
                            <label className='font-Poppins'>Middle Name:</label>
                            <input type='text' value={formData.middleName} name="middleName" onChange={handleChange} placeholder="Type your middle name" className="w-[70%] p-4 font-Poppins outline-green-400 outline-1"/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center flex-col">
                            <label className='font-Poppins'>Last Name:</label>
                            <input type='text' value={formData.lastName} name="lastName" onChange={handleChange} placeholder="Type your last name" className="w-[70%] p-4 font-Poppins outline-green-400 outline-1" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center flex-col">
                            <label className='font-Poppins'>Email:</label>
                            <input type='email' value={formData.email} name="email" placeholder="Type your email" onChange={handleChange} className="w-[70%] p-4 font-Poppins outline-green-400 outline-1" required/>
                        </div>
                        <div className="w-full h-[8%] flex justify-between items-center flex-col">
                            <label className='font-Poppins'>Telephone number:</label>
                            <input type='tel' value={formData.phoneNumber} onChange={handleChange} name="phoneNumber" placeholder="Type your telephone number" minLength={10} maxLength={13} className="w-[70%] p-4 outline-green-400 outline-1 font-Poppins" required/>
                        </div>
                       
                        <div className="w-full h-[10%] flex justify-between items-center flex-col">
                            <label className='font-Poppins'>Password:</label>
                            <input type='password' value={formData.password} name="password" minLength={len}  onChange={handleChange} placeholder="Type your password"  className="w-[70%] p-4 font-Poppins outline-green-400 outline-1" required/>
                        </div>
                        <div className="w-full h-[10%] flex justify-center items-center flex-col">
                            <label className='font-Poppins'>Confirm Password:</label>
                            <input type='password' value={formData.confirmPassword}  onChange={handleChange} name="confirmPassword" placeholder="Re-Type your password" minLength={8} className="w-[70%] p-4 font-Poppins outline-green-400 outline-1" required/>
                        </div>
                        <div className="w-full h-[10%] flex justify-center items-center flex-col">
                            <label className='font-Poppins'>Date of Birth:</label>
                            <input type='date' value={formData.dateOfBirth}  onChange={handleChange} name="dateOfBirth" placeholder="dateOfBirth" minLength={8} className="w-[70%] p-4 font-Poppins outline-green-400 outline-1" required/>
                        </div>
                        <div className="2xl:w-[55%] xl:w-[60%] lg:w-[60%] md:w-[50%] sm:w-[45%] xs:w-[80%] h-[8%] flex justify-between items-center mb-0 2xl:gap-0 xl:gap-0 lg:gap-0 md:gap-3 sm:gap-4 xs:gap-4">
                            <input type='checkbox' checked={formData.agreed} name="agreed"  onChange={handleChange} placeholder="Type your password"  minLength={8} className="p-2 font-Roboto accent-black" required/>
                            <label className="font-Poppins 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-sm xs:text-xs">Agree with terms and conditions</label>
                        </div>
                        <button type='submit' className='p-3 font-Poppins bg-black text-white rounded-md w-[40%]'>Register</button>
                    </form>
                </div> 
            </div>
        </section>

    )
}

export default Register;