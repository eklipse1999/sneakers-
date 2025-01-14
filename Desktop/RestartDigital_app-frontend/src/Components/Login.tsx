import React , { useState }  from 'react';
import axios from "axios";


type User = {
  email:string;
  password:string;

}

const Login: React.FC = () => {
  const [ status , setStatus ] = useState<string>("")
  const [ formData , setformData ] = useState<User>({
    email:"",
    password:"",
  })
  const [ state , setState ] = useState<boolean>(true);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const { value, name , checked , type} = e.target;
    setformData({
     ...formData,
      [name]:type === "checkbox" ? checked : value,
    })
    if (checked && name && value){
      setState(false);
    }

    if (formData.email && formData.password.length >= 8 ) {
      setState(false);
    } else {
      setState(true); 
    }
  }

  const handleGoogleLogin =  () => {
    window.location.href = "https://web-dev-learning.onrender.com/app/google";
  };

  const handleGitHubLogin = () => {
    // Add logic for GitHub login here
   window.location.href = "https://web-dev-learning.onrender.com/app/github";
  };

const handleSubmit = async(e:any)=>{
  try{
    e.preventDefault();
    const response = await axios.post("https://web-dev-learning.onrender.com/app/signin" , formData , { withCredentials: true });//insert backend url here
    if(response.data){
    sessionStorage.setItem("authToken", response.data)
    window.location.href = "/course/details";
  }else{
    sessionStorage.removeItem("authToken");
  }
  }catch(err:any){
    setStatus(err.response?.data?.message);
  }
}

  return (
    <section className="w-full h-80vh flex justify-center items-center flex-col">
      <div className="2xl:w-[45%] xl:w-[45%] lg:w-[40%] md:w-full sm:w-full xs:w-full h-[80%] flex justify-center items-center 2xl:flex-col xl:flex-col lg:flex-col md:flex-col sm:flex-col xs:flex-col xx:flex-col">
        <div className='w-full h-full p-4 rounded-lg'>
           
            <form className="w-full h-full gap-4 p-3 flex justify-center items-center flex-col" onSubmit={handleSubmit}>
              <h1 className='font-Poppins text-3xl'>Sign in</h1>
              <span className='font-Poppins'>Explore all what Restart Digital has to offer by signing in to our services.</span>
              <div>
                <span className='text-red-500 font-Poppins'>{status}</span>
              </div>
                <div className="w-full h-full flex-col flex justify-start items-center 2xl:mb-4 xl:mb-4 lg:mb-8 md:mb-10 sm:mb-10 xs:mb-10">
                    <label className='font-Poppins'>Email:</label>
                    <input type='email' value={formData.email} name="email" onChange={handleChange} placeholder="Type your email" className="2xl:w-[70%] xl:w-[70%] lg:w-[90%] md:w-[95%] sm:w-[95%] xs:w-[95%] xx:w-[95%] bg-gray-100 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 xs:p-3 font-Poppins focus:outline-none" required/>
                </div>
                <div className="w-full h-full flex-col flex justify-start items-center">
                    <label className='font-Poppins'>Password:</label>
                    <input type='password' value={formData.password} name='password' onChange={handleChange} placeholder="Type your password" minLength={8}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters" className="2xl:w-[70%] xl:w-[70%] lg:w-[90%] md:w-[95%] sm:w-[95%] xs:w-[95%] xx:w-[95%] bg-gray-100 2xl:p-4 xl:p-4 lg:p-3 md:p-3 sm:p-3 xs:p-3 font-Poppins focus:outline-none" required/>
                </div>
                
                <button disabled={state} type='submit' className={`p-3 font-Poppins ${state ? 'bg-stone-300' : 'bg-black'} ${state ? 'hover:cursor-default' : 'hover:cursor-pointer'} text-white rounded-md 2xl:w-[70%] xl:w-[70%] lg:w-[90%] md:w-[95%] sm:w-[95%] xs:w-[95%] xx:w-[95%] `} onClick={handleSubmit}>Log in</button>
            </form>
        </div>
        <div className="flex flex-col items-center space-y-4">
          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full max-w-sm px-4 py-2 text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 rounded-lg"
          >
           <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20.66 10.2c.096 0 .179.067.195.161c.094.526.145 1.092.145 1.639a8.97 8.97 0 0 1-2.293 6.001a.197.197 0 0 1-.274.018l-2.445-2.07a.206.206 0 0 1-.016-.297a5.4 5.4 0 0 0 1.114-1.852H12.2a.2.2 0 0 1-.2-.2v-3.2c0-.11.09-.2.2-.2zm-6.187 6.6a.21.21 0 0 1 .226.024l2.568 2.173a.196.196 0 0 1-.01.309A8.96 8.96 0 0 1 12 21a9 9 0 0 1-7.548-4.097a.197.197 0 0 1 .046-.263l2.545-1.962a.207.207 0 0 1 .303.062a5.4 5.4 0 0 0 7.127 2.06M6.68 12.926a.2.2 0 0 1-.076.197L3.869 15.23a.196.196 0 0 1-.304-.084A9 9 0 0 1 3 12c0-1.152.217-2.254.612-3.267a.196.196 0 0 1 .299-.085l2.732 2.004c.065.047.095.13.078.208a5.4 5.4 0 0 0-.042 2.066m.468-3.765c.096.07.231.042.295-.058A5.4 5.4 0 0 1 12 6.6a5.37 5.37 0 0 1 3.44 1.245a.205.205 0 0 0 .276-.01l2.266-2.267a.197.197 0 0 0-.007-.286A8.95 8.95 0 0 0 12 3a8.99 8.99 0 0 0-7.484 4a.197.197 0 0 0 .049.267z"/>
           </svg>
            Continue with Google
          </button>

          {/* GitHub Login Button */}
          <button
            onClick={handleGitHubLogin}
            className="flex items-center justify-center w-full max-w-sm px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-500 rounded-lg"
          >
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z" clipRule="evenodd"/>
            </svg> 
            Continue with GitHub
          </button>
        </div>
      </div>
</section>
  );
}

export default Login;
