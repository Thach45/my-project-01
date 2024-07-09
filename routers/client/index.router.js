//Cấu hình router của products
const productRouters = require("./product.routers");

//Cấu hình router của home
const homeRouters = require("./home.routers");

module.exports = (app) => {
    app.use('/',homeRouters );
    app.use('/products',productRouters);
}