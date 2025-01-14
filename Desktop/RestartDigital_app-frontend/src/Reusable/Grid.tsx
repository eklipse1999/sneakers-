import React from "react";

const Grid: React.FunctionComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center  bg-gray-100">
      <div className="relative w-full h-full bg-white border border-gray-300">
        {/* Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0">
          {Array.from({ length: 72 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-200"
            />
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default Grid;
