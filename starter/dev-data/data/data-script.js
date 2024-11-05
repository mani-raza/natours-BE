
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const TourModel = require('./../../Models/TourModel');
const fs = require('fs');
//const { kill } = require('process');
//const Tour = require('../../Models/TourModel');

dotenv.config({path: './config.env'});


const db = process.env.DATABASE //.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() =>{
    console.log("DATABASE connected");
}).catch(err => console.error(`error in db connection ${err}`));

const toursString = fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf8');

const importTours =  async (req, res) => {

    try {
        console.log('importing touras');
        const toursJson = JSON.parse(toursString);
        await TourModel.create(toursJson);
        process.exit();
     } catch (err) {
         console.log("error in importTours");
         process.exit();
     }

};

const deleteTours = async (req, res) => {
    try {
        await TourModel.deleteMany();
        process.exit();
    } catch (err) {
        process.exit();
    }
}

if (process.argv[2] == '--import') {
    importTours()
} else if (process.argv[2] == '--delete') {
    deleteTours()
}



