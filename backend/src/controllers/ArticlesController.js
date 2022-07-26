const models = require("../models");

class ArticlesController {
  static browse = (req, res) => {
    models.articles
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ArticlesController;
