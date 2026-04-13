const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

const renderTravel = async (req, res) => {
    fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            if (!Array.isArray(json)) {
                return res
                    .status(500)
                    .send('Error: API call did not return an array of trips.');
            }

            if (json.length === 0) {
                return res
                    .status(404)
                    .send('Error: No trip data found in the database.');
            }

            res.render('travel', {
                title: 'Travlr Getaways',
                trips: json,
                isTravel: true
            });
        })
        .catch(err => res.status(500).send(err.message));
};

module.exports = { renderTravel };
