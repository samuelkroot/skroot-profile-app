import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const logout = createAsyncThunk('auth/logout', async(__, {rejectWithValue}) => {
    try {
        const response = await fetch('https://web.ics.purdue.edu/~skroot/cgt-390/public/logout.php');
        const data = await response.json();
        if (data.message) {
            return true;
        } else {
            return rejectWithValue('Something went wrong; failed to log out');
        }
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: localStorage.getItem('isLogin') === 'true',
        error: '',
        status: 'idle',
    },
    reducers: {
        login: (state) => {
            state.isLogin = true;
            localStorage.setItem('isLogin', 'true');
        }

    },
    extraReducers: (builder) => {
        builder.addCase(logout.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(logout.fulfilled, (state) => {
            state.isLogin = false;
            localStorage.removeItem('isLogin');
        })
        .addCase(logout.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });

    }
})

export const { login } = authSlice.actions;
export default authSlice.reducer;
