const renderNews = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', isNews: true });
};

module.exports = { renderNews };
