const renderContact = (req, res) => {
    res.render('contact', { title: 'Travlr Getaways', isContact: true });
};

module.exports = { renderContact };
