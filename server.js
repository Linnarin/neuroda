const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Сервер отдает по статике доступ к файлам стилей`);
});
