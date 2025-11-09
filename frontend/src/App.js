
import React from 'react';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  const token = useSelector(s => s.auth.token);
  return token ? <Dashboard/> : <Login/>;
}
