import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'

export const AddPostForm = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId))
            setTitle('')
            setContent('')
            setUserId('')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title: </label>
                <input id="postTitle" name="postTitle" onChange={onTitleChanged} type="text" value={title} />
                <label htmlFor="postAuthor">Author: </label>
                <select id="postAuthor" onChange={onAuthorChanged} value={userId}>
                    <option value=""></option>
                    {users.map(u => (<option key={u.id} value={u.id}>{u.name}</option>))}
                </select>
                <label htmlFor="postContent">Content: </label>
                <textarea id="postContent" name="postContent" onChange={onContentChanged} value={content} />
                <button onClick={onSavePostClicked} type="button">Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm
