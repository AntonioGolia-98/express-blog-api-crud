function notFound(req, res, next) {
    res.status(404)
    res.json({
        erro: "not found",
        message: "post non trovaato"
    })
}

module.exports = notFound;