const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs  = require('express-handlebars');

const connection = require('./connection');

const app = express();
const port = 3000;

app.use(express.static('template'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
}));

app.set('views', path.join(__dirname, 'views'));
app.set('partials', path.join(__dirname, 'views/partials'));


app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', 'hbs');

let users = [];
const user = {
  UserID: '',
  FIO: '',
  PhoneNumber: '',
  Email: '',
  Nickname: '',
  Password: '',
  username: '',
  password: ''
};
function getUsers(callback) {
  connection.query('SELECT *,Nickname as username,Password as password  FROM User', (error, results) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

// Call getUsers and use retrieved data
getUsers((error, results) => {
    if (error) {
      console.error('Ошибка получения пользователей:', error);
      return;
    }
    users = results; // Предполагая успешный запрос в базу данных, обновляем массив пользователей
    console.log(users); // Обработайте извлеченные данные здесь
  });


  let cars = [];
  const car = {

    CarID:"",
    Mark:"",
    Model:"",
    GosNumber:"",
    Class:"",
    Info:""    
  };
  function getCars(callback) {
    connection.query('SELECT Cars.*, CarsInfo.* FROM Cars JOIN CarsInfo ON Cars.Info = CarsInfo.InfoID', (error, results) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, results);
    });
  }
  
  // Call getUsers and use retrieved data
  getCars((error, results) => {
      if (error) {
        console.error('Ошибка получения пользователей:', error);
        return;
      }
      cars = results; // Предполагая успешный запрос в базу данных, обновляем массив пользователей
      console.log(cars); // Обработайте извлеченные данные здесь
    });

//главная страница
app.get('/', function(req, res) {
    res.render('index', { username: req.session.username,
                          navbar: 'navbar',
                          footer: 'footer',
                          authenticated: req.session.authenticated || false ,
                          user
    });
});



// Обработка регистрации и входа в систему
app.post('/reg', (req, res) => {
    const { action, username, password } = req.body;

    if (!action || !username || !password) {
        if (!action) {
            console.log('Отсутствует действие в запросе');
        }
        if (!username) {
            console.log('Отсутствует имя пользователя в запросе');
        }
        if (!password) {
            console.log('Отсутствует пароль в запросе');
        }
        return res.status(400).send('Пропущены обязательные поля в запросе');
    }
    
    if (action !== 'register' && action !== 'login') {
        console.log('Недопустимое действие');
        return res.status(400).send('Недопустимое действие');
    }
    console.log(`Получен запрос на регистрацию/вход для пользователя: ${username}, действие: ${action}`);

    if (action === 'register') {
        // Регистрация нового пользователя
        if (users.some(user => user.username === username)) {
            console.log(`Пользователь с именем ${username} уже существует`);
            res.render('reg', { message: 'Пользователь с таким именем уже существует', navbar: globalNavbar, footer: globalFooter });
        } else {
            users.push({ username, password });
            console.log(`Пользователь ${username} успешно зарегистрирован`);
            res.redirect('/profile');
        }
    } else if (action === 'login') {
        // Вход в систему
        
        const loggedInUser = users.find(user => user.username === username && user.password === password);
        console.log(`Попытка входа для пользователя ${username}`);
        if (loggedInUser) {
            
            req.session.authenticated = true;
            req.session.username = username;
            console.log(`Пользователь ${username} успешно вошел в систему`);
            user.UserID = loggedInUser.UserID; // Пример: если UserID - это идентификатор пользователя.
            user.FIO = loggedInUser.FIO;
            user.PhoneNumber = loggedInUser.PhoneNumber;
            user.Email = loggedInUser.Email;
            user.Nickname = loggedInUser.Nickname;
            res.redirect('/profile');
        } else {
            console.log(`Неправильное имя пользователя или пароль для пользователя ${username}`);
            res.render('reg', { message: 'Неправильное имя пользователя или пароль', username: req.session.username,
                                                                                      navbar: 'navbar',
                                                                                      footer: 'footer',
                                                                                      authenticated: req.session.authenticated || false });
        }
    }
});

// Защищенная страница профиля
app.get('/profile', (req, res) => {
    if (req.session.authenticated) {
        res.render('profile', { username: req.session.username,
                                navbar: 'navbar',
                                footer: 'footer',
                                authenticated: req.session.authenticated || false,
                                user
        });
    } else {
        res.redirect('/reg');
    }
});

// Страница с формой регистрации и входа в систему
app.get('/reg', (req, res) => {
    res.render('reg', { username: req.session.username,
                        navbar: 'navbar',
                        footer: 'footer',
                        authenticated: req.session.authenticated || false });
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/'); // После выхода перенаправляем пользователя на главную страницу или куда-то ещё
      }
    });
  });

//страница с арендой авто
app.get('/auto', function(req, res) {
  res.render('auto', { username: req.session.username,
                      navbar: 'navbar',
                      footer: 'footer',
                      authenticated: req.session.authenticated || false,
                      user,
                      cars,
                    car});
});

app.listen(port, function () {
console.log( `Сервер запущен:
http://localhost:${port}`
) ;
});
