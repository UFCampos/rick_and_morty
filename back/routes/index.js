const getCharById = require('../controllers/getCharById');
const getAllChars = require('../controllers/getAllChars');
const {postFav, deleteFav} = require('../controllers/handleFavorites');
const login = require('../controllers/login');
const router = require('express').Router()

router.get('/character/:id', getCharById);
router.get('/character', getAllChars);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = {router}
