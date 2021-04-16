import React from "react";
import MyPostsStyle from "./MyPosts.module.css";
import Post from "./Post/Post";




const MyPosts = () => {
  return (
    <div className={MyPostsStyle.wrapper}>
      <h3 className={MyPostsStyle.title}>My posts</h3>
      <form>
        <input className={MyPostsStyle.input}></input>
        <button formTarget="_self" className={MyPostsStyle.button}>Send</button>
      </form>
      <div>
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;