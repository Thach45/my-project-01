//Cấu hình router của products
const productRouters = require("./product.routers");

//Cấu hình router của home
const homeRouters = require("./home.routers");
const subMenu = require("../../middlewares/client/category");
module.exports = (app) => {
    app.use('/',subMenu.category,homeRouters );
    app.use('/products',subMenu.category,productRouters);
}