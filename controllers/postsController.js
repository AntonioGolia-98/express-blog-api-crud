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
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post) {
        res.status(404)
        return req.json({
            error: "not found",
            messaggio: "oggetto non trovato"
        })
    }
    res.json(post)
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
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)

    if (!post) {
        res.status(404)
        return res.json({
            error: 'not found',
            messaggio: 'oggetto non trovato'
        })
    }
    posts.splice(posts.indexOf(post), 1);
    res.send('Cancellato il post ' + id);
    res.status(204)
}

module.exports = { index, show, store, update, modify, destroy };