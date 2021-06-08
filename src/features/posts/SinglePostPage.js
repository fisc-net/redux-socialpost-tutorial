import React from 'react'
import { useSelector } from  'react-redux'
import { Link } from 'react-router-dom'

export const SinglePostPage = ({ match }) => {
    const { postId } = match.params
    const post = useSelector(state => state.posts.find(p => p.id === postId))

    return (
        <section>
            { !post &&
                <h2>Post not found!</h2>}
            { !!post &&
                <article>
                    <h2>{ post.title }</h2>
                    <p className="post-content">{ post.content }</p>
                    <Link to={`/posts/${post.id}/edit`} className="button muted-button">Edit</Link>
                </article>}
        </section>
    )
}
