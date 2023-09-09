var express = require('express');
var router = express.Router();

/* Додали об'єкт з контактами */
const contacts = [
  { id: '1', username: 'Felix', surname: 'Brown', email: 'felix@test.com' },
  { id: '2', username: 'Sonya', surname: 'Redhead', email: 'sonya@test.com' },
  { id: '3', username: 'Conan', surname: 'Barbarian', email: 'conan@test.com' },
];

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function (req, res, next) {
  res.json(contacts);
});

/* Додали обробник для отримання унікального користувача за його id */
router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  const contact = contacts.filter(el => el.id === id);
  res.json(contact);
});

module.exports = router;

/* Тепер за зверненням до урлу /users/2 ми отримуємо дані Рудої Соні

[
  {
    "id": "2",
    "username": "Sonya",
    "surname": "Redhead",
    "email": "sonya@test.com"
  }
] */