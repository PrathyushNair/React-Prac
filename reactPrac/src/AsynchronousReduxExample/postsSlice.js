import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    posts:[],
    loading:false,
    error:null
}

export const getPosts=createAsyncThunk('getPosts',async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
})

export const addPosts=createAsyncThunk('addPosts',async(post)=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(post),
        headers:{
            'Content-type':'application/json'
        }
    })
    return await res.json()
})

export const postSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        //Get posts
        builder
        .addCase(getPosts.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(getPosts.fulfilled,(state,action)=>{
            state.loading=false
            state.posts=action.payload
            state.error=null
        })
        .addCase(getPosts.rejected,(state)=>{
            state.loading=false
            state.error='Something went wrong while fetching posts'
        })

        //Add post
        .addCase(addPosts.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(addPosts.fulfilled,(state,action)=>{
            state.loading=false
            state.posts.unshift(action.payload)
            state.error=null
        })
        .addCase(addPosts.rejected,(state)=>{
            state.loading=false
            state.error='Something went wrong while adding post'
        })
    }
})

export default postSlice.reducer