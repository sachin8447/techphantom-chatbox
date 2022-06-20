const express = require('express');
const UserRouter = express.Router();
const {updateUser,getUserById,createUser,deleteUser} = require('../controller/User_controller');

UserRouter.route('/getUserById').get(getUserById);
UserRouter.route('/createUser').post(createUser);
UserRouter.route('/updateUser').patch(updateUser);
UserRouter.route('/deleteUser').delete(deleteUser);

//com
module.exports = UserRouter