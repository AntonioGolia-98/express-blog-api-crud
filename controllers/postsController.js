const { post } = require("../router/appRouter");
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
    const newId = Date.now();
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        imagge: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);
    console.log(posts);
    res.status(200);
    res.send(newPost);

}

function update(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)
    if (!post) {
        res.status(404)
        return req.json({
            error: "not found",
            message: "post non trovato"
        })
    };
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    console.log(posts);
    res.send(post);
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id)
    if (!post) {
        res.status(404)
        return req.json({
            error: "not found",
            message: "post non trovato"
        })
    };
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    const postInviato = req.body;

    postInviato.title ? post.title = postInviato.title : post.title = post.title;
    postInviato.content ? post.content = postInviato.content : post.content = post.content;
    postInviato.image ? post.image = postInviato.image : post.image = post.image;
    postInviato.tags ? post.tags = postInviato.tags : post.tags = post.tags;

    console.log(posts);
    res.json(post);
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