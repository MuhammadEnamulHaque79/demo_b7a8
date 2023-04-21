import React, { useEffect, useState } from "react";
import "./BlogCart.css";

const BlogCart = ({ watchTime, bookMark }) => {
  const [time, setTime] = useState(watchTime);
  useEffect(() => {
    const getWatchTimeFromLocalStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromLocalStorage);
  }, [watchTime]);

  return (
    <div className="cart">
      <div>
        <h4 class="border border-sky-500 font-semibold rounded p-2">Spent time on read :{time} <span>min</span></h4>
      </div>
      <div className="title-section mt-3">
      <h4 className="font-semibold">Bookmarked Blogs : {bookMark.length}</h4>
        {bookMark.map((book, index) => (
          <h6 class="border border-sky-500 p-2" key={index}>{book.blogTitle} </h6>
        ))}
      </div>
    </div>
  );
};

export default BlogCart;

      

