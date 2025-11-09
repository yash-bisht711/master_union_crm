
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeads } from '../features/leads/leadsSlice';
export default function Leads(){
  const dispatch = useDispatch();
  const leads = useSelector(s=>s.leads.items || []);
  useEffect(()=>{ dispatch(fetchLeads()); }, [dispatch]);
  return (
    <div>
      <h3>Leads</h3>
      <ul>
        {leads.map(l=> <li key={l.id}>{l.name} — {l.email} — owner: {l.owner?.name || '—'}</li>)}
      </ul>
    </div>
  );
}
