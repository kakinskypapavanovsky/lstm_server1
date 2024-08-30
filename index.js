const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//____________________________________________
// table duration
//------------------------------------------


// Define Schema and Model for the dax_1hr_duration_EF2_2_1_7_Ta Collection
const Dax1HrDurationEF2Schema = new mongoose.Schema({
    no_: Number,
    peakRow: Number,
    peakDay: Number,
    peakPrice: Number,
    crashEndRow: Number,
    crashEndDay: Number,
    crashEndPrice: Number,
    crashDuration: Number,
    crashSize: Number,
    durationError_m_1_: Number,
    predictedDuration_m_1_: Number,
    targetDuration_m_1_: Number,
    durationError_m_2_: Number,
    predictedDuration_m_2_: Number,
    targetDuration_m_2_: Number,
    durationError_m_3_: Number,
    predictedDuration_m_3_: Number,
    targetDuration_m_3_: Number,
    sizeError_m_1_: Number,
    predictedSize_m_1_: Number,
    targetSize_m_1_: Number,
    sizeError_m_2_: Number,
    predictedSize_m_2_: Number,
    targetSize_m_2_: Number
}, { collection: 'dax_1hr_duration_EF2_2_1_7_Ta' });

const Dax1HrDurationEF2Model = mongoose.model('Dax1HrDurationEF2', Dax1HrDurationEF2Schema);
// Define Schema and Model for the dax_1day_duration_EF2_2_1_1_Ta Collection
const Dax1DayDurationEF2Schema = new mongoose.Schema({
    crashEndRow: Number,
    crashEndDay: Number,
    crashEndPrice: Number,
    crashDuration: Number,
    crashSize: Number,
    durationError_m_1_: Number,
    predictedDuration_m_1_: Number,
    targetDuration_m_1_: Number,
    durationError_m_2_: Number,
    predictedDuration_m_2_: Number,
    targetDuration_m_2_: Number,
    durationError_m_3_: Number,
    predictedDuration_m_3_: Number,
    targetDuration_m_3_: Number,
    sizeError_m_1_: Number,
    predictedSize_m_1_: Number,
    targetSize_m_1_: Number,
    sizeError_m_2_: Number,
    predictedSize_m_2_: Number,
    targetSize_m_2_: Number,
    sizeError_m_3_: Number,
    predictedSize_m_3_: Number,
    targetSize_m_3_: Number
}, { collection: 'dax_1day_duration_EF2_2_1_1_Ta' });

const Dax1DayDurationEF2Model = mongoose.model('Dax1DayDurationEF2', Dax1DayDurationEF2Schema);
// more table
// Define Schema and Model for the dax_4hr_duration_EF2_2_1_11_Ta Collection
const Dax4HrDurationEF2Schema = new mongoose.Schema({
    no_: Number,
    peakRow: Number,
    peakDay: Number,
    peakPrice: Number,
    crashEndRow: Number,
    crashEndDay: Number,
    crashEndPrice: Number,
    crashDuration: Number,
    crashSize: Number,
    durationError_m_1_: Number,
    predictedDuration_m_1_: Number,
    targetDuration_m_1_: Number,
    durationError_m_2_: Number,
    predictedDuration_m_2_: Number,
    targetDuration_m_2_: Number,
    durationError_m_3_: Number,
    predictedDuration_m_3_: Number,
    targetDuration_m_3_: Number,
    sizeError_m_1_: Number,
    predictedSize_m_1_: Number,
    targetSize_m_1_: Number,
    sizeError_m_2_: Number,
    predictedSize_m_2_: Number,
    targetSize_m_2_: Number
}, { collection: 'dax_4hr_duration_EF2_2_1_11_Ta' });

const Dax4HrDurationEF2Model = mongoose.model('Dax4HrDurationEF2', Dax4HrDurationEF2Schema);




 //--------------------------------------------------
 // Define Schema and Model for the dax_30min_duration_EF2_2_1_4_Ta Collection
const Dax30MinDurationEF2Schema = new mongoose.Schema({
    no_: Number,
    peakRow: Number,
    peakDay: Number,
    peakPrice: Number,
    crashEndRow: Number,
    crashEndDay: Number,
    crashEndPrice: Number,
    crashDuration: Number,
    crashSize: Number,
    durationError_m_1_: Number,
    predictedDuration_m_1_: Number,
    targetDuration_m_1_: Number,
    durationError_m_2_: Number,
    predictedDuration_m_2_: Number,
    targetDuration_m_2_: Number,
    durationError_m_3_: Number,
    predictedDuration_m_3_: Number,
    targetDuration_m_3_: Number,
    sizeError_m_1_: Number,
    predictedSize_m_1_: Number,
    targetSize_m_1_: Number,
    sizeError_m_2_: Number,
    predictedSize_m_2_: Number,
    targetSize_m_2_: Number
}, { collection: 'dax_30min_duration_EF2_2_1_4_Ta' });

const Dax30MinDurationEF2Model = mongoose.model('Dax30MinDurationEF2', Dax30MinDurationEF2Schema);

//




const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = 'mongodb+srv://svmlstmganproject:G80qmnC3nOo0GnIX@cluster0.pupsn.mongodb.net/LSTM?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('Connection to MongoDB is successful!'))
   .catch(err => console.error('MongoDB connection error:', err));


// Endpoint for the dax_1hr_duration_EF2_2_1_7_Ta Collection
app.get('/getDax1HrDurationEF2Data', (req, res) => {
    Dax1HrDurationEF2Model.find()
       .then(data => res.json(data))
       .catch(err => res.status(500).json(err));
 });
// more table !!!!!
 
// Endpoint for the dax_1day_duration_EF2_2_1_1_Ta Collection
app.get('/getDax1DayDurationEF2Data', (req, res) => {
   Dax1DayDurationEF2Model.find()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
});

 
// Endpoint for the dax_4hr_duration_EF2_2_1_11_Ta Collection
app.get('/getDax4HrDurationEF2Data', (req, res) => {
    Dax4HrDurationEF2Model.find()
       .then(data => res.json(data))
       .catch(err => res.status(500).json(err));
 });
//Endpoint for the dax_30min_duration_EF2_2_1_4_Ta Collection
app.get('/getDax30MinDurationEF2Data', (req, res) => {
   Dax30MinDurationEF2Model.find()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
});
// Start the server on port 3011
app.listen(3004, () => {
   console.log("Server is running on port 3002");
});
