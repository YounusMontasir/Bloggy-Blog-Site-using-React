import React from 'react';

const ReadingTime = ({markAsRead}) => {
    return (
        <div className='bg-[#6047EC1A] py-6 px-10 mt-5 rounded-lg border-blue-200 border-2'>
            <h2 className='text-[#6047EC] text-2xl font-bold'>Spent Time on Read: {markAsRead}</h2>
        </div>
    );
};

export default ReadingTime;