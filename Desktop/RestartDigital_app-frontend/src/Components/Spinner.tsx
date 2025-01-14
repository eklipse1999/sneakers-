import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-100vh w-full bg-white">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-black"></div>
        </div>
    );
};

export default Spinner;
