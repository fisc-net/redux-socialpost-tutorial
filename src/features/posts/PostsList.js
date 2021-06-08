import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const PostsList = () => {
    const posts = useSelector(state => state.posts)

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {posts.map(p => (
                <article className="post-excerpt" key={p.id}>
                    <h3>{ p.title }</h3>
                    <Link to={`/posts/${p.id}`} className="button muted-button">
                        View Post
                    </Link>
                    <Link to={`/posts/${p.id}/edit`} className="button muted-button">
                        Edit Post
                    </Link>
                </article>
            ))}
        </section>
    )
}

export default PostsList
