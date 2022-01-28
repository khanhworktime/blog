
class NewsController {
    //[Get] /news 
    index(req, res) {
        res.render("news")
    }

    //[Get] /news/:slug
    show(req, res) {
        res.send("DETAIL NEWS")
    }
}

module.exports = new NewsController