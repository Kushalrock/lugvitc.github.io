import styles from "./terminal.module.css";
import util from "../../styles/util.module.css";
import "../../components/blogs_popup_page/blogs_popup.css";
import "../../styles/button.css";
import "../terminalCard/cardRow.css";
import asusLogo from "../../images/asusLogo.png";

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function TerminalCard({ blogs }) {
  const [likeCounts, setLikeCounts] = useState([]);

  useEffect(() => {
    const initialCounts = blogs.map(() => {
      return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    });
    setLikeCounts(initialCounts);
  }, [blogs]);

  const handleLikeClick = (index) => {
    setLikeCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  const handleReadMoreClick = (content, blogTitle) => {
    setPopupContent({ content: content, title: blogTitle });
    setShowPopup(true);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  return (
    <>
    {/* { (blogs.length == 0) && (<h3> No Blogs Available</h3>) }
      {blogs.map((blog, index) => ( */}
      <div className={styles.index} >
        <div className={`${styles.titlebar} ${util.noSelection}`}>
          <div className={styles.title}>title</div> {/*{blog.title}*/}
        </div>

        <div className={`${styles.body} ${util.terminalText}`}>
          <img
              className={styles.thumbnail}
              src={asusLogo }  // blog.thumbnail
              alt="niubnei"
            />
          <br />
          <div className="info">
            <button
              className="like-button"
            // onClick={() => handleLikeClick(index)}
            >
              <span className="icon"></span>
              <span className="count">500</span>
            </button>
            <div className="blog_dept">Technology</div> 
            <div className="date">22-08-2023</div>
          </div>
          <p></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repellendus cumque qui quod non nam dolorum quia magni optio sequi eveniet, saepe commodi rem explicabo. Ipsa obcaecati odio officia corporis?</p>
          <button
            className="button"
            // onClick={() => handleReadMoreClick(blog.content, blog.title)}
          >
            Read More
          </button>
        </div>
      </div>
      {/* ))} */}
      {showPopup && (
        <div className="popup">
          <div className="blog_title">{popupContent.title}</div>

          <ReactMarkdown>{popupContent.content}</ReactMarkdown>

          <button className="button" onClick={handleCloseClick}>
            Close
          </button>
        </div>
      )}
    </>
  );
}
