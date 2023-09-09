var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Обробник маршруту */
/* Приймаємо дві змінні та передаємо їх для рендеру шаблону 
response.ejs, щоб показати, що дані отримано */
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  res.render('response', { title: 'Simple express app', email, password });
});

module.exports = router;
