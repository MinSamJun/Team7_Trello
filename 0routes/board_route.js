const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const router = express.Router();

const BoardController = require('../controllers/board_controller');
const boardController = new BoardController();

router.post('/boards',authMiddleware, boardController.createBoard);
router.get('/boards', boardController.getBoard);
router.put('/boards/:boardId',authMiddleware,boardController.updateBoard);
router.delete('/boards/:boardId',authMiddleware,boardController.deleteBoard);

module.exports = router;
