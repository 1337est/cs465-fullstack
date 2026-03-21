const renderIndex = (req, res) => {
    res.render('index', { title: "Travlr Getaways", isHome: true });
};

module.exports = { renderIndex };
