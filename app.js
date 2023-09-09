/* Спочатку підключено всі сторонні пакети, які потрібні 
для функціонування програми. */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/* Підключаємо роути, надалі ми їх змінимо та внесемо 
додатковий функціонал. */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

/* Після створюється екземпляр програми та підключаємо шаблони */
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Після цього йде блок підключення проміжного ПЗ */
/* Підключається логер, обробка JSON і даних форм, і в 
кінці модуль для роботи з cookie. */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Далі встановлюємо обробку статичних ресурсів */
app.use(express.static(path.join(__dirname, 'public')));

/* Після йде підключення роутерів до програми */
app.use('/', indexRouter);
app.use('/users', usersRouter);

/* Пам'ятайте, що порядок проміжного ПЗ має значення. 
В кінці програми йде обробка помилок. Спочатку відбувається 
обробка неіснуючого роуту чи помилка 404 */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

/* По суті відсутність обробника на роутер, що запитується 
у сервера, це не помилка і ми створюємо помилку та прокидаємо 
її далі для обробки. */
/* Тут і відбувається обробка помилки. Ми прокидаємо змінні 
message та error у шаблон 'error.ejs' і виконуємо його рендер */
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/* запуск програми  npm run start:dev */