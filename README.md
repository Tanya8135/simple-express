# simple-express

# Структура:

├── app.js
├── bin
│ └── www
├── package.json
├── public
│ ├── images
│ ├── javascripts
│ └── stylesheets
│ └── style.css
├── routes
│ ├── index.js
│ └── users.js
└── views
├── error.pug
├── index.pug
└── response.pug

--- Виконано npm i

--- Встановлено npm i nodemon -D

--- Після у файлі package.json для запуску програми в режимі розробки додамо скрипт start:dev

  "scripts": {
    "start": "node ./bin/www",
    "start:dev": "nodemon ./bin/www"
  },

# Запуск програми `npm run start:dev`

--- Рендер виконується у файлі роутингу 'routes/index.js'

--- Встановили 'Chrome Web Store'.

