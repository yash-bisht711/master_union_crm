const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const { Lead, User, Activity } = require('../models');

// Create a lead
router.post('/', auth(['admin','manager','sales']), async (req, res) => {
  const { name, email, ownerId } = req.body;
  const lead = await Lead.create({ name, email, ownerId });

  const io = req.app.get('io');
  if (io) io.emit('lead:created', lead);

  res.json(lead);
});

// List all leads
router.get('/', auth(['admin','manager','sales']), async (req, res) => {
  const leads = await Lead.findAll({
    include: [
      { model: User, as: 'owner', attributes: ['id', 'name', 'email'] }
    ]
  });

  res.json(leads);
});

// Get lead by ID with activities
router.get('/:id', auth(['admin','manager','sales']), async (req, res) => {
  const lead = await Lead.findByPk(req.params.id, {
    include: [
      { model: Activity, as: 'activities' },
      { model: User, as: 'owner' }
    ]
  });

  if (!lead) return res.status(404).json({ message: 'Not found' });
  res.json(lead);
});

// Add activity to lead
router.post('/:id/activities', auth(['admin','manager','sales']), async (req, res) => {
  const { type, note } = req.body;
  const activity = await Activity.create({
    leadId: req.params.id,
    type,
    note
  });

  res.json(activity);
});

module.exports = router;
