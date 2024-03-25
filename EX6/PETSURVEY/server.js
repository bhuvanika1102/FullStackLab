const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/petSurvey')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ' + err);
  });


const surveySchema = new mongoose.Schema({
    Ownername:String,
    petType: String,
    breed:String,
    age: Number,
    color:String,
    trained:String,
    mode:String,
    adoption:String
});

const PetSurvey = mongoose.model('PetSurvey', surveySchema);

app.post('/survey', (req, res) => {
    const surveyData = req.body;
    console.log(surveyData);

    const survey = new PetSurvey(surveyData);

    survey.save()
        .then(() => {
            res.status(201).send('Survey submitted successfully.');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error submitting survey.');
        });
});

app.get('/survey/results', (req, res) => {
    PetSurvey.find()
        .then(surveys => {
            res.json(surveys);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching survey results.');
        });
});

app.get('/survey/analyse', (req, res) => {
    PetSurvey.find({ $and: [{ petType: 'dog' }, { age: { $lt: 5 } }] })
  .then(surveys => {
    console.log(surveys);
    res.json(surveys);
  })
  .catch(err => {
    console.error(err);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
