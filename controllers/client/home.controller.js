
const Categogy = require("../../model/categogy.model");
module.exports.index = (req, res) => {
    res.render("client/pages/home/index.pug",{
        pageTitle: "Trang chủ"
    })
}