
const express = require('express');
const router = express.Router();
const initModels = require('../models/init-models');
const { auth } = require('../middleware/auth');
const models = initModels();
const Lead = models.Lead;
const Activity = models.Activity;

// Create lead
router.post('/', auth(['admin','manager','sales']), async (req, res) => {
  const { name, email, ownerId } = req.body;
  const lead = await Lead.create({ name, email, ownerId });
  // emit socket notification? (simple example)
  const io = req.app.get('io');
  if (io) io.emit('lead:created', lead);
  res.json(lead);
});

// List leads (simple)
router.get('/', auth(['admin','manager','sales']), async (req, res) => {
  const leads = await Lead.findAll({ include: [{ model: require('../models/user'), as: 'owner', attributes: ['id','name','email'] }] });
  res.json(leads);
});

// Get lead by id + activities
router.get('/:id', auth(['admin','manager','sales']), async (req, res) => {
  const id = req.params.id;
  const lead = await Lead.findByPk(id, { include: [{ model: Activity, as: 'activities' }, { model: require('../models/user'), as: 'owner' }] });
  if (!lead) return res.status(404).json({ message: 'Not found' });
  res.json(lead);
});

// Add activity
router.post('/:id/activities', auth(['admin','manager','sales']), async (req, res) => {
  const { type, note } = req.body;
  const activity = await Activity.create({ leadId: req.params.id, type, note });
  res.json(activity);
});

module.exports = router;
