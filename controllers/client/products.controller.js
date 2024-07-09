const Product = require("../../model/product.model");

module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: false
    }).sort({position:"desc"})


    res.render("client/pages/products/index.pug",{
        pageTitle: "Danh sách sản phẩm",
        products: products
    })
}

module.exports.detail = async (req, res) => {
    const slug = req.params.slug
    const product = await Product.findOne({
        slug: slug,
        deleted: false
    }).sort({position:"desc"})
    console.log(product);

    res.render("client/pages/products/detail.pug",{
        pageTitle: "Chi tiết sản phẩm",
        product: product
    })
}