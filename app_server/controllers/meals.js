const renderMeals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', isMeals: true });
};

module.exports = { renderMeals };
