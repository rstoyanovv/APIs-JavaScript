function home (req, res) {
    res.status(201).render('index', { layout: false });
}

export { home };
