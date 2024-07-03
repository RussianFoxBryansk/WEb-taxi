let express = require(`express`);
let fs = require('fs');
let hbs = require(`hbs`);
let app = express();
let port = 3000;

app.use(express.static(`template`));


app.set('views','views');
app.set('view engine', 'hbs');



let globalNavbar, globalFooter;

fs.readFile('views/navbar/navbar.hbs', 'utf8', (err, navbar) => {
    if (err) {
        console.error('Ошибка при чтении файла navbar:', err);
    }
    globalNavbar = navbar;
});

fs.readFile('views/footer.hbs', 'utf8', (err, footer) => {
    if (err) {
        console.error('Ошибка при чтении файла footer:', err);
    }
    globalFooter = footer;
});



app.get('/', function(req, res) {
    res.render('index', { navbar: globalNavbar, footer: globalFooter });
});

app.get('/reg', function(req, res) {
    res.render('reg', { navbar: globalNavbar, footer: globalFooter });
});

app.get('/profile', function(req, res) {
    res.render('profile', { navbar: globalNavbar, footer: globalFooter });
});
app.get('/auto', function(req, res) {
    res.render('auto', { navbar: globalNavbar, footer: globalFooter });
});

app.listen(port, function () {
console.log( `Сервер запущен:
http://localhost:${port}`
) ;
});
