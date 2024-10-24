import { useEffect } from "react";
import { useState } from "react";
import Blog from "./../Blog/Blog"

const Blogs = ({handleBookMarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="col-span-2 order-2 md:order-2 lg:order-1">
            <h1 className="text-3xl font-bold mb-6">Total Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    handleBookMarks={handleBookMarks}
                    handleMarkAsRead={handleMarkAsRead}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;