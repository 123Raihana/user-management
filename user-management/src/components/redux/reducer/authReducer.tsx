import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    token: null as string | null,
    loading: false,
    error: null,
}


export const loginUser = createAsyncThunk<
    string, // return type (token)
    { email: string; password: string }, // argument type
    { rejectValue: any } // thunkAPI config
>(
    'auth/loginUser',
    async (loginData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://reqres.in/api/login', loginData,
                {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                }
            );
            return response.data.token;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);


// Create the auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as null;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;