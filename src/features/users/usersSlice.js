import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { updateDoc, doc } from '@firebase/firestore';
import { db } from '../../firebase-config'
import axios from 'axios'

const initialState = {
    users: [],
    status: 'idle',
    error: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:4000/user')
    // Only return user info, NOT email and password
    return response.data.map((data) => {
        return {
            id: data.id,
            position: data.position,
            name: data.name,
            age: data.age,
            description: data.description,
            interests: data.interests,
            height: data.height,
            weight: data.weight,
            ethnicity: data.ethnicity,
            gender: data.gender,
            pronouns: data.pronouns,
            looking_for: data.looking_for
        }
    })
})

export const editProfile = createAsyncThunk('users/editProfile', async (userId, payload) => {
  try {
    console.log(userId);
    console.log(payload);
    const response = await updateDoc(doc(db, 'users', userId), payload)
    console.log(response);
  } catch(error) {
    console.log(error);
  }
})

export const createUser = createAsyncThunk('users/createUser', async () => {
  const response = await axios.post('http://localhost:4000/user')
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched users to the array
            state.users = state.users.concat(action.payload)
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
    }
})

export default usersSlice.reducer
export const selectAllUsers = state => state.users.users
export const selectUserById = (state, userId) => state.users.users.find(user => user.id === userId)