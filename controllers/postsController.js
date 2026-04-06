const posts = require("./../data/postList");

function index(req, res) {
    let filteredPosts = posts;

    if (req.query.tags) {
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }
    res.json(filteredPosts)
}

function show(req, res) {

}

function store(req, res) {
    res.send("creazione nuovo post")

}

function update(req, res) {
    res.send("modifica del post" + req.params.id)
}

function modify(req, res) {
    res.send("modifica paraziale del post" + req.params.id)
}

function destroy(req, res) {

}

module.exports = { index, show, store, update, modify, destroy };