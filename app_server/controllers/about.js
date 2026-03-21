const renderAbout = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', isAbout: true });
};

module.exports = { renderAbout };
