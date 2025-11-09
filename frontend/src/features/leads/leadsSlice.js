
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API = process.env.REACT_APP_API || 'http://localhost:5000/api/v1';

export const fetchLeads = createAsyncThunk('leads/fetch', async (_, {getState}) => {
  const token = getState().auth.token;
  const r = await axios.get(API + '/leads', { headers: { Authorization: 'Bearer ' + token } });
  return r.data;
});

const slice = createSlice({
  name: 'leads',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (b) => b.addCase(fetchLeads.fulfilled, (s, a) => { s.items = a.payload; })
});
export default slice.reducer;
