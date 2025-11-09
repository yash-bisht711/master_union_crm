
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1';

export const login = createAsyncThunk('auth/login', async (creds) => {
  const r = await axios.post(API + '/auth/login', creds);
  return r.data.token;
});

const slice = createSlice({
  name: 'auth',
  initialState: { token: null, status: 'idle' },
  reducers: { logout: (s)=> { s.token = null; } },
  extraReducers: (b) => b.addCase(login.fulfilled, (s, a)=> { s.token = a.payload; })
});
export const { logout } = slice.actions;
export default slice.reducer;
