import Bookmark from "../BookMark/Bookmark";



const BookMarks = ({bookMarks}) => {
    
    
    
    return (
        <div className="bg-[#6047EC1A] p-8 rounded-md border-2 bolder-blue-200 mt-4">
            <h1 className="text-2xl font-extrabold mb-4">Bookmarked Blogs : {bookMarks.length}</h1>
            
           {
            bookMarks.map(bookMark => <Bookmark 
                key={bookMark.id}
                bookMark={bookMark}
            ></Bookmark>)
           }
            
        </div>
    );
};

export default BookMarks;