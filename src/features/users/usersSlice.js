import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Filip S' },
    { id: '1', name: 'Jennifer F' },
    { id: '2', name: 'Harry Potter' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer
