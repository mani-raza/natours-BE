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

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A Tour must have a name']
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A Tour must have a price']
    }
});

const Tour = mongoose.model('Tour', tourSchema);

const tourObj = new Tour({
    name: 'Skardu',
    price: 4000
});

tourObj.save().then(obj => {
    console.log("SSSS: Tour Object saved");
    console.log(obj);

}).catch(err =>{
    console.log("SSSS: Error saving tour object");
    console.log(err);
});

const port = process.env.PORT || 8000;

console.log('server js....' + port);
app.listen(port, () => {
    console.log('listening on port ${port}' + port);
});