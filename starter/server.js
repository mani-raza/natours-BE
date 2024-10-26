const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: './config.env'});


const port = process.env.PORT || 8000;

console.log('server js....' + port);
app.listen(port, () => {
    console.log('listening on port ${port}' + port);
});