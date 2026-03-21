const renderMeals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways'});
};

module.exports = { renderMeals };
