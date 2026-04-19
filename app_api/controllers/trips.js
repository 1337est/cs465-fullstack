const Trip = require('../models/travlr');

// GET /api/trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// GET /api/trips/:tripCode
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
        if (!trip) {
            return res.status(404).json({ message: 'trip not found' });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// POST: /trips
const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });
  try {
    const q = await newTrip.save();
    if (!q) return res.status(400).json({ message: 'trip not saved' });
    return res.status(201).json(q);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// PUT: /trips/:tripCode
const tripsUpdateTrip = async (req, res) => {
  try {
    const q = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { returnDocument: 'after' }
    ).exec();
    if (!q) return res.status(400).json({ message: 'trip not found' });
    return res.status(201).json(q);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// DELETE: /trips/:tripCode
const tripsDeleteTrip = async (req, res) => {
  try {
    const q = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();
    if (!q) return res.status(404).json({ message: 'trip not found' });
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
