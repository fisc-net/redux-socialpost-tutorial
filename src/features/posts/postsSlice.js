import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'First Post!', content: 'By Filip' },
    { id: '2', title: 'Mercell Play day', content: 'freshining up Redux before learning Sagas' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                return state.concat(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        user: userId
                    }
                }
            }
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.find(p => p.id === id)
            if (existingPost) {
                existingPost.content = content
                existingPost.title = title
            }
        }
    }
})

export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer
