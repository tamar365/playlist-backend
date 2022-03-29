const user = require('../models/user');


async function read() {
    return await user.find()
}
async function readOne(input) {
    return await user.findOne({username: input})
}
async function create(newUser) {
    return await (new user({username:newUser.username, password:newUser.password}).save());
}
async function update(id, updateUser) {
    return await user.find({_id:id}).update(id, updateUser)
}
async function del(id, update) {
    return await user.findByIdAndUpdate(id, update)
}

module.exports = {read, readOne, create, update, del};