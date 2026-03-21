var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const renderTravel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips, isTravel: true });
};

module.exports = { renderTravel };
