const express = require('express');
const app = express();
const { poolPromise, sql } = require('./db');

app.use(express.json());

// Define your API routes here
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend!' });
});


app.get('/test', (req, res) => {
res.json({ message: 'This is a route test!' });
});


app.get('/', (req, res) => {
res.json({ message: 'This is a route test!' });
});

// Example route to retrieve data from the database
app.get('/testData', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query('SELECT * FROM Gyms');
    res.json(result.recordset);
  } catch (error) {
    console.error('SQL error', error);
    res.status(500).json({ error: 'Database error' });
  }
});


app.get('/testDataBodypart', async (req, res) => {

  const bodyPart = req.body.bodyPart;
  console.log(bodyPart);
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(`SELECT * FROM dbo.workouts WHERE bodyPart = '${bodyPart}'`);
    res.json(result.recordset);
  } catch (error) {
    console.error('SQL error', error);
    res.status(500).json({ error: 'Database error' });
  }
});



app.get('/testDataTarget', async (req, res) => {
  

  const target = req.body.target;
  console.log(target);
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(`SELECT * FROM dbo.workouts WHERE target = '${target}'`);
    res.json(result.recordset);
  } catch (error) {
    console.error('SQL error', error);
    res.status(500).json({ error: 'Database error' });
  }
});


app.get('/testDataEquipment', async (req, res) => {


  const target = req.body.target;
  console.log(target);
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(`SELECT * FROM dbo.workouts WHERE target = '${target}'`);
    res.json(result.recordset);
  } catch (error) {
    console.error('SQL error', error);
    res.status(500).json({ error: 'Database error' });
  }
});







const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});