import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import CreatePost from './Post/Post';

const MyPosts = ({ DataPost, newPostText, addPost, updateNewPostText }) => {
  let arrPosts = DataPost.map((post) => {
    return <CreatePost key={post.id} post={post.post} />;
  });

  let onPostWall = (e) => {
    e.preventDefault();
    newPostText ? addPost() : alert('Поле ввода не должно быть пустое');
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    updateNewPostText(text);
  };

  return (
    <div className={MyPostsStyle.wrapper}>
      <h3 className={MyPostsStyle.title}>My posts</h3>
      <form className={MyPostsStyle.formMyPost} onSubmit={onPostWall}>
        <input onChange={onPostChange} className={MyPostsStyle.input} value={newPostText} placeholder='Post...' />
        <button formTarget='_self' type='submit' className={MyPostsStyle.button}>
          Send
        </button>
      </form>

      <div>{arrPosts}</div>
    </div>
  );
};

export default MyPosts;
