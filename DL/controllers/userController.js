const user = require('../models/user');

async function read() {
    return await user.find()
}
async function readOne(input) {
    return await user.findOne({username: input})
}
async function create(req) {
    return await new user({username:req.body.username, password:req.body.password}).save();
}
async function update(id, updateUser) {
    return await user.find({_id:id}).update(id, updateUser)
}
async function del(id) {
    return await user.findByIdAndUpdate(id, {isActive:false})
}

module.exports = {read, readOne, create, update, del};