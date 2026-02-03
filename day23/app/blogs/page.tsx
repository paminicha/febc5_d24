// "use client"
import React from 'react'
import BlogsList from '../components/BlogsList';

interface PostProps {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userlikes: number;
}

async function page() {

    // const data = await fetch("https://dummyjson.com/posts")
    // const res = await data.json()
    // console.log(data)
  return (
    <div>
        <h1>All posts</h1>
        {/* <ul>
            {res.posts.map((post: PostProps) => (
                <li key={post.id}> {post.title} </li>
            ))}
        </ul> */}
        <BlogsList></BlogsList>
        
    </div>
  )
}

export default page;
