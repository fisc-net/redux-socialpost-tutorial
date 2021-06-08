import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { postId } = match.params
    const post = useSelector(state => state.posts.find(p => p.id === postId))
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({ id: postId, title, content}))
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input id="postTitle" name="postTitle" onChange={onTitleChanged} type="text" value={title} />
                <textarea id="postContent" name="postContent" onChange={onContentChanged} value={content} />
                <button onClick={onSavePostClicked} type="button">Save Post</button>
            </form>
        </section>
    )
}