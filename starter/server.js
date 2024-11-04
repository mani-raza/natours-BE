const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({path: './config.env'});

const db = process.env.DATABASE //.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() =>{
    console.log("DATABASE connected");
}).catch(err => console.error(`error in db connection ${err}`));


const port = process.env.PORT || 8000;

console.log('server js....' + port);
app.listen(port, () => {
    console.log('listening on port ${port}' + port);
});