"use client"
import useSWR from "swr"

function fetcher(url: string) {
  return fetch(url).then((res) => res.json())
}

function BlogsList() {
  const { data, error, isLoading } = useSWR("https://dummyjson.com/posts", fetcher)

//   if (error) return <div>Error loading data</div>
//   if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>BlogsList</h1>
      {error && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}

      {/* {data && data.posts.map((blog: any) => ( */}
      {data?.posts?.map((blog: any) => (
        <li key={blog.id}>{blog.title}
          <p>{blog.body}</p>
        </li>
      ))}
    </div>
  )
}

export default BlogsList
