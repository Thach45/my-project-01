//file chứa khai báo biến
const systemConfig = require("../../config/system");
//Cấu hình router của dashboard
const dashBoard = require("./dashboard.routers");
//Cấu hình router của product
const product = require("./product.routers");
module.exports = (app) => {
    const pathAdmin = systemConfig.prefixAdmin;
    app.use(pathAdmin + '/dashboard', dashBoard);
    app.use(pathAdmin + '/products', product);
}