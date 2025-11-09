
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Leads from './Leads';
export default function Dashboard() {
  return (
    <div style={{padding:20}}>
      <h1>CRM Dashboard</h1>
      <Leads/>
    </div>
  );
}
