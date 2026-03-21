const renderRooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', isRooms: true });
};

module.exports = { renderRooms };
