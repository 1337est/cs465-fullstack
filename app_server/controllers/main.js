const renderIndex = (req, res) => {
    res.render('index', { title: "Travlr Getaways"});
};

module.exports = { renderIndex };
