const mongoose = require("mongoose")
module.exports.connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://nguyenhoangthach:Thach18012005@cluster0.hgcnpf3.mongodb.net/project-01");
        console.log("Connect ok");
    } catch (error) {
        console.log("Connect fail");
    }
}