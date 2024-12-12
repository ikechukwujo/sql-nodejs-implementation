const express = require('express');
const mysql = require('mysql2');
const app = express();


// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123ikefordb**',
    database: 'group6'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/customer', (req, res) => {
    const { firstName, lastName, email, mobile, address } = req.body;
    const customer = { firstName, lastName, email, mobile, address };

    connection.query('INSERT INTO customers SET ?', customer, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});

app.post('/car', (req, res) => {
    
    const { make, year, color, discounteligible, mileage, rate_per_day, model, insurance_code } = req.body;
    const car = { make, year, color, discounteligible, mileage, rate_per_day, model, insurance_code };
    

    connection.query('INSERT INTO car SET ?', car, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});


app.post('/insurance', (req, res) => {
    
    const {insuranceid, provider, policy_num } = req.body;
    const insurance = {insuranceid, provider, policy_num};
    

    connection.query('INSERT INTO insurance SET ?', insurance, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});

app.post('/payment', (req, res) => {
    
    const {amount, method } = req.body;
    const payment = {amount, method};
    

    connection.query('INSERT INTO payment SET ?', payment, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});

app.post('/discount', (req, res) => {
   
    const {percent, code, status } = req.body;
    const discount = {percent , code, status};
   

    connection.query('INSERT INTO discount SET ?', discount, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});

app.post('/rental', (req, res) => {
    
    const {start_date, end_date } = req.body;
    const rental = {start_date, end_date};


    connection.query('INSERT INTO rental SET ?', rental, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});

app.post('/suv', (req, res) => {

    const {seat_cap} = req.body;
    const suv = {seat_cap};
   

    connection.query('INSERT INTO car_suv SET ?', suv, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});

app.post('/sportcar', (req, res) => {

    const {horsepower, zeroToSixty} = req.body;
    const sport = {horsepower, zeroToSixty};


    connection.query('INSERT INTO car_sport SET ?', sport, (err, result) => {
        if (err) {
            console.error('Error inserting into MySQL: ' + err.stack);
            res.send('Error submitting data.');
            return;
        }
        console.log('Inserted ' + result.affectedRows + ' row(s) into MySQL.');
        res.send('Data submitted successfully.');
    });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
