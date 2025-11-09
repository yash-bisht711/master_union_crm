
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

export default function Login() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('pass1234');
  const dispatch = useDispatch();
  const submit = async (e) => {
    e.preventDefault();
    try { await dispatch(login({ email, password })).unwrap(); }
    catch (err) { alert('Login failed'); }
  };
  return (
    <div style={{padding:20}}>
      <h2>Sign in</h2>
      <form onSubmit={submit}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /><br/>
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" /><br/>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
