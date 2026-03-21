const renderAbout = (req, res) => {
    res.render('about', { title: 'Travlr Getaways'});
};

module.exports = { renderAbout };
