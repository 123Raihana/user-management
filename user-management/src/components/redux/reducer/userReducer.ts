import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await fetch('https://reqres.in/api/users?page=2', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    }); // Replace with your API URL
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: {
            page: 0,
            per_page: 0,
            total: 0,
            total_pages: 0,
            data: [],
            support: {
                url: '',
                text: '',
            },
        },
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            });
    },
});

export default userSlice.reducer;