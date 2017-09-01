const express = require('express');
const wordsController = require('../controllers/words-controller')
const wordHelper = require('../services/word-helper');
const wordsRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');


// wordsRouter.get('/', wordsController.index);

// wordsRouter.get('/', (req, res) => {
//   res.render('index');
// });

wordsRouter.post('/results', wordHelper.getWord, wordsController.results);

// wordsRouter.post('/', wordsController.create);

// wordsRouter.get('/auth/dictionary', (req, res) => {
//   res.render('words/dictionary');
// });


// authHelpers.loginRequired,
wordsRouter.post('/', authHelpers.loginRequired, wordsController.create, wordsController.userAndWord, wordsController.showWordsUser);

wordsRouter.get('/:id', wordsController.show);

wordsRouter.delete('/:id', wordsController.destroy);

wordsRouter.put('/:id', wordsController.update);

wordsRouter.get('/:id/edit', wordsController.edit);

module.exports = wordsRouter;

