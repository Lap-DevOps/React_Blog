import React from "react";
import Mybutton from "./UI/button/Mybutton";
import {useNavigate, navi} from 'react-router-dom'

const PostItem = (props) => {
  const router= useNavigate()
  
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Mybutton onClick={() => router(`/posts/${props.post.id}`)}>Open</Mybutton>
      </div>
      <div className="post__btns">
        <Mybutton onClick={() => props.remove(props.post)}>Delete</Mybutton>
      </div>
    </div>
  );
};

export default PostItem;
