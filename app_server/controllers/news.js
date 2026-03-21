const renderNews = (req, res) => {
    res.render('news', { title: 'Travlr Getaways'});
};

module.exports = { renderNews };
