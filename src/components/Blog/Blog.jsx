import PropTypes from 'prop-types'
import { FaBookmark } from "react-icons/fa"
const Blog = ({blog, handleBookMarks,handleMarkAsRead}) => {
    const {id,cover_img,title,author_avatar_img,author_name,posted_date,reading_time,hashtags} = blog
    
    
    
    return (
        <div className='border-b-2 mb-6'>
            <img className='h-[450px] object-cover w-full rounded-md' src={cover_img} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 mt-9 mb-5'>
                    <img className='w-14 h-14 rounded-full' src={author_avatar_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author_name}</h4>
                        <p className='text-[#11111199]'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='text-[#11111199]'>{reading_time} min</p>
                    <button onClick={() => handleBookMarks(blog)}><FaBookmark /></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
           <div className='flex my-4 gap-3 text-[#11111199}'>
           {
                hashtags.map(hashtag=><p>{hashtag}</p>)
            }
           </div>
           <p onClick={()=>handleMarkAsRead(id,reading_time)} className='text-xl text-[#6047EC] pb-4 underline'>Mark as Read</p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;