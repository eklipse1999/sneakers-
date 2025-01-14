import React from "react";

const NestedCircles:React.FunctionComponent = () => {

  const handleConnect = ()=>{
    window.location.href = '/about/team';
  }

  return (
    <div className="2xl:w-full xl:w-full lg:w-full md:w-full sm:min-w-[200px] xs:min-w-[200px] flex justify-center items-center h-full bg-lightBrown flex-col">
      <div className="w-full h-full flex justify-center items-center relative">
        {/* Outer Circle */}
        <div className="w-[80%] h-[100%] border border-dashed border-neutral-400 rounded-full flex justify-center items-center">
          {/* Middle Circle */}
          <div className="w-[70%] h-[70%] border-dashed border border-neutral-400 rounded-full flex justify-center items-center">
            {/* Inner Circle */}
            <div className="w-[80%] h-[80%] border border-dashed border-neutral-400 rounded-full flex justify-center items-center ">
                <div className='w-full flex justify-center items-center flex-col'>
                    <span className="font-Poppins text-5xl text-black">2.4k</span><br/>
                    <span className="font-Poppins bg-custBrown p-2 rounded-3xl">Active students</span>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute top-20">
            <svg className="float-left" xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.5c2.33 0 4.3-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5M8.5 11A1.5 1.5 0 0 0 10 9.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 7 9.5A1.5 1.5 0 0 0 8.5 11m7 0A1.5 1.5 0 0 0 17 9.5A1.5 1.5 0 0 0 15.5 8A1.5 1.5 0 0 0 14 9.5a1.5 1.5 0 0 0 1.5 1.5M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
            </svg>
        </div>
        <div className="w-full absolute top-40">
            <svg className="float-right" xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.5c2.33 0 4.3-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5M8.5 11A1.5 1.5 0 0 0 10 9.5A1.5 1.5 0 0 0 8.5 8A1.5 1.5 0 0 0 7 9.5A1.5 1.5 0 0 0 8.5 11m7 0A1.5 1.5 0 0 0 17 9.5A1.5 1.5 0 0 0 15.5 8A1.5 1.5 0 0 0 14 9.5a1.5 1.5 0 0 0 1.5 1.5M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/>
            </svg>
        </div>
        <div className='w-full h-[40%] flex justify-center items-center flex-col absolute bottom-0'>
            <span className="capitalize text-2xl text-center font-Poppins">Meet and connect with our active communities</span>
            <button className="p-3 bg-black text-white font-Poppins rounded-2xl capitalize" onClick={handleConnect}>connect with a restart member</button>
        </div>
      </div>
      </div>          
  );
};

export default NestedCircles;
