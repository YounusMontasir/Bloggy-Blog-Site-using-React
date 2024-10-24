import BookMarks from "../Bookmarks/BookMarks";
import ReadingTime from "../ReadingTime/ReadingTime";

const BookMarkContainer = ({handleToggle,toggle,markAsRead,bookMarks}) => {
    return (
        <div className="order-1 md:order-1 lg:order-2">
            <button onClick={()=> handleToggle(true)} className={` rounded-l-lg p-3 font-bold ${toggle? 'bg-blue-800  text-white':'bg-white '} `} >Bookmark</button>
            <button onClick={()=> handleToggle(false)} className={`rounded-r-lg p-3 font-bold ${toggle? 'bg-white ':'bg-blue-800 text-white '} `}>Reading Time</button>
            {toggle==true ? <BookMarks 
        bookMarks={bookMarks} ></BookMarks> : <ReadingTime markAsRead={markAsRead} />}
        </div>
    );
};

export default BookMarkContainer;