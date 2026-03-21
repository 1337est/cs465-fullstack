const renderRooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways'});
};

module.exports = { renderRooms };
