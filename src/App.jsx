import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/Bookmarks/BookMarks'
import Header from './components/Header/Header'
import BookMarkContainer from './components/BookMarkConatainer/BookMarkContainer'

function App() {
  const [bookMarks, setBookMarks] = useState([])
  const [markAsRead, setMarkAsRead] = useState(0)
  const [toggle, setToggle] = useState(true)
 
  const handleToggle = (value) => {
    setToggle(value)

    
    
  }

  const handleMarkAsRead = (id, reading_time) =>{
    let num = parseInt(reading_time)
    setMarkAsRead(markAsRead+num)
    const remainingBookMarks = bookMarks.filter(bookMark => bookMark.id !== id)
    setBookMarks(remainingBookMarks)
    
  }

  const handleBookMarks = blog =>{
   const exist = bookMarks.find(bookmark => bookmark.id == blog.id)
   if(!exist) 
   {
      const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
    }
    
    
  }


  return (
    <>
      
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Blogs 
        handleMarkAsRead={handleMarkAsRead}
        handleBookMarks={handleBookMarks}
        ></Blogs>
        {/* <BookMarks 
        markAsRead={markAsRead}
        bookMarks={bookMarks} ></BookMarks> */}
        <BookMarkContainer 
        markAsRead={markAsRead}
        bookMarks={bookMarks}
        handleToggle={handleToggle}
        toggle={toggle}
        ></BookMarkContainer>
      </div>
     
    </>
  )
}

export default App
