import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { addPosts,getPosts } from "./postsSlice";
export function ReduxPosts(){
    const [newPost,setNewPost]=React.useState({userId:'',id:'0',title:'',body:''})
    const dispatch=useDispatch()
    const {posts,loading,error}=useSelector((state)=>state.posts)
    function handleAddPost(){
        if (!newPost.title || !newPost.body) return;
        dispatch(addPosts({ ...newPost, userId: 1 }));
        setNewPost({userId:'',id:'0',title:'',body:''});
    }
    React.useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]) //avoids lint error
    return(
        <>
<div style={{ padding: '20px' }}>
<h2>Posts</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}><strong>{post.title}</strong>: {post.body}</li>
        ))}
      </ul>
     <h3>Add a Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <br />
      <textarea
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <br />
      <button onClick={handleAddPost}>Add Post</button>
</div>


        </>
    )
}