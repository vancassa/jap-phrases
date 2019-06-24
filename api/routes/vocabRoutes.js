const vocabBuilder = require('../controllers/vocabController');

module.exports = app => {
  app
    .route('/api/words')
    .get(vocabBuilder.list_all_words)
    .post(vocabBuilder.create_a_word);

  app
    .route('/api/words/:wordId')
    .get(vocabBuilder.read_a_word)
    .put(vocabBuilder.update_a_word)
    .delete(vocabBuilder.delete_a_word);
};
