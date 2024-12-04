const express = require("express");
const app = express();
const port = 3000;
const post = require("./data/posts");
const postRouter = require("./routers/routersPosts");

app.use(express.static("public"));
app.use("/posts", postRouter);

app.get("/", (req, res) => {
    res.json("hello")
})

app.get(`/bacheca`, (req, res) => {
    res.json ({
        posts: post,
        length: post.length
    })
});

app.listen(port, () => {
    console.log(("server on"));
})