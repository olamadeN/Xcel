import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//  initial state
const initialState = {
    isLoading: false, 
    data: [],
    error:''
}
//fetching the data of all users
export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
    
});
// fetching user details data
export const fetchUserDetails = createAsyncThunk('fetchUserDetails', async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
});

//creating slices
export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.error.message
    })
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
    });
   }
})


export default userSlice.reducer