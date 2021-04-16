import React from "react";
import PostStyle from "./Post.module.css";
// 

let DataPost = [
  { id: 1, post: "Hi, how are you?" },
  { id: 2, post: "It's my first post" },
  { id: 3, post: "Yo" }
]

const CreatePost = (props) => {
  return (
    <div className={PostStyle.post}>
      <img className={PostStyle.post_avatar} src="https://image.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg"></img>
      <p className={PostStyle.post_text}>{props.post}</p>
    </div>
  )
}

const Post = (props) => {
  return (
    <div >
      <CreatePost post={DataPost[0].post} />
      <CreatePost post={DataPost[1].post} />
      <CreatePost post={DataPost[2].post} />
    </div>
  )
}

export default Post;