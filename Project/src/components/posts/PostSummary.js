import React from 'react';
import './PostSummery.css';


const PostSummary = ({post}) => {
    return (

        <div className="post-box">
    <div className="blog-post">
    <div className="blog-post__img">
    <img src={post.imgURL} alt=" " />
    </div>
    <div className="blog-post__info">
      <div className="blog-post__date">
        <span>Sunday</span>
        <span>August 15 2020</span>
      </div>
      <h1 className="blog-post__title">{post.username}</h1>
      <p className="blog-post__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
        tempore velit aliquam suscipit maxime ullam voluptates sed delectus
        facilis laudantium. Assumenda eveniet doloremque consectetur doloribus
        qui ex molestiae sed ipsum.
      </p>
      <a href="/" className="blog-post__crt">Read more</a>
    </div>
  </div>
  </div>








            // <div className="row">
            //     <div className="col s12 m7">
            //     <div className="card">
            //         <div className="card-image">
            //         <img src={post.imgURL} alt=" " />
            //         </div>
            //         <div className="card-content">
            //         <span className="card-title">{post.username}</span>    
                    
            //         <p className="grey-text"></p>
            //         </div>
            //     </div>
            //     </div>
            // </div>

    )
}

export default PostSummary;