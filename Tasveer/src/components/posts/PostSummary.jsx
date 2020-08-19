import React from "react";
import "./PostSummery.css";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";


import TelegramIcon from "@material-ui/icons/Telegram";

const PostSummary = ({ post }) => {
  console.log(post);
  return (
    <div className="post-box">
      <div className="blog-post">
        <div className="blog-post__img">
          <img src={post.imgURL} alt=" " />
        </div>
        <div className="blog-post__info">
          <LikeButton />

          <TelegramIcon style={{ marginLeft: "60px" }} />

          <div className="blog-post__date">
            {/* <span>Sunday</span> */}
            <span>
              {post.createdAt
                ? post.createdAt.toDate().toDateString()
                : "Sunday"}
            </span>
            <p>India</p>
          </div>
          <h1 className="blog-post__title">{post.username}</h1>
          <p className="blog-post__text">
            {post.caption}
          </p>
          

          <Link to={"/post/" + post.id} className="blog-post__crt">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};


export default PostSummary;
