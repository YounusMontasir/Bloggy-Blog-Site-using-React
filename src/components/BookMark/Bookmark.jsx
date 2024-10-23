import React from 'react';

const Bookmark = ({bookMark}) => {
    const {title, author_name, posted_date} = bookMark
    
    
    return (
        <div className='bg-white mb-4'>
            <h3 className='text-xl'>{title}</h3>
            <p>{author_name} </p>
            <p>{posted_date}</p>
        </div>
    );
};

export default Bookmark;