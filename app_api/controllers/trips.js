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

module.exports = {
    tripsList,
    tripsFindByCode
};
