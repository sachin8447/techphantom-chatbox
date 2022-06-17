const express = require('express');
const router = express.Router();
const {getAllTasks,getTaskById,createTask,updateTask,deleteTask} = require('../controller/home_controller');

router.route('/getItems').get(getAllTasks);
router.route('/getItemById').get(getTaskById);
router.route('/updateItem').patch(createTask);
router.route('/createTask').post(updateTask);
router.route('/deleteTask').delete(deleteTask);


module.exports = router