const {Router} = require('express');
const {usersList, listUserListByID} = require ('../controllers/users.js');
const router = Router();

//http://localhost:3000/api/v1/users/?
router.get('/', usersList)
router.get('/:id',listUserListByID)

module.exports = router;
